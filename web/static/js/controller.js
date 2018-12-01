// import { init as initApm } from 'elastic-apm-js-base';
var global = global || window;

(function(angular) {
    'use strict';

    var robotshop = angular.module('robotshop', ['ngRoute'])

    var apm = elasticApm.init({
      serviceName: 'web-rum',
      serviceVersion: 'v1.0',
      serverUrl: 'http://localhost:8200',
      pageLoadTransactionName: "first-page-load",
      distributedTracing: true,
      distributedTracingOrigins: [],
      pageLoadTraceId: "123",
      pageLoadSpanId: "456",
      pageLoadSampled: true
    });

    // Share user between controllers
    robotshop.factory('apmFactory', function() {
        var data = {
            apm: apm
          };

        return data;
    });

    robotshop.factory('currentUser', function() {
        var data = {
            uniqueid: '',
            user: {},
            cart: {
                total: 0
            }
        };

        return data;
    });

    robotshop.config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
        $routeProvider.when('/', {
            templateUrl: 'splash.html',
            controller: 'shopform'
        }).when('/search/:text', {
            templateUrl: 'search.html',
            controller: 'searchform'
        }).when('/product/:sku', {
            templateUrl: 'product.html',
            controller: 'productform'
        }).when('/login', {
            templateUrl: 'login.html',
            controller: 'loginform'
        }).when('/cart', {
            templateUrl: 'cart.html',
            controller: 'cartform'
        }).when('/shipping', {
            templateUrl: 'shipping.html',
            controller: 'shipform'
        }).when('/payment', {
            templateUrl: 'payment.html',
            controller: 'paymentform'
        });

        // needed for URL rewrite hash
        $locationProvider.html5Mode(true);
    }]);

    // clear template fragment cache, development
    // TODO - disable this later
    robotshop.run(function($rootScope, $templateCache) {
        $rootScope.$on('$viewContentLoaded', function() {
            console.log('>>> clearing cache');
            $templateCache.removeAll();
        });

        // Instana EUM
        // may not be loaded so check for ineum object
        $rootScope.$on('$routeChangeStart', (event, next, current) => {
            if(typeof ineum !== 'undefined') {
                ineum('startSpaPageTransition');
            }
        });
        $rootScope.$on('$routeChangeSuccess', (event, next, current) => {
            if(typeof ineum !== 'undefined') {
                ineum('endSpaPageTransition', {'status': 'completed', 'url': window.location.href});
            }
        });
        $rootScope.$on('$routeChangeError', (event, next, current) => {
            if(typeof ineum !== 'undefined') {
                ineum('endSpaPageTransition', {'status': 'error'});
            }
        });
    });

    robotshop.controller('shopform', function($scope, $http, $location, currentUser, apmFactory) {
        $scope.data = {};

        $scope.apm = apmFactory.apm;

        $scope.data.uniqueid = 'foo';
        $scope.data.categories = [];
        $scope.data.products = {};
        $scope.data.searchText = '';
        // empty cart
        $scope.data.cart = {
            total: 0
        };

        $scope.getProducts = function(category) {

            if($scope.data.products[category]) {
                $scope.data.products[category] = null;
            } else {

                $scope.transaction = $scope.apm.startTransaction('getProducts', 'custom');
                $scope.httpSpan = $scope.transaction.startSpan('getProducts', 'http');

                $http({
                    url: '/api/catalogue/products/' + category,
                    method: 'GET'
                }).then((res) => {
                    $scope.data.products[category] = res.data;

                    $scope.httpSpan.end();
                    $scope.transaction.end();

                }).catch((e) => {
                    console.log('ERROR', e);

                    $scope.apm.captureError(e);
                });
            }
        };

        $scope.search = function() {
            if($scope.data.searchText) {
                $location.url('/search/' + $scope.data.searchText);
                $scope.data.searchText = '';
            }
        };

        function getCategories() {

            $scope.transaction = $scope.apm.startTransaction('getCategories', 'custom');
            $scope.httpSpan = $scope.transaction.startSpan('getCategories', 'http');

            $http({
                url: '/api/catalogue/categories',
                method: 'GET'
            }).then((res) => {
                $scope.data.categories = res.data;
                console.log('categories loaded');

                $scope.httpSpan.end();
                $scope.transaction.end();
            }).catch((e) => {
                console.log('ERROR', e);

                $scope.apm.captureError(e);
            });
        }

        // unique id for cart etc
        function getUniqueid() {
            return new Promise((resolve, reject) => {

            $scope.transaction = $scope.apm.startTransaction('getUniqueid', 'custom');
            $scope.httpSpan = $scope.transaction.startSpan('getUniqueid', 'http');

            $http({
                url: '/api/user/uniqueid',
                method: 'GET'
            }).then((res) => {

                $scope.httpSpan.end();
                $scope.transaction.end();

                resolve(res.data.uuid);
            }).catch((e) => {
                console.log('ERROR', e);

                $scope.apm.captureError(e);

                reject(e);
            });
        });
        }

        // init
        console.log('shopform starting...');
        getCategories();
        if(!currentUser.uniqueid) {
            console.log('generating uniqueid');
            getUniqueid().then((id) => {
                $scope.data.uniqueid = id;
                currentUser.uniqueid = id;
            }).catch((e) => {
                console.log('ERROR', e);
            });
        }

        // watch for login
        $scope.$watch(() => { return currentUser.uniqueid; }, (newVal, oldVal) => {
            if(newVal !== oldVal) {
                $scope.data.uniqueid = currentUser.uniqueid;
            }
        });

        // watch for cart changes
        $scope.$watch(() => { return currentUser.cart.total; }, (newVal, oldVal) => {
            if(newVal !== oldVal) {
                $scope.data.cart = currentUser.cart;
            }
        });
    });

    robotshop.controller('searchform', function($scope, $http, $routeParams, apmFactory) {

        $scope.apm = apmFactory.apm;

        $scope.data = {};
        $scope.data.searchResults = [];

        function search(text) {
            if(text) {

                $scope.transaction = $scope.apm.startTransaction('search', 'custom');
                $scope.httpSpan = $scope.transaction.startSpan('search', 'http');

                $http({
                    url: '/api/catalogue/search/' + text,
                    method: 'GET'
                }).then((res) => {
                    console.log('search results', res.data);
                    $scope.data.searchResults = res.data;

                    $scope.httpSpan.end();
                    $scope.transaction.end();
                }).catch((e) => {
                    console.log('ERROR', e);

                    $scope.apm.captureError(e);
                });
            }
        }

        var text = $routeParams.text;
        console.log('search init with', text);
        search(text);
    });

    robotshop.controller('productform', function($scope, $http, $routeParams, $timeout, currentUser, apmFactory) {
        $scope.data = {};
        $scope.data.message = ' ';
        $scope.data.product = {};
        $scope.data.rating = {};
        $scope.data.rating.avg_rating = 0;
        $scope.data.quantity = 1;

        $scope.apm = apmFactory.apm;

        $scope.addToCart = function() {
            var url = '/api/cart/add/' + currentUser.uniqueid + '/' + $scope.data.product.sku + '/' + $scope.data.quantity;
            console.log('addToCart', url);

            $scope.transaction = $scope.apm.startTransaction('addToCart', 'custom');
            $scope.httpSpan = $scope.transaction.startSpan('addToCart', 'http');

            $http({
                url: url,
                method: 'GET'
            }).then((res) => {
                console.log('cart', res.data);
                currentUser.cart = res.data;
                $scope.data.message = 'Added to cart';
                $timeout(clearMessage, 1500);

                $scope.httpSpan.end();
                $scope.transaction.end();

            }).catch((e) => {
                console.log('ERROR', e);
                $scope.data.message = 'ERROR ' + e;
                $timeout(clearMessage, 1500);

                $scope.apm.captureError(e);
            });
        };

        $scope.rateProduct = function(score) {
            console.log('rate product', $scope.data.product.sku, score);
            var url = '/api/ratings/api/rate/' + $scope.data.product.sku + '/' + score;

            $scope.transaction = $scope.apm.startTransaction('rateProduct', 'custom');
            $scope.httpSpan = $scope.transaction.startSpan('rateProduct', 'http');

            $http({
                url: url,
                method: 'PUT'
            }).then((res) => {
                $scope.data.message = 'Thankyou for your feedback';
                $timeout(clearMessage, 1500);
                loadRating($scope.data.product.sku);

                $scope.httpSpan.end();
                $scope.transaction.end();
            }).catch((e) => {
                console.log('ERROR', e);

                $scope.apm.captureError(e);
            });
        };

        $scope.glowstan = function(vote, val) {
            console.log('glowstan', vote);
            var idx = vote;
            while(idx > 0) {
                document.getElementById('vote-' + idx).style.opacity = val;
                idx--;
            }
        };

        function loadProduct(sku) {

            $scope.transaction = $scope.apm.startTransaction('loadProduct', 'custom');
            $scope.httpSpan = $scope.transaction.startSpan('loadProduct', 'http');

            $http({
                url: '/api/catalogue/product/' + sku,
                method: 'GET'
            }).then((res) => {
                $scope.data.product = res.data;

                $scope.httpSpan.end();
                $scope.transaction.end();
            }).catch((e) => {
                console.log('ERROR', e);

                $scope.apm.captureError(e);
            });
        }

        function loadRating(sku) {

            $scope.transaction = $scope.apm.startTransaction('loadRating', 'custom');
            $scope.httpSpan = $scope.transaction.startSpan('loadRating', 'http');

            $http({
                url: '/api/ratings/api/fetch/' + sku,
                method: 'GET'
            }).then((res) => {
                $scope.data.rating = res.data;

                $scope.httpSpan.end();
                $scope.transaction.end();
            }).catch((e) => {
                console.log('ERROR', e);

                $scope.apm.captureError(e);
            });
        }

        function clearMessage() {
            console.log('clear message');
            $scope.data.message = ' ';
        }

        loadProduct($routeParams.sku);
        loadRating($routeParams.sku);
    });

    robotshop.controller('cartform', function($scope, $http, $location, currentUser, apmFactory) {
        $scope.data = {};
        $scope.data.cart = {};
        $scope.data.cart.total = 0;
        $scope.data.uniqueid = currentUser.uniqueid;

        $scope.apm = apmFactory.apm;

        $scope.buy = function() {
            $location.url('/shipping');
        };

        $scope.change = function(sku, qty) {

            $scope.transaction = $scope.apm.startTransaction('change', 'custom');
            $scope.httpSpan = $scope.transaction.startSpan('change', 'http');

            // update the cart
            var url = '/api/cart/update/' + $scope.data.uniqueid + '/' + sku + '/' + qty;
            console.log('change', url);
            $http({
                url: url,
                method: 'GET'
            }).then((res) => {
                $scope.data.cart = res.data;
                currentUser.cart = res.data;

                $scope.httpSpan.end();
                $scope.transaction.end();
            }).catch((e) => {
                console.log('ERROR', e);

                $scope.apm.captureError(e);
            });
        };

        function loadCart(id) {
            $scope.transaction = $scope.apm.startTransaction('loadCart', 'custom');
            $scope.httpSpan = $scope.transaction.startSpan('loadCart', 'http');

            $http({
                url: '/api/cart/cart/' + id,
                method: 'GET'
            }).then((res) => {
                var cart = res.data;
                // remove shipping - last item in cart
                if(cart.items[cart.items.length - 1].sku == 'SHIP') {
                    $http({
                        url: '/api/cart/update/' + id + '/SHIP/0',
                        method: 'GET'
                    }).then((res) => {
                        currentUser.cart = res.data;
                        $scope.data.cart = res.data;

                        $scope.httpSpan.end();
                        $scope.transaction.end();
                    }).catch((e) => {
                        console.log('ERROR', e);

                        $scope.apm.captureError(e);
                    });
                } else {
                    $scope.data.cart = cart;
                }
            }).catch((e) => {
                console.log('ERROR', e);
            });
        }

        loadCart($scope.data.uniqueid);
        console.log('cart init');
    });

    robotshop.controller('shipform', function($scope, $http, $location, currentUser, apmFactory) {
        $scope.data = {};
        $scope.data.countries = [];
        $scope.data.selectedCountry = '';
        $scope.data.selectedLocation = '';
        $scope.data.disableCity = true;
        $scope.data.disableCalc = true;
        $scope.data.shipping = '';

        $scope.apm = apmFactory.apm;

        $scope.calcShipping = function() {
            console.log('calc uuid', uuid);

            $scope.transaction = $scope.apm.startTransaction('calcShipping', 'custom');
            $scope.httpSpan = $scope.transaction.startSpan('calcShipping', 'http');

            $http({
                url: '/api/shipping/calc/' + uuid,
                method: 'GET'
            }).then((res) => {
                console.log('shipping data', res.data);
                $scope.data.shipping = res.data;
                $scope.data.shipping.location = $scope.data.selectedCountry.name + ' ' + autoLocation;

                $scope.httpSpan.end();
                $scope.transaction.end();
            }).catch((e) => {
                console.log('ERROR', e);

                $scope.apm.captureError(e);
            });
        };

        $scope.confirmShipping = function() {
            console.log('shipping confirmed');

            $scope.transaction = $scope.apm.startTransaction('confirmShipping', 'custom');
            $scope.httpSpan = $scope.transaction.startSpan('confirmShipping', 'http');

            $http({
                url: '/api/shipping/confirm/' + currentUser.uniqueid,
                method: 'POST',
                data: $scope.data.shipping
            }).then((res) => {
                $scope.httpSpan.end();
                $scope.transaction.end();

                // go to final confirmation
                console.log('confirm cart', res.data);
                // save new cart
                currentUser.cart = res.data;
                $location.url('/payment');
            }).catch((e) => {
                console.log('ERROR', e);

                $scope.apm.captureError(e);
            });
        };

        $scope.countryChanged = function() {
            console.log('selected', $scope.data.selectedCountry);
            if($scope.data.selectedCountry) {
                $scope.data.disableCity = false;
            }
            $scope.data.selectedLocation = '';
            $scope.data.disableCalc = true;
            $scope.data.shipping = '';
        };

        // auto-complete
        var autoLocation;
        var uuid;

        function loadCodes() {

            $scope.transaction = $scope.apm.startTransaction('loadCodes', 'custom');
            $scope.httpSpan = $scope.transaction.startSpan('loadCodes', 'http');

            $http({
                url: '/api/shipping/codes',
                method: 'GET'
            }).then((res) => {
                $scope.data.countries = res.data;

                $scope.httpSpan.end();
                $scope.transaction.end();
            }).catch((e) => {
                console.log('ERROR', e);

                $scope.apm.captureError(e);
            });
        }

        function buildauto() {
            autoLocation = new autoComplete({
                selector: 'input[id=location]',
                source: (term, suggest) => {
                    console.log('autocomplete', term);
                    $scope.data.disableCalc = true;

                    $scope.transaction = $scope.apm.startTransaction('buildAutoSuggest', 'custom');
                    $scope.httpSpan = $scope.transaction.startSpan('buildAutoSuggest', 'http');

                    $http({
                        url: '/api/shipping/match/' + $scope.data.selectedCountry.code + '/' + term,
                        method: 'GET'
                    }).then((res) => {
                        console.log('suggest', res.data);
                        suggest(res.data);

                        $scope.httpSpan.end();
                        $scope.transaction.end();
                    }).catch((e) => {
                        console.log('ERROR', e);

                        $scope.apm.captureError(e);
                    });
                },
                renderItem: (item, search) => {
                    console.log('render', item, search);
                    return '<div class="autocomplete-suggestion" loc-uuid="' + item.uuid + '" data-val="' + item.name + '">' + item.name + '</div>';
                },
                onSelect: (e, term, item) => {
                    console.log('select', term, item);
                    uuid = item.getAttribute('loc-uuid');
                    autoLocation = item.getAttribute('data-val');
                    $scope.data.disableCalc = false;
                    $scope.data.shipping = '';
                    // synchronise angular
                    $scope.$apply();
                }
            });
        }

        console.log('shipform init');
        loadCodes();
        buildauto();
    });

    robotshop.controller('paymentform', function($scope, $http, currentUser, apmFactory) {
        $scope.data = {};
        $scope.data.message = ' ';
        $scope.data.buttonDisabled = false;
        $scope.data.cont = false;
        $scope.data.uniqueid = currentUser.uniqueid;
        $scope.data.cart = currentUser.cart;

        $scope.apm = apmFactory.apm;

        $scope.pay = function() {
            $scope.data.buttonDisabled = true;

            $scope.transaction = $scope.apm.startTransaction('pay', 'custom');
            $scope.httpSpan = $scope.transaction.startSpan('pay', 'http');

            $http({
                url: '/api/payment/pay/' + $scope.data.uniqueid,
                method: 'POST',
                data: $scope.data.cart
            }).then((res) => {
                console.log('order', res.data);
                $scope.data.message = 'Order placed ' + res.data.orderid;
                // clear down cart
                $scope.data.cart = {
                    total: 0,
                    items: []
                };
                currentUser.cart = $scope.data.cart;
                $scope.data.cont = true;

                $scope.httpSpan.end();
                $scope.transaction.end();
            }).catch((e) => {
                console.log('ERROR', e);
                $scope.data.message = 'ERROR placing order';
                $scope.data.buttonDisabled = false;

                $scope.apm.captureError(e);
            });
        };

        console.log('paymentform init');
    });

    robotshop.controller('loginform', function($scope, $http, currentUser, apmFactory) {
        $scope.data = {};
        $scope.data.name = '';
        $scope.data.email = '';
        $scope.data.password = '';
        $scope.data.password2 = '';
        $scope.data.message = '';
        $scope.data.user = {};

        $scope.apm = apmFactory.apm;

        $scope.login = function() {
            $scope.data.message = '';

            $scope.transaction = $scope.apm.startTransaction('login', 'custom');
            $scope.httpSpan = $scope.transaction.startSpan('login', 'http');

            $http({
                url: '/api/user/login',
                method: 'POST',
                data: {
                    name: $scope.data.name,
                    password: $scope.data.password
                }
            }).then((res) => {
                var oldId = currentUser.uniqueid;
                $scope.data.user = res.data;
                $scope.data.user.password = '';
                $scope.data.password = $scope.data.password2 = '';
                currentUser.user = $scope.data.user;
                currentUser.uniqueid = $scope.data.user.name;
                // login OK move cart across

                $scope.httpSpan1 = $scope.transaction.startSpan('rename', 'http');
                $http({
                    url: '/api/cart/rename/' + oldId + '/' + $scope.data.user.name,
                    method: 'GET'
                }).then((res) => {
                    console.log('cart moved OK');

                    $scope.httpSpan1.end();
                }).catch((e) => {
                    // 404 is OK as cart might not exist yet
                    console.log('ERROR', e);

                    $scope.apm.captureError(e);
                });
                loadHistory(currentUser.user.name);

                $scope.httpSpan.end();
                $scope.transaction.end();

            }).catch((e) => {
                console.log('ERROR', e);
                $scope.data.message = 'ERROR ' + e.data;
                $scope.data.password = '';

                $scope.apm.captureError(e);
            });
        };

        $scope.register = function() {
            $scope.data.message = '';
            $scope.data.name = $scope.data.name.trim();
            $scope.data.email = $scope.data.email.trim();
            $scope.data.password = $scope.data.password.trim();
            $scope.data.password2 = $scope.data.password2.trim();
            // all fields complete
            if($scope.data.name && $scope.data.email && $scope.data.password && $scope.data.password2) {
                if($scope.data.password !== $scope.data.password2) {
                    $scope.data.message = 'Passwords do not match';
                    $scope.data.password = $scope.data.password2 = '';
                    return;
                }
            }

            $scope.transaction = $scope.apm.startTransaction('register', 'custom');
            $scope.httpSpan = $scope.transaction.startSpan('register', 'http');

            $http({
                url: '/api/user/register',
                method: 'POST',
                data: {
                    name: $scope.data.name,
                    email: $scope.data.email,
                    password: $scope.data.password
                }
            }).then((res) => {
                $scope.data.user = {
                    name: $scope.data.name,
                    email: $scope.data.email
                };
                $scope.data.password = $scope.data.password2 = '';
                currentUser.user = $scope.data.user;
                currentUser.uniqueid = $scope.data.user.name;

                $scope.httpSpan.end();
                $scope.transaction.end();
            }).catch((e) => {
                console.log('ERROR', e);
                $scope.data.message = 'ERROR ' + e.data;
                $scope.data.password = $scope.data.password2 = '';

                $scope.apm.captureError(e);
            });
        };

        function loadHistory(id) {

            $scope.transaction = $scope.apm.startTransaction('loadHistory', 'custom');
            $scope.httpSpan = $scope.transaction.startSpan('loadHistory', 'http');

            $http({
                url: '/api/user/history/' + id,
                method: 'GET'
            }).then((res) => {
                console.log('history', res.data);
                $scope.data.orderHistory = res.data.history;

                $scope.httpSpan.end();
                $scope.transaction.end();
            }).catch((e) => {
                console.log('ERROR', e);

                $scope.apm.captureError(e);
            });
        }

        console.log('loginform init');
        if(!angular.equals(currentUser.user, {})) {
            $scope.data.user = currentUser.user;
            loadHistory(currentUser.user.name);
        }
    });

}) (window.angular);
