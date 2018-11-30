/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["elastic-apm-js-base"] = factory();
	else
		root["elastic-apm-js-base"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var slice = [].slice;

function isCORSSupported() {
  var xhr = new window.XMLHttpRequest();
  return 'withCredentials' in xhr;
}
var rng = __webpack_require__(14);
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToHex(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return [bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]]].join('');
}

function parseUrl(url) {
  // source: angular.js/$LocationProvider
  var PATH_MATCH = /^([^?#]*)(\?([^#]*))?(#(.*))?$/;
  var match = PATH_MATCH.exec(url);
  var path = match[1] || '';
  var queryString = match[3] || '';
  var hash = match[5] ? '#' + match[5] : '';

  var protocol = '';
  if (url.indexOf('://') > -1) {
    protocol = url.split('://')[0] + ':';
  }

  var params = {};
  var queries = queryString.split('&');
  for (var i = 0, l = queries.length; i < l; i++) {
    var query = queries[i];
    if (query === '' || typeof query === 'undefined' || query === null) {
      continue;
    }
    var keyvalue = queries[i].split('=');
    var key = keyvalue.shift();
    params[key] = keyvalue.join('=');
  }
  return {
    protocol: protocol,
    path: path,
    queryString: queryString,
    queryStringParsed: params,
    hash: hash
  };
}

var dtVersion = '00';
var dtUnSampledFlags = '00';
// 00000001 ->  '01' -> recorded
var dtSampledFlags = '01';
function getDtHeaderValue(span) {
  if (span && span.traceId && span.id) {
    var flags = span.sampled ? dtSampledFlags : dtUnSampledFlags;
    return dtVersion + '-' + span.traceId + '-' + span.id + '-' + flags;
  }
}

function isDtHeaderValid(header) {
  return (/^[\da-f]{2}-[\da-f]{32}-[\da-f]{16}-[\da-f]{2}$/.test(header) && header.slice(3, 35) !== '00000000000000000000000000000000' && header.slice(36, 52) !== '0000000000000000'
  );
}

var URL = __webpack_require__(15);

function isSameOrigin(source, target) {
  var isSame = false;
  if (typeof target === 'string') {
    var src = new URL(source);
    var tar = new URL(target);
    isSame = src.origin === tar.origin;
  } else if (Array.isArray(target)) {
    target.forEach(function (t) {
      if (!isSame) {
        isSame = isSameOrigin(source, t);
      }
    });
  }
  return isSame;
}

function generateRandomId(length) {
  var id = bytesToHex(rng());
  return id.substr(0, length);
}

function isPlatformSupported() {
  return typeof window !== 'undefined' && typeof Array.prototype.forEach === 'function' && typeof JSON.stringify === 'function' && typeof Function.bind === 'function' && window.performance && typeof window.performance.now === 'function' && isCORSSupported();
}

function sanitizeString(value, limit, required, placeholder) {
  if (typeof value === 'number') {
    value = String(value);
  }
  if (required && !value) {
    value = placeholder || 'NA';
  }
  if (value) {
    return String(value).substr(0, limit);
  } else {
    return value;
  }
}

function sanitizeObjectStrings(obj, limit, required, placeholder) {
  if (!obj) return obj;
  if (typeof obj === 'string') {
    return sanitizeString(obj, limit, required, placeholder);
  }
  var keys = Object.keys(obj);
  keys.forEach(function (k) {
    var value = obj[k];
    if (typeof value === 'string') {
      value = sanitizeString(obj[k], limit, required, placeholder);
    } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
      value = sanitizeObjectStrings(value, limit, required, placeholder);
    }
    obj[k] = value;
  });
  return obj;
}

var navigationTimingKeys = ['fetchStart', 'domainLookupStart', 'domainLookupEnd', 'connectStart', 'connectEnd', 'secureConnectionStart', 'requestStart', 'responseStart', 'responseEnd', 'domLoading', 'domInteractive', 'domContentLoadedEventStart', 'domContentLoadedEventEnd', 'domComplete', 'loadEventStart', 'loadEventEnd'];

function getNavigationTimingMarks() {
  if (window.performance && window.performance.timing) {
    var timing = window.performance.timing;
    var marks = {};
    var fetchStart = timing.fetchStart;
    navigationTimingKeys.forEach(function (timingKey) {
      var m = timing[timingKey];
      if (m && m >= fetchStart) {
        marks[timingKey] = m - fetchStart;
      }
    });
    return marks;
  }
}

function getPageMetadata() {
  return {
    page: {
      referer: document.referrer,
      url: window.location.href
    }
  };
}

module.exports = {
  getPageMetadata: getPageMetadata,

  extend: function extend(dst) {
    return this.baseExtend(dst, slice.call(arguments, 1), false);
  },

  merge: function merge(dst) {
    return this.baseExtend(dst, slice.call(arguments, 1), true);
  },

  baseExtend: function baseExtend(dst, objs, deep) {
    for (var i = 0, ii = objs.length; i < ii; ++i) {
      var obj = objs[i];
      if (!isObject(obj) && !isFunction(obj)) continue;
      var keys = Object.keys(obj);
      for (var j = 0, jj = keys.length; j < jj; j++) {
        var key = keys[j];
        var src = obj[key];

        if (deep && isObject(src)) {
          if (!isObject(dst[key])) dst[key] = Array.isArray(src) ? [] : {};
          baseExtend(dst[key], [src], false); // only one level of deep merge
        } else {
          dst[key] = src;
        }
      }
    }

    return dst;
  },

  isObject: isObject,

  isFunction: isFunction,

  arrayReduce: function arrayReduce(arrayValue, callback, value) {
    // Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    if (arrayValue == null) {
      throw new TypeError('Array.prototype.reduce called on null or undefined');
    }
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }
    var t = Object(arrayValue);
    var len = t.length >>> 0;
    var k = 0;

    if (!value) {
      while (k < len && !(k in t)) {
        k++;
      }
      if (k >= len) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
      value = t[k++];
    }

    for (; k < len; k++) {
      if (k in t) {
        value = callback(value, t[k], k, t);
      }
    }
    return value;
  },

  arraySome: function arraySome(value, callback, thisArg) {
    // Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
    if (value == null) {
      throw new TypeError('Array.prototype.some called on null or undefined');
    }

    if (typeof callback !== 'function') {
      throw new TypeError();
    }

    var t = Object(value);
    var len = t.length >>> 0;

    if (!thisArg) {
      thisArg = void 0;
    }

    for (var i = 0; i < len; i++) {
      if (i in t && callback.call(thisArg, t[i], i, t)) {
        return true;
      }
    }
    return false;
  },

  arrayMap: function arrayMap(arrayValue, callback, thisArg) {
    // Source https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map
    var T, A, k;

    if (this == null) {
      throw new TypeError(' this is null or not defined');
    }
    var O = Object(arrayValue);
    var len = O.length >>> 0;

    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }
    if (arguments.length > 1) {
      T = thisArg;
    }
    A = new Array(len);
    k = 0;
    while (k < len) {
      var kValue, mappedValue;
      if (k in O) {
        kValue = O[k];
        mappedValue = callback.call(T, kValue, k, O);
        A[k] = mappedValue;
      }
      k++;
    }
    return A;
  },

  arrayIndexOf: function arrayIndexOf(arrayVal, searchElement, fromIndex) {
    // Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    var k;
    if (arrayVal == null) {
      throw new TypeError('"arrayVal" is null or not defined');
    }

    var o = Object(arrayVal);
    var len = o.length >>> 0;

    if (len === 0) {
      return -1;
    }

    var n = +fromIndex || 0;

    if (Math.abs(n) === Infinity) {
      n = 0;
    }

    if (n >= len) {
      return -1;
    }

    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    while (k < len) {
      if (k in o && o[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  },

  functionBind: function functionBind(func, oThis) {
    // Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
    var aArgs = Array.prototype.slice.call(arguments, 2);
    var FNOP = function FNOP() {};
    var fBound = function fBound() {
      return func.apply(oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
    };

    FNOP.prototype = func.prototype;
    fBound.prototype = new FNOP();
    return fBound;
  },

  getRandomInt: function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  isUndefined: function isUndefined(obj) {
    return typeof obj === 'undefined';
  },

  isCORSSupported: isCORSSupported,
  getElasticScript: function getElasticScript() {
    if (typeof document !== 'undefined') {
      var scripts = document.getElementsByTagName('script');
      for (var i = 0, l = scripts.length; i < l; i++) {
        var sc = scripts[i];
        if (sc.src.indexOf('elastic') > 0) {
          return sc;
        }
      }
    }
  },

  getCurrentScript: function getCurrentScript() {
    if (typeof document !== 'undefined') {
      // Source http://www.2ality.com/2014/05/current-script.html
      var currentScript = document.currentScript;
      if (!currentScript) {
        return this.getElasticScript();
      }
      return currentScript;
    }
  },

  parseUrl: parseUrl,

  isPlatformSupported: isPlatformSupported,

  sanitizeString: sanitizeString,
  sanitizeObjectStrings: sanitizeObjectStrings,
  getNavigationTimingMarks: getNavigationTimingMarks,
  bytesToHex: bytesToHex,
  rng: rng,
  generateRandomId: generateRandomId,
  isSameOrigin: isSameOrigin,
  getDtHeaderValue: getDtHeaderValue,
  isDtHeaderValid: isDtHeaderValid
};

function isObject(value) {
  // http://jsperf.com/isobject4
  return value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
}

function isFunction(value) {
  return typeof value === 'function';
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Subscription() {
  this.subscriptions = [];
}

Subscription.prototype.subscribe = function (fn) {
  var self = this;
  this.subscriptions.push(fn);

  return function () {
    var index = self.subscriptions.indexOf(fn);
    if (index > -1) {
      self.subscriptions.splice(index, 1);
    }
  };
};

Subscription.prototype.applyAll = function (applyTo, applyWith) {
  this.subscriptions.forEach(function (fn) {
    try {
      fn.apply(applyTo, applyWith);
    } catch (error) {
      console.log(error, error.stack);
    }
  }, this);
};

module.exports = Subscription;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// export public core APIs.

var ErrorLogging = __webpack_require__(9);
var PerformanceMonitoring = __webpack_require__(18);

var ServiceFactory = __webpack_require__(23);
var utils = __webpack_require__(0);
var patching = __webpack_require__(3);
module.exports = {
  createServiceFactory: function createServiceFactory() {
    var serviceFactory = new ServiceFactory();
    serviceFactory.registerCoreServices();
    ErrorLogging.registerServices(serviceFactory);
    PerformanceMonitoring.registerServices(serviceFactory);
    return serviceFactory;
  },
  ServiceFactory: ServiceFactory,
  patching: patching,
  utils: utils
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var patchXMLHttpRequest = __webpack_require__(4).patchXMLHttpRequest;
var Subscription = __webpack_require__(1);
var subscription = new Subscription();
var alreadyPatched = false;
function patchAll() {
  if (!alreadyPatched) {
    alreadyPatched = true;
    patchXMLHttpRequest(function (event, task) {
      subscription.applyAll(this, [event, task]);
    });
  }
  return subscription;
}

module.exports = {
  patchAll: patchAll,
  subscription: subscription
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var patchUtils = __webpack_require__(5);

var apmSymbol = patchUtils.apmSymbol;
var patchMethod = patchUtils.patchMethod;

var XHR_TASK = apmSymbol('xhrTask');
var XHR_LISTENER = apmSymbol('xhrListener');
var XHR_SCHEDULED = apmSymbol('xhrScheduled');

var XHR_SYNC = apmSymbol('xhrSync');
var XHR_URL = apmSymbol('xhrURL');
var XHR_METHOD = apmSymbol('xhrMethod');

var ADD_EVENT_LISTENER_STR = 'addEventListener';
var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
var alreadyPatched = false;

var XHR_IGNORE = apmSymbol('xhrIgnore');

function patchXMLHttpRequest(callback) {
  if (alreadyPatched) {
    return;
  }

  alreadyPatched = true;

  var XMLHttpRequestPrototype = XMLHttpRequest.prototype;

  var oriAddListener = XMLHttpRequestPrototype[ADD_EVENT_LISTENER_STR];
  var oriRemoveListener = XMLHttpRequestPrototype[REMOVE_EVENT_LISTENER_STR];
  if (!oriAddListener) {
    var XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget) {
      var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
      oriAddListener = XMLHttpRequestEventTargetPrototype[ADD_EVENT_LISTENER_STR];
      oriRemoveListener = XMLHttpRequestEventTargetPrototype[REMOVE_EVENT_LISTENER_STR];
    }
  }

  var READY_STATE_CHANGE = 'readystatechange';
  var SCHEDULE = 'schedule';
  var INVOKE = 'invoke';
  var CLEAR = 'clear';

  function invokeTask(task) {
    task.state = INVOKE;
    if (!task.ignore) {
      callback(INVOKE, task);
    }
  }

  function scheduleTask(task) {
    XMLHttpRequest[XHR_SCHEDULED] = false;
    task.state = SCHEDULE;
    if (!task.ignore) {
      callback(SCHEDULE, task);
    }
    var data = task.data;
    var target = data.target;
    // remove existing event listener
    var listener = target[XHR_LISTENER];
    if (!oriAddListener) {
      oriAddListener = target[ADD_EVENT_LISTENER_STR];
      oriRemoveListener = target[REMOVE_EVENT_LISTENER_STR];
    }

    if (listener) {
      oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
    }
    var newListener = target[XHR_LISTENER] = function () {
      if (target.readyState === target.DONE) {
        // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
        // readyState=4 multiple times, so we need to check task state here
        if (!data.aborted && XMLHttpRequest[XHR_SCHEDULED] && task.state === SCHEDULE) {
          invokeTask(task);
        }
      }
    };

    oriAddListener.call(target, READY_STATE_CHANGE, newListener);

    var storedTask = target[XHR_TASK];
    if (!storedTask) {
      target[XHR_TASK] = task;
    }
    var result = sendNative.apply(target, data.args);
    XMLHttpRequest[XHR_SCHEDULED] = true;
    return result;
  }

  function clearTask(task) {
    task.state = CLEAR;
    callback(CLEAR, task);
    var data = task.data;
    // Note - ideally, we would call data.target.removeEventListener here, but it's too late
    // to prevent it from firing. So instead, we store info for the event listener.
    data.aborted = true;
  }

  var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () {
    return function (self, args) {
      self[XHR_METHOD] = args[0];
      self[XHR_SYNC] = args[2] == false;
      self[XHR_URL] = args[1];
      return openNative.apply(self, args);
    };
  });

  var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
  var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () {
    return function (self, args) {
      var task = {
        source: XMLHTTPREQUEST_SOURCE,
        state: '',
        type: 'macroTask',
        ignore: self[XHR_IGNORE],
        data: {
          target: self,
          method: self[XHR_METHOD],
          sync: self[XHR_SYNC],
          url: self[XHR_URL],
          args: args,
          aborted: false
        }
      };
      var result = scheduleTask(task);

      if (self[XHR_SYNC]) {
        invokeTask(task);
      }
      return result;
    };
  });

  var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () {
    return function (self, args) {
      var task = self[XHR_TASK];
      if (task && typeof task.type === 'string') {
        // If the XHR has already been aborted, do nothing.
        if (task.data && task.data.aborted) {
          return;
        }
        clearTask(task);
      }
      return abortNative.apply(self, args);
    };
  });
}

module.exports = {
  patchXMLHttpRequest: patchXMLHttpRequest,
  XHR_URL: XHR_URL,
  XHR_METHOD: XHR_METHOD,
  XHR_IGNORE: XHR_IGNORE
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  apmSymbol: apmSymbol,
  patchMethod: patchMethod
};

function apmSymbol(name) {
  return '__apm_symbol__' + name;
}

function isPropertyWritable(propertyDesc) {
  if (!propertyDesc) {
    return true;
  }

  if (propertyDesc.writable === false) {
    return false;
  }

  return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}

function attachOriginToPatched(patched, original) {
  patched[apmSymbol('OriginalDelegate')] = original;
}

function patchMethod(target, name, patchFn) {
  var proto = target;
  while (proto && !proto.hasOwnProperty(name)) {
    proto = Object.getPrototypeOf(proto);
  }
  if (!proto && target[name]) {
    // somehow we did not find it, but we can see it. This happens on IE for Window properties.
    proto = target;
  }

  var delegateName = apmSymbol(name);
  var delegate;
  if (proto && !(delegate = proto[delegateName])) {
    delegate = proto[delegateName] = proto[name];
    // check whether proto[name] is writable
    // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
    var desc = proto && Object.getOwnPropertyDescriptor(proto, name);
    if (isPropertyWritable(desc)) {
      var patchDelegate = patchFn(delegate, delegateName, name);
      proto[name] = function () {
        return patchDelegate(this, arguments);
      };
      attachOriginToPatched(proto[name], delegate);
    }
  }
  return delegate;
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var utils = __webpack_require__(0);

var Span = function () {
  function Span(name, type, options) {
    _classCallCheck(this, Span);

    this.id = utils.generateRandomId(16);
    var opts = options || {};
    this.traceId = opts.traceId;
    this.sampled = opts.sampled;
    if (typeof opts.onSpanEnd === 'function') {
      this.onSpanEnd = opts.onSpanEnd;
    } else {
      this.onSpanEnd = function () {};
    }
    this.name = name;
    this.type = type;
    this.ended = false;
    this._end = undefined;
    this.context = undefined;
    // Start timers
    this._start = window.performance.now();
  }

  _createClass(Span, [{
    key: 'end',
    value: function end() {
      if (this.ended) {
        return;
      }

      this._end = window.performance.now();

      this.ended = true;
      this.onSpanEnd(this);
    }
  }, {
    key: 'duration',
    value: function duration() {
      if (utils.isUndefined(this._end) || utils.isUndefined(this._start)) {
        return null;
      }

      var diff = this._end - this._start;

      return parseFloat(diff);
    }
  }, {
    key: 'setContext',
    value: function setContext(context) {
      if (!context) return;
      this.context = utils.merge(this.context || {}, context);
    }
  }]);

  return Span;
}();

module.exports = Span;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bootstrap = __webpack_require__(8);
var enabled = bootstrap();

var apmCore = __webpack_require__(2);
var ApmBase = __webpack_require__(32);

var serviceFactory = apmCore.createServiceFactory();

var apmBase = new ApmBase(serviceFactory, !enabled);

if (typeof window !== 'undefined') {
  window.elasticApm = apmBase;
}

var _exports = {
  __esModule: true,
  default: apmBase.init.bind(apmBase),
  init: apmBase.init.bind(apmBase),
  ApmBase: ApmBase,
  apmBase: apmBase,
  apm: apmBase
};

module.exports = _exports;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alreadyBootstrap = false;
var enabled = false;
module.exports = function bootstrap() {
  if (alreadyBootstrap) {
    return enabled;
  }
  alreadyBootstrap = true;

  var apmCore = __webpack_require__(2);
  if (apmCore.utils.isPlatformSupported()) {
    __webpack_require__(30);
    apmCore.patching.patchAll();
    enabled = true;
  } else {
    console.log('APM: Platform is not supported!');
  }

  return enabled;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ErrorLogging = __webpack_require__(10);

module.exports = {
  ErrorLogging: ErrorLogging,
  registerServices: function registerServices(serviceFactory) {
    serviceFactory.registerServiceCreator('ErrorLogging', function () {
      var apmService = serviceFactory.getService('ApmServer');
      var configService = serviceFactory.getService('ConfigService');
      var loggingService = serviceFactory.getService('LoggingService');
      return new ErrorLogging(apmService, configService, loggingService);
    });
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StackTraceService = __webpack_require__(11);

var utils = __webpack_require__(0);

var ErrorLogging = function () {
  function ErrorLogging(apmServer, configService, loggingService) {
    _classCallCheck(this, ErrorLogging);

    this._apmServer = apmServer;
    this._configService = configService;
    this._loggingService = loggingService;
    this._stackTraceService = new StackTraceService(configService, loggingService);
  }

  // errorEvent = {message, filename, lineno, colno, error}


  _createClass(ErrorLogging, [{
    key: 'createErrorDataModel',
    value: function createErrorDataModel(errorEvent) {
      var filePath = this._stackTraceService.cleanFilePath(errorEvent.filename);
      var fileName = this._stackTraceService.filePathToFileName(filePath);
      var culprit;
      var frames = this._stackTraceService.createStackTraces(errorEvent);
      frames = this._stackTraceService.filterInvalidFrames(frames);

      if (!fileName && frames.length) {
        var lastFrame = frames[frames.length - 1];
        if (lastFrame.filename) {
          fileName = lastFrame.filename;
        } else {
          // If filename empty, assume inline script
          fileName = '(inline script)';
        }
      }

      if (this._stackTraceService.isFileInline(filePath)) {
        culprit = '(inline script)';
      } else {
        culprit = fileName;
      }

      var message = errorEvent.message || errorEvent.error && errorEvent.error.message;
      var errorType = errorEvent.error ? errorEvent.error.name : undefined;
      if (!errorType) {
        // Try to extract type from message formatted like 'ReferenceError: Can't find variable: initHighlighting'
        if (message && message.indexOf(':') > -1) {
          errorType = message.split(':')[0];
        } else {
          errorType = '';
        }
      }

      var configContext = this._configService.get('context');
      var stringLimit = this._configService.get('serverStringLimit');
      var errorContext;
      if (errorEvent.error && _typeof(errorEvent.error) === 'object') {
        errorContext = this._getErrorProperties(errorEvent.error);
      }
      var browserMetadata = utils.getPageMetadata();
      var context = utils.merge({}, browserMetadata, configContext, errorContext);

      var errorObject = {
        id: utils.generateRandomId(),
        culprit: utils.sanitizeString(culprit),
        exception: {
          message: utils.sanitizeString(message, undefined, true),
          stacktrace: frames,
          type: utils.sanitizeString(errorType, stringLimit, false)
        },
        context: context
      };
      return errorObject;
    }
  }, {
    key: 'logErrorEvent',
    value: function logErrorEvent(errorEvent, sendImmediately) {
      if (this._configService.isActive()) {
        if (typeof errorEvent === 'undefined') {
          return;
        }
        var errorObject = this.createErrorDataModel(errorEvent);
        if (typeof errorObject.exception.message === 'undefined') {
          return;
        }
        if (sendImmediately) {
          return this._apmServer.sendErrors([errorObject]);
        } else {
          return this._apmServer.addError(errorObject);
        }
      }
    }
  }, {
    key: 'registerGlobalEventListener',
    value: function registerGlobalEventListener() {
      var errorLogging = this;
      window.onerror = function (messageOrEvent, source, lineno, colno, error) {
        var errorEvent;
        if (typeof messageOrEvent !== 'undefined' && typeof messageOrEvent !== 'string') {
          errorEvent = messageOrEvent;
        } else {
          errorEvent = {
            message: messageOrEvent,
            filename: source,
            lineno: lineno,
            colno: colno,
            error: error
          };
        }
        errorLogging.logErrorEvent(errorEvent);
      };
    }
  }, {
    key: 'logError',
    value: function logError(messageOrError) {
      var errorEvent = {};
      if (typeof messageOrError === 'string') {
        errorEvent.message = messageOrError;
      } else {
        errorEvent.error = messageOrError;
      }
      return this.logErrorEvent(errorEvent);
    }
  }, {
    key: '_getErrorProperties',
    value: function _getErrorProperties(error) {
      var properties = {};
      Object.keys(error).forEach(function (key) {
        if (key === 'stack') return;
        var val = error[key];
        if (val === null) return; // null is typeof object and well break the switch below
        switch (typeof val === 'undefined' ? 'undefined' : _typeof(val)) {
          case 'function':
            return;
          case 'object':
            // ignore all objects except Dates
            if (typeof val.toISOString !== 'function') return;
            val = val.toISOString();
        }
        properties[key] = val;
      });
      return properties;
    }
  }]);

  return ErrorLogging;
}();

module.exports = ErrorLogging;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var errorStackParser = __webpack_require__(12);

var StackTraceService = function () {
  function StackTraceService(configService, loggingService) {
    _classCallCheck(this, StackTraceService);

    this._configService = configService;
    this._loggingService = loggingService;
  }

  _createClass(StackTraceService, [{
    key: 'createStackTraces',
    value: function createStackTraces(errorEvent) {
      var stackTraceService = this;
      var error = errorEvent.error;

      var stackTraces;
      if (error) {
        try {
          stackTraces = errorStackParser.parse(error);
        } catch (e) {
          this._loggingService.debug('Parsing error stack failed!', e);
        }
      }

      if (!stackTraces || stackTraces.length === 0) {
        stackTraces = [{
          fileName: errorEvent.filename,
          lineNumber: errorEvent.lineno,
          columnNumber: errorEvent.colno
        }];
      }

      stackTraces = ErrorStackNormalizer(stackTraces);

      stackTraces = stackTraces.map(function (stack) {
        if (!stack.fileName && !stack.lineNumber) {
          return {};
        }
        if (!stack.columnNumber && !stack.lineNumber) {
          return {};
        }

        var filePath = stackTraceService.cleanFilePath(stack.fileName);
        var fileName = stackTraceService.filePathToFileName(filePath);

        if (stackTraceService.isFileInline(filePath)) {
          fileName = '(inline script)';
        }

        return {
          abs_path: stack.fileName,
          filename: fileName,
          function: stack.functionName || '<anonymous>',
          lineno: stack.lineNumber,
          colno: stack.columnNumber
        };
      });

      return stackTraces;
    }
  }, {
    key: 'filterInvalidFrames',
    value: function filterInvalidFrames(frames) {
      var result = [];
      if (Array.isArray(frames)) {
        result = frames.filter(function (f) {
          return typeof f['filename'] !== 'undefined' && typeof f['lineno'] !== 'undefined';
        });
      }
      return result;
    }
  }, {
    key: 'filePathToFileName',
    value: function filePathToFileName(fileUrl) {
      var origin = window.location.origin || window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');

      if (fileUrl.indexOf(origin) > -1) {
        fileUrl = fileUrl.replace(origin + '/', '');
      }

      return fileUrl;
    }
  }, {
    key: 'cleanFilePath',
    value: function cleanFilePath(filePath) {
      if (!filePath) {
        filePath = '';
      }

      if (filePath === '<anonymous>') {
        filePath = '';
      }

      return filePath;
    }
  }, {
    key: 'isFileInline',
    value: function isFileInline(fileUrl) {
      if (fileUrl) {
        return window.location.href.indexOf(fileUrl) === 0;
      } else {
        return false;
      }
    }
  }]);

  return StackTraceService;
}();

function ErrorStackNormalizer(stackFrames) {
  return stackFrames.map(function (frame) {
    if (frame.functionName) {
      frame.functionName = normalizeFunctionName(frame.functionName);
    }
    return frame;
  });
}

function normalizeFunctionName(fnName) {
  // SpinderMonkey name convetion (https://developer.mozilla.org/en-US/docs/Tools/Debugger-API/Debugger.Object#Accessor_Properties_of_the_Debugger.Object_prototype)

  // We use a/b to refer to the b defined within a
  var parts = fnName.split('/');
  if (parts.length > 1) {
    fnName = ['Object', parts[parts.length - 1]].join('.');
  } else {
    fnName = parts[0];
  }

  // a< to refer to a function that occurs somewhere within an expression that is assigned to a.
  fnName = fnName.replace(/.<$/gi, '.<anonymous>');

  // Normalize IE's 'Anonymous function'
  fnName = fnName.replace(/^Anonymous function$/, '<anonymous>');

  // Always use the last part
  parts = fnName.split('.');
  if (parts.length > 1) {
    fnName = parts[parts.length - 1];
  } else {
    fnName = parts[0];
  }

  return fnName;
}

module.exports = StackTraceService;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (root, factory) {
    'use strict';
    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

    /* istanbul ignore next */

    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(13)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
        module.exports = factory(require('stackframe'));
    } else {
        root.ErrorStackParser = factory(root.StackFrame);
    }
})(undefined, function ErrorStackParser(StackFrame) {
    'use strict';

    var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+\:\d+/;
    var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+\:\d+|\(native\))/m;
    var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code\])?$/;

    function _map(array, fn, thisArg) {
        if (typeof Array.prototype.map === 'function') {
            return array.map(fn, thisArg);
        } else {
            var output = new Array(array.length);
            for (var i = 0; i < array.length; i++) {
                output[i] = fn.call(thisArg, array[i]);
            }
            return output;
        }
    }

    function _filter(array, fn, thisArg) {
        if (typeof Array.prototype.filter === 'function') {
            return array.filter(fn, thisArg);
        } else {
            var output = [];
            for (var i = 0; i < array.length; i++) {
                if (fn.call(thisArg, array[i])) {
                    output.push(array[i]);
                }
            }
            return output;
        }
    }

    function _indexOf(array, target) {
        if (typeof Array.prototype.indexOf === 'function') {
            return array.indexOf(target);
        } else {
            for (var i = 0; i < array.length; i++) {
                if (array[i] === target) {
                    return i;
                }
            }
            return -1;
        }
    }

    return {
        /**
         * Given an Error object, extract the most information from it.
         *
         * @param {Error} error object
         * @return {Array} of StackFrames
         */
        parse: function ErrorStackParser$$parse(error) {
            if (typeof error.stacktrace !== 'undefined' || typeof error['opera#sourceloc'] !== 'undefined') {
                return this.parseOpera(error);
            } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
                return this.parseV8OrIE(error);
            } else if (error.stack) {
                return this.parseFFOrSafari(error);
            } else {
                throw new Error('Cannot parse given Error object');
            }
        },

        // Separate line and column numbers from a string of the form: (URI:Line:Column)
        extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
            // Fail-fast but return locations like "(native)"
            if (urlLike.indexOf(':') === -1) {
                return [urlLike];
            }

            var regExp = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/;
            var parts = regExp.exec(urlLike.replace(/[\(\)]/g, ''));
            return [parts[1], parts[2] || undefined, parts[3] || undefined];
        },

        parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
            var filtered = _filter(error.stack.split('\n'), function (line) {
                return !!line.match(CHROME_IE_STACK_REGEXP);
            }, this);

            return _map(filtered, function (line) {
                if (line.indexOf('(eval ') > -1) {
                    // Throw away eval information until we implement stacktrace.js/stackframe#8
                    line = line.replace(/eval code/g, 'eval').replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, '');
                }
                var tokens = line.replace(/^\s+/, '').replace(/\(eval code/g, '(').split(/\s+/).slice(1);
                var locationParts = this.extractLocation(tokens.pop());
                var functionName = tokens.join(' ') || undefined;
                var fileName = _indexOf(['eval', '<anonymous>'], locationParts[0]) > -1 ? undefined : locationParts[0];

                return new StackFrame(functionName, undefined, fileName, locationParts[1], locationParts[2], line);
            }, this);
        },

        parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
            var filtered = _filter(error.stack.split('\n'), function (line) {
                return !line.match(SAFARI_NATIVE_CODE_REGEXP);
            }, this);

            return _map(filtered, function (line) {
                // Throw away eval information until we implement stacktrace.js/stackframe#8
                if (line.indexOf(' > eval') > -1) {
                    line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ':$1');
                }

                if (line.indexOf('@') === -1 && line.indexOf(':') === -1) {
                    // Safari eval frames only have function names and nothing else
                    return new StackFrame(line);
                } else {
                    var tokens = line.split('@');
                    var locationParts = this.extractLocation(tokens.pop());
                    var functionName = tokens.join('@') || undefined;
                    return new StackFrame(functionName, undefined, locationParts[0], locationParts[1], locationParts[2], line);
                }
            }, this);
        },

        parseOpera: function ErrorStackParser$$parseOpera(e) {
            if (!e.stacktrace || e.message.indexOf('\n') > -1 && e.message.split('\n').length > e.stacktrace.split('\n').length) {
                return this.parseOpera9(e);
            } else if (!e.stack) {
                return this.parseOpera10(e);
            } else {
                return this.parseOpera11(e);
            }
        },

        parseOpera9: function ErrorStackParser$$parseOpera9(e) {
            var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
            var lines = e.message.split('\n');
            var result = [];

            for (var i = 2, len = lines.length; i < len; i += 2) {
                var match = lineRE.exec(lines[i]);
                if (match) {
                    result.push(new StackFrame(undefined, undefined, match[2], match[1], undefined, lines[i]));
                }
            }

            return result;
        },

        parseOpera10: function ErrorStackParser$$parseOpera10(e) {
            var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
            var lines = e.stacktrace.split('\n');
            var result = [];

            for (var i = 0, len = lines.length; i < len; i += 2) {
                var match = lineRE.exec(lines[i]);
                if (match) {
                    result.push(new StackFrame(match[3] || undefined, undefined, match[2], match[1], undefined, lines[i]));
                }
            }

            return result;
        },

        // Opera 10.65+ Error.stack very similar to FF/Safari
        parseOpera11: function ErrorStackParser$$parseOpera11(error) {
            var filtered = _filter(error.stack.split('\n'), function (line) {
                return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
            }, this);

            return _map(filtered, function (line) {
                var tokens = line.split('@');
                var locationParts = this.extractLocation(tokens.pop());
                var functionCall = tokens.shift() || '';
                var functionName = functionCall.replace(/<anonymous function(: (\w+))?>/, '$2').replace(/\([^\)]*\)/g, '') || undefined;
                var argsRaw;
                if (functionCall.match(/\(([^\)]*)\)/)) {
                    argsRaw = functionCall.replace(/^[^\(]+\(([^\)]*)\)$/, '$1');
                }
                var args = argsRaw === undefined || argsRaw === '[arguments not available]' ? undefined : argsRaw.split(',');
                return new StackFrame(functionName, args, locationParts[0], locationParts[1], locationParts[2], line);
            }, this);
        }
    };
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (root, factory) {
    'use strict';
    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

    /* istanbul ignore next */

    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
        module.exports = factory();
    } else {
        root.StackFrame = factory();
    }
})(undefined, function () {
    'use strict';

    function _isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function StackFrame(functionName, args, fileName, lineNumber, columnNumber, source) {
        if (functionName !== undefined) {
            this.setFunctionName(functionName);
        }
        if (args !== undefined) {
            this.setArgs(args);
        }
        if (fileName !== undefined) {
            this.setFileName(fileName);
        }
        if (lineNumber !== undefined) {
            this.setLineNumber(lineNumber);
        }
        if (columnNumber !== undefined) {
            this.setColumnNumber(columnNumber);
        }
        if (source !== undefined) {
            this.setSource(source);
        }
    }

    StackFrame.prototype = {
        getFunctionName: function getFunctionName() {
            return this.functionName;
        },
        setFunctionName: function setFunctionName(v) {
            this.functionName = String(v);
        },

        getArgs: function getArgs() {
            return this.args;
        },
        setArgs: function setArgs(v) {
            if (Object.prototype.toString.call(v) !== '[object Array]') {
                throw new TypeError('Args must be an Array');
            }
            this.args = v;
        },

        // NOTE: Property name may be misleading as it includes the path,
        // but it somewhat mirrors V8's JavaScriptStackTraceApi
        // https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi and Gecko's
        // http://mxr.mozilla.org/mozilla-central/source/xpcom/base/nsIException.idl#14
        getFileName: function getFileName() {
            return this.fileName;
        },
        setFileName: function setFileName(v) {
            this.fileName = String(v);
        },

        getLineNumber: function getLineNumber() {
            return this.lineNumber;
        },
        setLineNumber: function setLineNumber(v) {
            if (!_isNumber(v)) {
                throw new TypeError('Line Number must be a Number');
            }
            this.lineNumber = Number(v);
        },

        getColumnNumber: function getColumnNumber() {
            return this.columnNumber;
        },
        setColumnNumber: function setColumnNumber(v) {
            if (!_isNumber(v)) {
                throw new TypeError('Column Number must be a Number');
            }
            this.columnNumber = Number(v);
        },

        getSource: function getSource() {
            return this.source;
        },
        setSource: function setSource(v) {
            this.source = String(v);
        },

        toString: function toString() {
            var functionName = this.getFunctionName() || '{anonymous}';
            var args = '(' + (this.getArgs() || []).join(',') + ')';
            var fileName = this.getFileName() ? '@' + this.getFileName() : '';
            var lineNumber = _isNumber(this.getLineNumber()) ? ':' + this.getLineNumber() : '';
            var columnNumber = _isNumber(this.getColumnNumber()) ? ':' + this.getColumnNumber() : '';
            return functionName + args + fileName + lineNumber + columnNumber;
        }
    };

    return StackFrame;
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
var getRandomValues = typeof crypto != 'undefined' && crypto.getRandomValues.bind(crypto) || typeof msCrypto != 'undefined' && msCrypto.getRandomValues.bind(msCrypto);
if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var required = __webpack_require__(16),
    qs = __webpack_require__(17),
    protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
    slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [['#', 'hash'], // Extract from the back.
['?', 'query'], // Extract from the back.
function sanitize(address) {
  // Sanitize what is left of the address
  return address.replace('\\', '/');
}, ['/', 'pathname'], // Extract from the back.
['@', 'auth', 1], // Extract from the front.
[NaN, 'host', undefined, 1, 1], // Set left over value.
[/:(\d+)$/, 'port', undefined, 1], // RegExp the back.
[NaN, 'hostname', undefined, 1, 1] // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */
function lolcation(loc) {
  var location = global && global.location || {};
  loc = loc || location;

  var finaldestination = {},
      type = typeof loc === 'undefined' ? 'undefined' : _typeof(loc),
      key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});
    for (key in ignore) {
      delete finaldestination[key];
    }
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @private
 */
function extractProtocol(address) {
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */
function resolve(relative, base) {
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/')),
      i = path.length,
      last = path[i - 1],
      unshift = false,
      up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} location Location defaults for relative paths.
 * @param {Boolean|Function} parser Parser for the query string.
 * @private
 */
function Url(address, location, parser) {
  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative,
      extracted,
      parse,
      instruction,
      index,
      key,
      instructions = rules.slice(),
      type = typeof location === 'undefined' ? 'undefined' : _typeof(location),
      url = this,
      i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if (index = parse.exec(address)) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (relative && instruction[3] ? location[key] || '' : '');

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (relative && location.slashes && url.pathname.charAt(0) !== '/' && (url.pathname !== '' || location.pathname !== '')) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname + ':' + value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':' + url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query,
      url = this,
      protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':' + url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === _typeof(url.query) ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?' + query : query;

  if (url.hash) result += url.hash;

  return result;
}

Url.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.qs = qs;

module.exports = Url;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */

module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
      return port !== 80;

    case 'https':
    case 'wss':
      return port !== 443;

    case 'ftp':
      return port !== 21;

    case 'gopher':
      return port !== 70;

    case 'file':
      return false;
  }

  return port !== 0;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty,
    undef;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String} The decoded string.
 * @api private
 */
function decode(input) {
  return decodeURIComponent(input.replace(/\+/g, ' '));
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g,
      result = {},
      part;

  while (part = parser.exec(query)) {
    var key = decode(part[1]),
        value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    if (key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = [],
      value,
      key;

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key];

      //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //
      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PerformanceMonitoring = __webpack_require__(19);
var TransactionService = __webpack_require__(20);

module.exports = {
  PerformanceMonitoring: PerformanceMonitoring,
  registerServices: function registerServices(serviceFactory) {
    serviceFactory.registerServiceCreator('TransactionService', function () {
      var configService = serviceFactory.getService('ConfigService');
      var loggingService = serviceFactory.getService('LoggingService');
      return new TransactionService(loggingService, configService);
    });

    serviceFactory.registerServiceCreator('PerformanceMonitoring', function () {
      var configService = serviceFactory.getService('ConfigService');
      var loggingService = serviceFactory.getService('LoggingService');
      var apmService = serviceFactory.getService('ApmServer');
      var zoneService;
      var transactionService = serviceFactory.getService('TransactionService');
      return new PerformanceMonitoring(apmService, configService, loggingService, zoneService, transactionService);
    });
  }
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var utils = __webpack_require__(0);
var patchingSub = __webpack_require__(3).subscription;

var PerformanceMonitoring = function () {
  function PerformanceMonitoring(apmServer, configService, loggingService, zoneService, transactionService) {
    _classCallCheck(this, PerformanceMonitoring);

    this._apmServer = apmServer;
    this._configService = configService;
    this._logginService = loggingService;
    this._zoneService = zoneService;
    this._transactionService = transactionService;
  }

  _createClass(PerformanceMonitoring, [{
    key: 'init',
    value: function init() {
      if (this._zoneService) {
        this._zoneService.initialize(window.Zone.current);
      }
      var performanceMonitoring = this;
      this._transactionService.subscribe(function (tr) {
        var payload = performanceMonitoring.createTransactionPayload(tr);
        if (payload) {
          performanceMonitoring._apmServer.addTransaction(payload);
        }
      });

      var patchSubFn = this.getXhrPatchSubFn(this._configService, this._transactionService);
      this.cancelPatchSub = patchingSub.subscribe(patchSubFn);
    }
  }, {
    key: 'getXhrPatchSubFn',
    value: function getXhrPatchSubFn() {
      var configService = this._configService;
      var transactionService = this._transactionService;
      return function (event, task) {
        if (event === 'schedule' && task.source === 'XMLHttpRequest.send' && task.data) {
          var spanName = task.data.method + ' ' + task.data.url;
          var span = transactionService.startSpan(spanName, 'ext.HttpRequest');
          if (span) {
            var isDtEnabled = configService.get('distributedTracing');
            var origins = configService.get('distributedTracingOrigins');
            var isSameOrigin = utils.isSameOrigin(task.data.url, window.location.href) || utils.isSameOrigin(task.data.url, origins);
            var target = task.data.target;
            if (isDtEnabled && isSameOrigin && target) {
              var headerName = configService.get('distributedTracingHeaderName');
              var headerValueCallback = configService.get('distributedTracingHeaderValueCallback');
              if (typeof headerValueCallback !== 'function') {
                headerValueCallback = utils.getDtHeaderValue;
              }

              var headerValue = headerValueCallback(span);
              var isHeaderValid = utils.isDtHeaderValid(headerValue);
              if (headerName && headerValue && isHeaderValid) {
                target.setRequestHeader(headerName, headerValue);
              }
            }
            span.setContext({
              http: {
                method: task.data.method,
                url: task.data.url
              }
            });
            span.sync = task.data.sync;
            task.data.span = span;
          }
        } else if (event === 'invoke' && task.data && task.data.span) {
          task.data.span.setContext({ http: { status_code: task.data.target.status } });
          task.data.span.end();
        }
      };
    }
  }, {
    key: 'setTransactionContextInfo',
    value: function setTransactionContextInfo(transaction) {
      var context = this._configService.get('context');
      if (context) {
        transaction.addContextInfo(context);
      }
    }
  }, {
    key: 'filterTransaction',
    value: function filterTransaction(tr) {
      var performanceMonitoring = this;
      var transactionDurationThreshold = this._configService.get('transactionDurationThreshold');
      var duration = tr.duration();
      if (!duration || duration > transactionDurationThreshold || !tr.spans.length || !tr.sampled) {
        return false;
      }

      var browserResponsivenessInterval = this._configService.get('browserResponsivenessInterval');
      var checkBrowserResponsiveness = this._configService.get('checkBrowserResponsiveness');

      if (checkBrowserResponsiveness && !tr.isHardNavigation) {
        var buffer = performanceMonitoring._configService.get('browserResponsivenessBuffer');

        var wasBrowserResponsive = performanceMonitoring.checkBrowserResponsiveness(tr, browserResponsivenessInterval, buffer);
        if (!wasBrowserResponsive) {
          performanceMonitoring._logginService.debug('Transaction was discarded! browser was not responsive enough during the transaction.', ' duration:', duration, ' browserResponsivenessCounter:', tr.browserResponsivenessCounter, 'interval:', browserResponsivenessInterval);
          return false;
        }
      }
      return true;
    }
  }, {
    key: 'prepareTransaction',
    value: function prepareTransaction(transaction) {
      var performanceMonitoring = this;
      transaction.spans.sort(function (spanA, spanB) {
        return spanA._start - spanB._start;
      });

      if (performanceMonitoring._configService.get('groupSimilarSpans')) {
        var similarSpanThreshold = performanceMonitoring._configService.get('similarSpanThreshold');
        transaction.spans = performanceMonitoring.groupSmallContinuouslySimilarSpans(transaction, similarSpanThreshold);
      }

      transaction.spans = transaction.spans.filter(function (span) {
        return span.duration() > 0 && span._start >= transaction._rootSpan._start && span._end > transaction._rootSpan._start && span._start < transaction._rootSpan._end && span._end <= transaction._rootSpan._end;
      });

      performanceMonitoring.setTransactionContextInfo(transaction);
    }
  }, {
    key: 'createTransactionDataModel',
    value: function createTransactionDataModel(transaction) {
      var configContext = this._configService.get('context');
      var stringLimit = this._configService.get('serverStringLimit');
      var transactionStart = transaction._rootSpan._start;

      var spans = transaction.spans.map(function (span) {
        var context;
        if (span.context) {
          context = utils.sanitizeObjectStrings(span.context, stringLimit);
        }
        return {
          id: span.id,
          transaction_id: transaction.id,
          parent_id: span.parentId || transaction.id,
          trace_id: transaction.traceId,
          name: utils.sanitizeString(span.name, stringLimit, true),
          type: utils.sanitizeString(span.type, stringLimit, true),
          start: span._start - transactionStart,
          duration: span.duration(),
          context: context
        };
      });

      var context = utils.merge({}, configContext, transaction.contextInfo);
      return {
        id: transaction.id,
        trace_id: transaction.traceId,
        timestamp: transaction.timestamp,
        name: utils.sanitizeString(transaction.name, stringLimit, false),
        type: utils.sanitizeString(transaction.type, stringLimit, true),
        duration: transaction.duration(),
        spans: spans,
        context: context,
        marks: transaction.marks,
        span_count: {
          started: spans.length
        },
        sampled: transaction.sampled
      };
    }
  }, {
    key: 'createTransactionPayload',
    value: function createTransactionPayload(transaction) {
      this.prepareTransaction(transaction);
      var filtered = this.filterTransaction(transaction);
      if (filtered) {
        return this.createTransactionDataModel(transaction);
      }
    }
  }, {
    key: 'sendTransactions',
    value: function sendTransactions(transactions) {
      var payload = transactions.map(this.createTransactionPayload.bind(this)).filter(function (tr) {
        return tr;
      });
      this._logginService.debug('Sending Transactions to apm server.', transactions.length);

      // todo: check if transactions are already being sent
      var promise = this._apmServer.sendTransactions(payload);
      return promise;
    }
  }, {
    key: 'convertTransactionsToServerModel',
    value: function convertTransactionsToServerModel(transactions) {
      return transactions.map(this.createTransactionDataModel.bind(this));
    }
  }, {
    key: 'groupSmallContinuouslySimilarSpans',
    value: function groupSmallContinuouslySimilarSpans(transaction, threshold) {
      var transDuration = transaction.duration();
      var spans = [];
      var lastCount = 1;
      transaction.spans.forEach(function (span, index) {
        if (spans.length === 0) {
          spans.push(span);
        } else {
          var lastSpan = spans[spans.length - 1];

          var isContinuouslySimilar = lastSpan.type === span.type && lastSpan.name === span.name && span.duration() / transDuration < threshold && (span._start - lastSpan._end) / transDuration < threshold;

          var isLastSpan = transaction.spans.length === index + 1;

          if (isContinuouslySimilar) {
            lastCount++;
            lastSpan._end = span._end;
          }

          if (lastCount > 1 && (!isContinuouslySimilar || isLastSpan)) {
            lastSpan.name = lastCount + 'x ' + lastSpan.name;
            lastCount = 1;
          }

          if (!isContinuouslySimilar) {
            spans.push(span);
          }
        }
      });
      return spans;
    }
  }, {
    key: 'checkBrowserResponsiveness',
    value: function checkBrowserResponsiveness(transaction, interval, buffer) {
      var counter = transaction.browserResponsivenessCounter;
      if (typeof interval === 'undefined' || typeof counter === 'undefined') {
        return true;
      }

      var duration = transaction.duration();
      var expectedCount = Math.floor(duration / interval);
      var wasBrowserResponsive = counter + buffer >= expectedCount;

      return wasBrowserResponsive;
    }
  }]);

  return PerformanceMonitoring;
}();

module.exports = PerformanceMonitoring;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Transaction = __webpack_require__(21);
var utils = __webpack_require__(0);
var Subscription = __webpack_require__(1);

var captureHardNavigation = __webpack_require__(22).captureHardNavigation;

var TransactionService = function () {
  function TransactionService(logger, config) {
    _classCallCheck(this, TransactionService);

    this._config = config;
    if (typeof config === 'undefined') {
      logger.debug('TransactionService: config is not provided');
    }
    this._logger = logger;

    this.marks = {};

    this.currentTransaction = undefined;

    this._subscription = new Subscription();

    this._alreadyCapturedPageLoad = false;
  }

  _createClass(TransactionService, [{
    key: 'shouldCreateTransaction',
    value: function shouldCreateTransaction() {
      return this._config.isActive();
    }
  }, {
    key: 'getOrCreateCurrentTransaction',
    value: function getOrCreateCurrentTransaction() {
      if (!this.shouldCreateTransaction()) {
        return;
      }
      var tr = this.getCurrentTransaction();
      if (!utils.isUndefined(tr) && !tr.ended) {
        return tr;
      }
      return this.createZoneTransaction();
    }
  }, {
    key: 'getCurrentTransaction',
    value: function getCurrentTransaction() {
      return this.currentTransaction;
    }
  }, {
    key: 'setCurrentTransaction',
    value: function setCurrentTransaction(value) {
      this.currentTransaction = value;
    }
  }, {
    key: 'createTransaction',
    value: function createTransaction(name, type, options) {
      var perfOptions = options;
      if (utils.isUndefined(perfOptions)) {
        perfOptions = this._config.config;
      }
      if (!this.shouldCreateTransaction()) {
        return;
      }

      var tr = new Transaction(name, type, perfOptions, this._logger);
      this.setCurrentTransaction(tr);
      if (perfOptions.checkBrowserResponsiveness) {
        this.startCounter(tr);
      }
      return tr;
    }
  }, {
    key: 'createZoneTransaction',
    value: function createZoneTransaction() {
      return this.createTransaction('ZoneTransaction', 'transaction');
    }
  }, {
    key: 'startCounter',
    value: function startCounter(transaction) {
      transaction.browserResponsivenessCounter = 0;
      var interval = this._config.get('browserResponsivenessInterval');
      if (typeof interval === 'undefined') {
        this._logger.debug('browserResponsivenessInterval is undefined!');
        return;
      }
      this.runOuter(function () {
        var id = setInterval(function () {
          if (transaction.ended) {
            window.clearInterval(id);
          } else {
            transaction.browserResponsivenessCounter++;
          }
        }, interval);
      });
    }
  }, {
    key: 'sendPageLoadMetrics',
    value: function sendPageLoadMetrics(name) {
      var tr = this.startTransaction(name, 'page-load');
      tr.detectFinish();
      return tr;
    }
  }, {
    key: 'capturePageLoadMetrics',
    value: function capturePageLoadMetrics(tr) {
      var self = this;
      var capturePageLoad = self._config.get('capturePageLoad');
      if (capturePageLoad && !self._alreadyCapturedPageLoad && tr.isHardNavigation) {
        tr.addMarks(self.marks);
        captureHardNavigation(tr);
        self._alreadyCapturedPageLoad = true;
        return true;
      }
    }
  }, {
    key: 'startTransaction',
    value: function startTransaction(name, type) {
      var self = this;
      var perfOptions = self._config.config;

      if (!type) {
        type = 'custom';
      }

      if (!name) {
        name = 'Unknown';
      }

      // this will create a zone transaction if possible
      var tr = this.getOrCreateCurrentTransaction();

      if (tr) {
        if (tr.name === 'ZoneTransaction') {
          tr.redefine(name, type, perfOptions);
        } else {
          this.logInTransaction('ElasticEnding early to start a new transaction:', name, type);
          this._logger.debug('Ending old transaction', tr);
          tr.end();
          tr = this.createTransaction(name, type, perfOptions);
        }
      } else {
        return;
      }

      if (type === 'page-load') {
        tr.isHardNavigation = true;

        if (perfOptions.pageLoadTraceId) {
          tr.traceId = perfOptions.pageLoadTraceId;
        }
        if (typeof perfOptions.pageLoadSampled !== 'undefined') {
          tr.sampled = perfOptions.pageLoadSampled;
        }

        if (tr.name === 'Unknown' && self._config.config.pageLoadTransactionName) {
          tr.name = self._config.config.pageLoadTransactionName;
        }
      }

      this._logger.debug('TransactionService.startTransaction', tr);
      tr.doneCallback = function () {
        self.applyAsync(function () {
          self._logger.debug('TransactionService transaction finished', tr);
          if (!self.shouldIgnoreTransaction(tr.name)) {
            if (type === 'page-load') {
              if (tr.name === 'Unknown' && self._config.config.pageLoadTransactionName) {
                tr.name = self._config.config.pageLoadTransactionName;
              }
              var captured = self.capturePageLoadMetrics(tr);
              if (captured) {
                self.add(tr);
              }
            } else {
              self.add(tr);
            }
          }
        });
      };
      return tr;
    }
  }, {
    key: 'applyAsync',
    value: function applyAsync(fn, applyThis, applyArgs) {
      return this.runOuter(function () {
        return Promise.resolve().then(function () {
          return fn.apply(applyThis, applyArgs);
        }, function (reason) {
          console.log(reason);
        });
      });
    }
  }, {
    key: 'shouldIgnoreTransaction',
    value: function shouldIgnoreTransaction(transactionName) {
      var ignoreList = this._config.get('ignoreTransactions');

      for (var i = 0; i < ignoreList.length; i++) {
        var element = ignoreList[i];
        if (typeof element.test === 'function') {
          if (element.test(transactionName)) {
            return true;
          }
        } else if (element === transactionName) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: 'startSpan',
    value: function startSpan(name, type) {
      var trans = this.getOrCreateCurrentTransaction();

      if (trans) {
        this._logger.debug('TransactionService.startSpan', name, type);
        var span = trans.startSpan(name, type);
        return span;
      }
    }
  }, {
    key: 'add',
    value: function add(transaction) {
      if (!this._config.isActive()) {
        return;
      }

      this._subscription.applyAll(this, [transaction]);
      this._logger.debug('TransactionService.add', transaction);
    }
  }, {
    key: 'subscribe',
    value: function subscribe(fn) {
      return this._subscription.subscribe(fn);
    }
  }, {
    key: 'addTask',
    value: function addTask(taskId) {
      var tr = this.getOrCreateCurrentTransaction();
      if (tr) {
        tr.addTask(taskId);
        this._logger.debug('TransactionService.addTask', taskId);
      }
      return taskId;
    }
  }, {
    key: 'removeTask',
    value: function removeTask(taskId) {
      var tr = this.getCurrentTransaction();
      if (!utils.isUndefined(tr) && !tr.ended) {
        tr.removeTask(taskId);
        this._logger.debug('TransactionService.removeTask', taskId);
      }
    }
  }, {
    key: 'logInTransaction',
    value: function logInTransaction() {
      var tr = this.getCurrentTransaction();
      if (!utils.isUndefined(tr) && !tr.ended) {
        tr.debugLog.apply(tr, arguments);
      }
    }
  }, {
    key: 'setDebugDataOnTransaction',
    value: function setDebugDataOnTransaction(key, value) {
      var tr = this.getCurrentTransaction();
      if (!utils.isUndefined(tr) && !tr.ended) {
        tr.setDebugData(key, value);
      }
    }
  }, {
    key: 'detectFinish',
    value: function detectFinish() {
      var tr = this.getCurrentTransaction();
      if (!utils.isUndefined(tr) && !tr.ended) {
        tr.detectFinish();
        this._logger.debug('TransactionService.detectFinish');
      }
    }
  }, {
    key: 'runOuter',
    value: function runOuter(fn, applyThis, applyArgs) {
      return fn.apply(applyThis, applyArgs);
    }
  }]);

  return TransactionService;
}();

module.exports = TransactionService;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Span = __webpack_require__(6);
var utils = __webpack_require__(0);

var Transaction = function () {
  function Transaction(name, type, options, logger) {
    _classCallCheck(this, Transaction);

    this.id = utils.generateRandomId(16);
    this.traceId = utils.generateRandomId();
    this.timestamp = undefined;
    this.name = name;
    this.type = type;
    this.ended = false;
    this._isDone = false;
    this._logger = logger;
    this._options = options || {};

    this.contextInfo = {};

    this.marks = undefined;
    if (this._options.sendVerboseDebugInfo) {
      this.debugLog('Transaction', name, type);
    }

    this.spans = [];
    this._activeSpans = {};

    this._scheduledTasks = {};
    this.doneCallback = function noop() {};

    this._rootSpan = new Span('transaction', 'transaction');

    this.duration = this._rootSpan.duration.bind(this._rootSpan);
    this.nextAutoTaskId = 0;

    this.isHardNavigation = false;

    this.sampled = Math.random() <= this._options.transactionSampleRate;
  }

  _createClass(Transaction, [{
    key: 'debugLog',
    value: function debugLog() {
      if (this._options.sendVerboseDebugInfo) {
        if (!this.contextInfo._debug) {
          this.contextInfo._debug = { log: [] };
        }
        if (!this.contextInfo._debug.log) {
          this.contextInfo._debug.log = [];
        }
        var messages = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
        messages.unshift(Date.now().toString());
        var textMessage = messages.join(' - ');
        this.contextInfo._debug.log.push(textMessage);
        if (this._logger) this._logger.debug(textMessage);
      }
    }
  }, {
    key: 'addContextInfo',
    value: function addContextInfo(obj) {
      utils.merge(this.contextInfo, obj);
    }
  }, {
    key: 'setDebugData',
    value: function setDebugData(key, value) {
      if (!this.contextInfo._debug) {
        this.contextInfo._debug = {};
      }
      this.contextInfo._debug[key] = value;
    }
  }, {
    key: 'addNavigationTimingMarks',
    value: function addNavigationTimingMarks() {
      var marks = utils.getNavigationTimingMarks();
      if (marks) {
        var agent = {
          timeToFirstByte: marks.responseStart,
          domInteractive: marks.domInteractive,
          domComplete: marks.domComplete
        };
        this.addMarks({ navigationTiming: marks, agent: agent });
      }
    }
  }, {
    key: 'addMarks',
    value: function addMarks(obj) {
      this.marks = utils.merge(this.marks || {}, obj);
    }
  }, {
    key: 'mark',
    value: function mark(key) {
      var skey = key.replace(/[.*]/g, '_');
      var now = window.performance.now() - this._rootSpan._start;
      var custom = {};
      custom[skey] = now;
      this.addMarks({ custom: custom });
    }
  }, {
    key: 'redefine',
    value: function redefine(name, type, options) {
      this.debugLog('redefine', name, type);
      this.name = name;
      this.type = type;
      this._options = options;
    }
  }, {
    key: 'startSpan',
    value: function startSpan(name, type, options) {
      if (this.ended) {
        return;
      }
      var transaction = this;
      this.debugLog('startSpan', name, type);
      var opts = typeof options === 'undefined' ? {} : options;

      opts.onSpanEnd = function (trc) {
        transaction._onSpanEnd(trc);
      };
      opts.traceId = this.traceId;
      opts.sampled = this.sampled;

      var span = new Span(name, type, opts);
      this._activeSpans[span.id] = span;

      return span;
    }
  }, {
    key: 'isFinished',
    value: function isFinished() {
      var scheduledTasks = Object.keys(this._scheduledTasks);
      return scheduledTasks.length === 0;
    }
  }, {
    key: 'detectFinish',
    value: function detectFinish() {
      if (this.isFinished()) this.end();
    }
  }, {
    key: 'end',
    value: function end() {
      if (this.ended) {
        return;
      }
      this.debugLog('end');
      this.ended = true;

      // truncate active spans
      for (var sid in this._activeSpans) {
        var span = this._activeSpans[sid];
        span.type = span.type + '.truncated';
        span.end();
      }

      var metadata = utils.getPageMetadata();
      this.addContextInfo(metadata);
      this._rootSpan.end();

      this._adjustStartToEarliestSpan();
      this._adjustEndToLatestSpan();
      this.doneCallback(this);
    }
  }, {
    key: 'addTask',
    value: function addTask(taskId) {
      // todo: should not accept more tasks if the transaction is alreadyFinished]
      if (typeof taskId === 'undefined') {
        taskId = 'autoId' + this.nextAutoTaskId++;
      }
      this.debugLog('addTask', taskId);
      this._scheduledTasks[taskId] = taskId;
      return taskId;
    }
  }, {
    key: 'removeTask',
    value: function removeTask(taskId) {
      this.debugLog('removeTask', taskId);
      this.setDebugData('lastRemovedTask', taskId);
      delete this._scheduledTasks[taskId];
      this.detectFinish();
    }
  }, {
    key: 'addEndedSpans',
    value: function addEndedSpans(existingSpans) {
      this.spans = this.spans.concat(existingSpans);
    }
  }, {
    key: '_onSpanEnd',
    value: function _onSpanEnd(span) {
      this.spans.push(span);
      span._scheduledTasks = Object.keys(this._scheduledTasks);
      // Remove span from _activeSpans
      delete this._activeSpans[span.id];
    }
  }, {
    key: '_adjustEndToLatestSpan',
    value: function _adjustEndToLatestSpan() {
      var latestSpan = findLatestNonXHRSpan(this.spans);

      if (latestSpan) {
        this._rootSpan._end = latestSpan._end;

        // set all spans that now are longer than the transaction to
        // be truncated spans
        for (var i = 0; i < this.spans.length; i++) {
          var span = this.spans[i];
          if (span._end > this._rootSpan._end) {
            span._end = this._rootSpan._end;
            span.type = span.type + '.truncated';
          }
          if (span._start > this._rootSpan._end) {
            span._start = this._rootSpan._end;
          }
        }
      }
    }
  }, {
    key: '_adjustStartToEarliestSpan',
    value: function _adjustStartToEarliestSpan() {
      var span = getEarliestSpan(this.spans);

      if (span && span._start < this._rootSpan._start) {
        this._rootSpan._start = span._start;
      }
    }
  }]);

  return Transaction;
}();

function findLatestNonXHRSpan(spans) {
  var latestSpan = null;
  for (var i = 0; i < spans.length; i++) {
    var span = spans[i];
    if (span.type && span.type.indexOf('ext') === -1 && span.type !== 'transaction' && (!latestSpan || latestSpan._end < span._end)) {
      latestSpan = span;
    }
  }
  return latestSpan;
}

function getEarliestSpan(spans) {
  var earliestSpan = null;

  spans.forEach(function (span) {
    if (!earliestSpan) {
      earliestSpan = span;
    }
    if (earliestSpan && earliestSpan._start > span._start) {
      earliestSpan = span;
    }
  });

  return earliestSpan;
}

module.exports = Transaction;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Span = __webpack_require__(6);
var utils = __webpack_require__(0);

var eventPairs = [['domainLookupStart', 'domainLookupEnd', 'Domain lookup'], ['connectStart', 'connectEnd', 'Making a connection to the server'], ['requestStart', 'responseEnd', 'Requesting and receiving the document'], ['domLoading', 'domInteractive', 'Parsing the document, executing sync. scripts'], ['domContentLoadedEventStart', 'domContentLoadedEventEnd', 'Fire "DOMContentLoaded" event'], ['loadEventStart', 'loadEventEnd', 'Fire "load" event']];

var spanThreshold = 5 * 60 * 1000;
function isValidSpan(transaction, span) {
  var d = span.duration();
  return d < spanThreshold && d > 0 && span._start <= transaction._rootSpan._end && span._end <= transaction._rootSpan._end;
}

function createNavigationTimingSpans(timings, baseTime) {
  var spans = [];
  for (var i = 0; i < eventPairs.length; i++) {
    var start = timings[eventPairs[i][0]];
    var end = timings[eventPairs[i][1]];
    if (baseTime && start && end && end > start && start >= baseTime && end - start < spanThreshold && start - baseTime < spanThreshold && end - baseTime < spanThreshold) {
      var span = new Span(eventPairs[i][2], 'hard-navigation.browser-timing');
      if (eventPairs[i][0] === 'requestStart') {
        span.pageResponse = true;
      }
      span._start = start - baseTime;
      span.ended = true;
      span._end = end - baseTime;
      spans.push(span);
    }
  }
  return spans;
}

function createResourceTimingSpans(entries, filterUrls) {
  var spans = [];
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    if (entry.initiatorType && entry.initiatorType === 'xmlhttprequest' || !entry.name) {
      continue;
    } else if (entry.initiatorType !== 'css' && entry.initiatorType !== 'img' && entry.initiatorType !== 'script' && entry.initiatorType !== 'link') {
      // is web request? test for css/img before the expensive operation
      var foundAjaxReq = false;
      for (var j = 0; j < filterUrls.length; j++) {
        // entry.name.endsWith(ajaxUrls[j])
        var idx = entry.name.lastIndexOf(filterUrls[j]);
        if (idx > -1 && idx === entry.name.length - filterUrls[j].length) {
          foundAjaxReq = true;
          break;
        }
      }
      if (foundAjaxReq) {
        continue;
      }
    } else {
      var kind = 'resource';
      if (entry.initiatorType) {
        kind += '.' + entry.initiatorType;
      }
      var start = entry.startTime;
      var end = entry.responseEnd;
      if (typeof start === 'number' && typeof end === 'number' && start >= 0 && end > start && end - start < spanThreshold && start < spanThreshold && end < spanThreshold) {
        var parsedUrl = utils.parseUrl(entry.name);
        var span = new Span(parsedUrl.path || entry.name, kind);
        span.setContext({
          http: {
            url: entry.name
          }
        });
        span._start = start;
        span.ended = true;
        span._end = end;
        spans.push(span);
      }
    }
  }
  return spans;
}

function captureHardNavigation(transaction) {
  if (transaction.isHardNavigation && window.performance && window.performance.timing) {
    var baseTime = window.performance.timing.fetchStart;
    var timings = window.performance.timing;

    // must be zero otherwise the calculated relative _start time would be wrong
    transaction._rootSpan._start = 0;
    transaction.type = 'page-load';

    createNavigationTimingSpans(timings, baseTime).forEach(function (span) {
      if (isValidSpan(transaction, span)) {
        span.traceId = transaction.traceId;
        span.sampled = transaction.sampled;
        if (transaction._options.pageLoadSpanId && span.pageResponse) {
          span.id = transaction._options.pageLoadSpanId;
        }
        transaction.spans.push(span);
      }
    });

    if (window.performance.getEntriesByType) {
      var entries = window.performance.getEntriesByType('resource');

      var ajaxUrls = transaction.spans.filter(function (span) {
        return span.type.indexOf('ext.HttpRequest') > -1;
      }).map(function (span) {
        return span.name.split(' ')[1];
      });

      createResourceTimingSpans(entries, ajaxUrls).forEach(function (span) {
        if (isValidSpan(transaction, span)) {
          transaction.spans.push(span);
        }
      });
    }
    transaction._adjustStartToEarliestSpan();
    transaction._adjustEndToLatestSpan();

    transaction.addNavigationTimingMarks();
  }
}

module.exports = {
  captureHardNavigation: captureHardNavigation,
  createNavigationTimingSpans: createNavigationTimingSpans,
  createResourceTimingSpans: createResourceTimingSpans
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ApmServer = __webpack_require__(24);
var ConfigService = __webpack_require__(28);
var LoggingService = __webpack_require__(29);

var patchUtils = __webpack_require__(5);
var utils = __webpack_require__(0);

var ServiceFactory = function () {
  function ServiceFactory() {
    _classCallCheck(this, ServiceFactory);

    this._serviceCreators = {};
    this._serviceInstances = {};
    this.initialized = false;
  }

  _createClass(ServiceFactory, [{
    key: 'registerCoreServices',
    value: function registerCoreServices() {
      var serviceFactory = this;

      this.registerServiceCreator('ConfigService', function () {
        var configService = new ConfigService();
        return configService;
      });

      this.registerServiceCreator('LoggingService', function () {
        return new LoggingService();
      });
      this.registerServiceCreator('ApmServer', function () {
        return new ApmServer(serviceFactory.getService('ConfigService'), serviceFactory.getService('LoggingService'));
      });
      this.registerServiceInstance('PatchUtils', patchUtils);
      this.registerServiceInstance('Utils', utils);
    }
  }, {
    key: 'init',
    value: function init() {
      if (this.initialized) {
        return;
      }
      this.initialized = true;
      var serviceFactory = this;

      var configService = serviceFactory.getService('ConfigService');
      configService.init();
      var loggingService = serviceFactory.getService('LoggingService');

      function setLogLevel(loggingService, configService) {
        if (configService.get('debug') === true && configService.config.logLevel !== 'trace') {
          loggingService.setLevel('debug', false);
        } else {
          loggingService.setLevel(configService.get('logLevel'), false);
        }
      }

      setLogLevel(loggingService, configService);
      configService.subscribeToChange(function (newConfig) {
        setLogLevel(loggingService, configService);
      });

      var apmServer = serviceFactory.getService('ApmServer');
      apmServer.init();
    }
  }, {
    key: 'registerServiceCreator',
    value: function registerServiceCreator(name, creator) {
      this._serviceCreators[name] = creator;
    }
  }, {
    key: 'registerServiceInstance',
    value: function registerServiceInstance(name, instance) {
      this._serviceInstances[name] = instance;
    }
  }, {
    key: 'getService',
    value: function getService(name) {
      if (!this._serviceInstances[name]) {
        if (typeof this._serviceCreators[name] === 'function') {
          this._serviceInstances[name] = this._serviceCreators[name](this);
        } else {
          throw new Error('Can not get service, No creator for: ' + name);
        }
      }
      return this._serviceInstances[name];
    }
  }]);

  return ServiceFactory;
}();

module.exports = ServiceFactory;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queue = __webpack_require__(25);
var throttle = __webpack_require__(26);
var utils = __webpack_require__(0);
var NDJSON = __webpack_require__(27);
var xhrIgnore = __webpack_require__(4).XHR_IGNORE;

var ApmServer = function () {
  function ApmServer(configService, loggingService) {
    _classCallCheck(this, ApmServer);

    this._configService = configService;
    this._loggingService = loggingService;
    this.logMessages = {
      invalidConfig: { message: 'Configuration is invalid!', level: 'warn' }
    };

    this.errorQueue = undefined;
    this.transactionQueue = undefined;

    this.throttleAddError = undefined;
    this.throttleAddTransaction = undefined;

    this.initialized = false;
    this.ndjsonSpan = {};
  }

  _createClass(ApmServer, [{
    key: 'init',
    value: function init() {
      if (this.initialized) {
        return;
      }
      this.initialized = true;

      this.initErrorQueue();
      this.initTransactionQueue();
    }
  }, {
    key: 'createServiceObject',
    value: function createServiceObject() {
      var cfg = this._configService;
      var stringLimit = cfg.get('serverStringLimit');

      var serviceObject = {
        name: utils.sanitizeString(cfg.get('serviceName'), stringLimit, true),
        version: utils.sanitizeString(cfg.get('serviceVersion'), stringLimit, false),
        agent: {
          name: cfg.get('agentName'),
          version: cfg.get('agentVersion')
        },
        language: {
          name: 'javascript'
        }
      };
      return serviceObject;
    }
  }, {
    key: '_postJson',
    value: function _postJson(endPoint, payload) {
      return this._makeHttpRequest('POST', endPoint, payload, {
        'Content-Type': 'application/x-ndjson'
      });
    }
  }, {
    key: '_makeHttpRequest',
    value: function _makeHttpRequest(method, url, payload, headers) {
      return new Promise(function (resolve, reject) {
        var xhr = new window.XMLHttpRequest();
        xhr[xhrIgnore] = true;
        xhr.open(method, url, true);
        xhr.timeout = 10000;

        if (headers) {
          for (var header in headers) {
            if (headers.hasOwnProperty(header)) {
              xhr.setRequestHeader(header, headers[header]);
            }
          }
        }

        xhr.onreadystatechange = function (evt) {
          if (xhr.readyState === 4) {
            var status = xhr.status;
            if (status === 0 || status > 399 && status < 600) {
              // An http 4xx or 5xx error. Signal an error.
              var err = new Error(url + ' HTTP status: ' + status);
              err.xhr = xhr;
              reject(err);
            } else {
              resolve(xhr.responseText);
            }
          }
        };

        xhr.onerror = function (err) {
          reject(err);
        };

        xhr.send(payload);
      });
    }
  }, {
    key: '_createQueue',
    value: function _createQueue(onFlush) {
      var queueLimit = this._configService.get('queueLimit');
      var flushInterval = this._configService.get('flushInterval');
      return new Queue(onFlush, {
        queueLimit: queueLimit,
        flushInterval: flushInterval
      });
    }
  }, {
    key: 'initErrorQueue',
    value: function initErrorQueue() {
      var apmServer = this;
      if (this.errorQueue) {
        this.errorQueue.flush();
      }
      this.errorQueue = this._createQueue(function (errors) {
        var p = apmServer.sendErrors(errors);
        if (p) {
          p.then(undefined, function (reason) {
            apmServer._loggingService.warn('Failed sending errors!', reason);
          });
        }
      });

      var limit = apmServer._configService.get('errorThrottleLimit');
      var interval = apmServer._configService.get('errorThrottleInterval');

      this.throttleAddError = throttle(this.errorQueue.add.bind(this.errorQueue), function (method, url) {
        apmServer._loggingService.warn('Dropped error due to throttling!');
      }, {
        limit: limit,
        interval: interval
      });
    }
  }, {
    key: 'initTransactionQueue',
    value: function initTransactionQueue() {
      var apmServer = this;
      if (this.transactionQueue) {
        this.transactionQueue.flush();
      }
      this.transactionQueue = this._createQueue(function (transactions) {
        var p = apmServer.sendTransactions(transactions);
        if (p) {
          p.then(undefined, function (reason) {
            apmServer._loggingService.warn('Failed sending transactions!', reason);
          });
        }
      });

      var limit = apmServer._configService.get('transactionThrottleLimit');
      var interval = apmServer._configService.get('transactionThrottleInterval');

      this.throttleAddTransaction = throttle(this.transactionQueue.add.bind(this.transactionQueue), function () {
        apmServer._loggingService.warn('Dropped transaction due to throttling!');
      }, {
        limit: limit,
        interval: interval
      });
    }
  }, {
    key: 'addError',
    value: function addError(error) {
      if (this._configService.isActive()) {
        if (!this.errorQueue) {
          this.initErrorQueue();
        }
        this.throttleAddError(error);
      }
    }
  }, {
    key: 'addTransaction',
    value: function addTransaction(transaction) {
      if (this._configService.isActive()) {
        if (!this.transactionQueue) {
          this.initTransactionQueue();
        }
        this.throttleAddTransaction(transaction);
      }
    }
  }, {
    key: 'warnOnce',
    value: function warnOnce(logObject) {
      if (logObject.level === 'warn') {
        logObject.level = 'debug';
        this._loggingService.warn(logObject.message);
      } else {
        this._loggingService.debug(logObject.message);
      }
    }
  }, {
    key: 'ndjsonErrors',
    value: function ndjsonErrors(errors) {
      return errors.map(function (error) {
        return NDJSON.stringify({ error: error });
      });
    }
  }, {
    key: 'sendErrors',
    value: function sendErrors(errors) {
      if (this._configService.isValid() && this._configService.isActive()) {
        if (errors && errors.length > 0) {
          var payload = {
            service: this.createServiceObject(),
            errors: errors
          };

          payload = this._configService.applyFilters(payload);
          if (payload) {
            var endPoint = this._configService.getEndpointUrl('errors');
            var ndjson = this.ndjsonErrors(payload.errors);
            ndjson.unshift(NDJSON.stringify({ metadata: { service: payload.service } }));
            var ndjsonPayload = ndjson.join('');
            return this._postJson(endPoint, ndjsonPayload);
          } else {
            this._loggingService.warn('Dropped payload due to filtering!');
          }
        }
      } else {
        this.warnOnce(this.logMessages.invalidConfig);
      }
    }
  }, {
    key: 'ndjsonTransactions',
    value: function ndjsonTransactions(transactions) {
      var ndjsonSpan = this.ndjsonSpan;
      return transactions.map(function (tr) {
        var spans = '';
        if (tr.spans) {
          spans = tr.spans.map(function (sp) {
            ndjsonSpan.span = sp;
            return NDJSON.stringify(ndjsonSpan);
          }).join('');
          delete tr.spans;
        }
        return NDJSON.stringify({ transaction: tr }) + spans;
      });
    }
  }, {
    key: 'sendTransactions',
    value: function sendTransactions(transactions) {
      if (this._configService.isValid() && this._configService.isActive()) {
        if (transactions && transactions.length > 0) {
          var payload = {
            service: this.createServiceObject(),
            transactions: transactions
          };
          payload = this._configService.applyFilters(payload);
          if (payload) {
            var endPoint = this._configService.getEndpointUrl('transactions');
            var ndjson = this.ndjsonTransactions(payload.transactions);
            ndjson.unshift(NDJSON.stringify({ metadata: { service: payload.service } }));
            var ndjsonPayload = ndjson.join('');
            return this._postJson(endPoint, ndjsonPayload);
          } else {
            this._loggingService.warn('Dropped payload due to filtering!');
          }
        }
      } else {
        this.warnOnce(this.logMessages.invalidConfig);
      }
    }
  }]);

  return ApmServer;
}();

module.exports = ApmServer;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queue = function () {
  function Queue(onFlush, opts) {
    _classCallCheck(this, Queue);

    if (!opts) opts = {};
    this.onFlush = onFlush;
    this.items = [];
    this.queueLimit = opts.queueLimit || -1;
    this.flushInterval = opts.flushInterval || 0;
    this.timeoutId = undefined;
  }

  _createClass(Queue, [{
    key: '_setTimer',
    value: function _setTimer() {
      var _this = this;

      this.timeoutId = setTimeout(function () {
        _this.flush();
      }, this.flushInterval);
    }
  }, {
    key: 'flush',
    value: function flush() {
      this.onFlush(this.items);
      this._clear();
    }
  }, {
    key: '_clear',
    value: function _clear() {
      if (typeof this.timeoutId !== 'undefined') {
        clearTimeout(this.timeoutId);
        this.timeoutId = undefined;
      }
      this.items = [];
    }
  }, {
    key: 'add',
    value: function add(item) {
      this.items.push(item);
      if (this.queueLimit !== -1 && this.items.length >= this.queueLimit) {
        this.flush();
      } else {
        if (typeof this.timeoutId === 'undefined') {
          this._setTimer();
        }
      }
    }
  }]);

  return Queue;
}();

module.exports = Queue;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function throttle(fn, onThrottle, opts) {
  var context = opts.context || this;
  var limit = opts.limit;
  var interval = opts.interval;
  var countFn = opts.countFn || function () {};
  var counter = 0;
  var timeoutId;
  return function () {
    var count = typeof countFn === 'function' && countFn.apply(context, arguments);
    if (typeof count !== 'number') {
      count = 1;
    }
    counter = counter + count;
    if (typeof timeoutId === 'undefined') {
      timeoutId = setTimeout(function () {
        counter = 0;
        timeoutId = undefined;
      }, interval);
    }
    if (counter > limit) {
      if (typeof onThrottle === 'function') {
        return onThrottle.apply(context, arguments);
      }
    } else {
      return fn.apply(context, arguments);
    }
  };
}

module.exports = throttle;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NDJSON = function () {
  function NDJSON() {
    _classCallCheck(this, NDJSON);
  }

  _createClass(NDJSON, null, [{
    key: 'stringify',
    value: function stringify(object) {
      return JSON.stringify(object) + '\n';
    }
  }]);

  return NDJSON;
}();

module.exports = NDJSON;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var utils = __webpack_require__(0);
var Subscription = __webpack_require__(1);

function Config() {
  this.config = {};
  this.defaults = {
    serviceName: '',
    serviceVersion: '',
    agentName: 'js-base',
    agentVersion: '1.0.0',
    serverUrl: 'http://localhost:8200',
    serverUrlPrefix: '/intake/v2/rum/events',
    active: true,
    isInstalled: false,
    debug: false,
    logLevel: 'warn',
    // performance monitoring
    browserResponsivenessInterval: 500,
    browserResponsivenessBuffer: 3,
    checkBrowserResponsiveness: true,
    enable: true,
    groupSimilarSpans: true,
    similarSpanThreshold: 0.05,
    sendVerboseDebugInfo: false,
    includeXHRQueryString: false,
    capturePageLoad: true,
    ignoreTransactions: [],
    // throttlingRequestLimit: 20,
    // throttlingInterval: 30000, // 30s
    errorThrottleLimit: 20,
    errorThrottleInterval: 30000,
    transactionThrottleLimit: 20,
    transactionThrottleInterval: 30000,
    transactionDurationThreshold: 60000,

    queueLimit: -1,
    flushInterval: 500,

    sendPageLoadTransaction: true,

    serverStringLimit: 1024,

    distributedTracing: true,
    distributedTracingOrigins: [],
    distributedTracingHeaderValueCallback: undefined,
    distributedTracingHeaderName: 'elastic-apm-traceparent',

    pageLoadTraceId: undefined,
    pageLoadSpanId: undefined,
    pageLoadSampled: undefined,
    pageLoadTransactionName: undefined,

    transactionSampleRate: 1.0,

    context: {},
    platform: {}
  };

  this._changeSubscription = new Subscription();
  this.filters = [];
}

Config.prototype.isActive = function isActive() {
  return this.get('active');
};

Config.prototype.addFilter = function addFilter(cb) {
  if (typeof cb !== 'function') {
    throw new Error('Argument to must be function');
  }
  this.filters.push(cb);
};

Config.prototype.applyFilters = function applyFilters(data) {
  for (var i = 0; i < this.filters.length; i++) {
    data = this.filters[i](data);
    if (!data) {
      return;
    }
  }
  return data;
};

Config.prototype.init = function () {
  var scriptData = _getConfigFromScript();
  this.setConfig(scriptData);
};

Config.prototype.get = function (key) {
  return utils.arrayReduce(key.split('.'), function (obj, i) {
    return obj && obj[i];
  }, this.config);
};

Config.prototype.getEndpointUrl = function getEndpointUrl(endpoint) {
  var url = this.get('serverUrl') + this.get('serverUrlPrefix');
  return url;
};

Config.prototype.set = function (key, value) {
  var levels = key.split('.');
  var maxLevel = levels.length - 1;
  var target = this.config;

  utils.arraySome(levels, function (level, i) {
    if (typeof level === 'undefined') {
      return true;
    }
    if (i === maxLevel) {
      target[level] = value;
    } else {
      var obj = target[level] || {};
      target[level] = obj;
      target = obj;
    }
  });
};

Config.prototype.setUserContext = function (userContext) {
  var context = {};
  if (typeof userContext.id === 'number') {
    context.id = userContext.id;
  }
  if (typeof userContext.id === 'string') {
    context.id = utils.sanitizeString(userContext.id, this.get('serverStringLimit'));
  }
  if (typeof userContext.username === 'string') {
    context.username = utils.sanitizeString(userContext.username, this.get('serverStringLimit'));
  }
  if (typeof userContext.email === 'string') {
    context.email = utils.sanitizeString(userContext.email, this.get('serverStringLimit'));
  }
  this.set('context.user', context);
};

Config.prototype.setCustomContext = function (customContext) {
  if (customContext && (typeof customContext === 'undefined' ? 'undefined' : _typeof(customContext)) === 'object') {
    this.set('context.custom', customContext);
  }
};

Config.prototype.setTag = function (key, value) {
  if (!key) return false;
  if (!this.config.context.tags) {
    this.config.context.tags = {};
  }
  var skey = key.replace(/[.*]/g, '_');
  this.config.context.tags[skey] = utils.sanitizeString(value, this.get('serverStringLimit'));
};

Config.prototype.setTags = function (tags) {
  var configService = this;
  var keys = Object.keys(tags);
  keys.forEach(function (k) {
    configService.setTag(k, tags[k]);
  });
};

Config.prototype.getAgentName = function () {
  var version = this.config['agentVersion'];
  if (!version) {
    version = 'dev';
  }
  return this.get('agentName') + '/' + version;
};

Config.prototype.setConfig = function (properties) {
  properties = properties || {};
  this.config = utils.merge({}, this.defaults, this.config, properties);

  this._changeSubscription.applyAll(this, [this.config]);
};

Config.prototype.subscribeToChange = function (fn) {
  return this._changeSubscription.subscribe(fn);
};

Config.prototype.isValid = function () {
  var requiredKeys = ['serviceName', 'serverUrl'];
  var values = utils.arrayMap(requiredKeys, utils.functionBind(function (key) {
    return this.config[key] === null || this.config[key] === undefined || this.config[key] === '';
  }, this));

  return utils.arrayIndexOf(values, true) === -1;
};

var _getConfigFromScript = function _getConfigFromScript() {
  var script = utils.getCurrentScript();
  var config = _getDataAttributesFromNode(script);
  return config;
};

function _getDataAttributesFromNode(node) {
  var dataAttrs = {};
  var dataRegex = /^data-([\w-]+)$/;

  if (node) {
    var attrs = node.attributes;
    for (var i = 0; i < attrs.length; i++) {
      var attr = attrs[i];
      if (dataRegex.test(attr.nodeName)) {
        var key = attr.nodeName.match(dataRegex)[1];

        // camelCase key
        key = utils.arrayMap(key.split('-'), function (group, index) {
          return index > 0 ? group.charAt(0).toUpperCase() + group.substring(1) : group;
        }).join('');

        dataAttrs[key] = attr.value || attr.nodeValue;
      }
    }
  }

  return dataAttrs;
}

Config.prototype.isPlatformSupported = function () {
  return typeof Array.prototype.forEach === 'function' && typeof JSON.stringify === 'function' && typeof Function.bind === 'function' && window.performance && typeof window.performance.now === 'function' && utils.isCORSSupported();
};

module.exports = Config;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function noop() {}

var LoggingService = function () {
  function LoggingService(spec) {
    _classCallCheck(this, LoggingService);

    if (!spec) spec = {};
    this.levels = ['trace', 'debug', 'info', 'warn', 'error'];
    this.level = spec.level || 'info';
    this.prefix = spec.prefix || '';

    this.resetLogMethods();
  }

  _createClass(LoggingService, [{
    key: 'shouldLog',
    value: function shouldLog(level) {
      return this.levels.indexOf(level) >= this.levels.indexOf(this.level);
    }
  }, {
    key: 'setLevel',
    value: function setLevel(level) {
      this.level = level;
      this.resetLogMethods();
    }
  }, {
    key: 'resetLogMethods',
    value: function resetLogMethods() {
      var loggingService = this;
      this.levels.forEach(function (level) {
        loggingService[level] = loggingService.shouldLog(level) ? log : noop;

        function log() {
          var prefix = loggingService.prefix;
          var normalizedLevel;

          switch (level) {
            case 'trace':
              normalizedLevel = 'info';
              break;
            case 'debug':
              normalizedLevel = 'info';
              break;
            default:
              normalizedLevel = level;
          }
          var args = arguments;
          if (prefix) {
            if (typeof prefix === 'function') prefix = prefix(level);
            args[0] = prefix + args[0];
          }
          if (console) {
            var realMethod = console[normalizedLevel] ? console[normalizedLevel] : console.log;
            if (typeof realMethod === 'function') {
              realMethod.apply(console, args);
            }
          }
        }
      });
    }
  }]);

  return LoggingService;
}();

module.exports = LoggingService;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// This file can be required in Browserify and Node.js for automatic polyfill
// To use it:  require('es6-promise/auto');


module.exports = __webpack_require__(31).polyfill();

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.4+314e4831
 */

(function (global, factory) {
  ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.ES6Promise = factory();
})(undefined, function () {
  'use strict';

  function objectOrFunction(x) {
    var type = typeof x === 'undefined' ? 'undefined' : _typeof(x);
    return x !== null && (type === 'object' || type === 'function');
  }

  function isFunction(x) {
    return typeof x === 'function';
  }

  var _isArray = void 0;
  if (Array.isArray) {
    _isArray = Array.isArray;
  } else {
    _isArray = function _isArray(x) {
      return Object.prototype.toString.call(x) === '[object Array]';
    };
  }

  var isArray = _isArray;

  var len = 0;
  var vertxNext = void 0;
  var customSchedulerFn = void 0;

  var asap = function asap(callback, arg) {
    queue[len] = callback;
    queue[len + 1] = arg;
    len += 2;
    if (len === 2) {
      // If len is 2, that means that we need to schedule an async flush.
      // If additional callbacks are queued before the queue is flushed, they
      // will be processed by this flush that we are scheduling.
      if (customSchedulerFn) {
        customSchedulerFn(flush);
      } else {
        scheduleFlush();
      }
    }
  };

  function setScheduler(scheduleFn) {
    customSchedulerFn = scheduleFn;
  }

  function setAsap(asapFn) {
    asap = asapFn;
  }

  var browserWindow = typeof window !== 'undefined' ? window : undefined;
  var browserGlobal = browserWindow || {};
  var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
  var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

  // test for web worker but not in IE10
  var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

  // node
  function useNextTick() {
    // node version 0.10.x displays a deprecation warning when nextTick is used recursively
    // see https://github.com/cujojs/when/issues/410 for details
    return function () {
      return process.nextTick(flush);
    };
  }

  // vertx
  function useVertxTimer() {
    if (typeof vertxNext !== 'undefined') {
      return function () {
        vertxNext(flush);
      };
    }

    return useSetTimeout();
  }

  function useMutationObserver() {
    var iterations = 0;
    var observer = new BrowserMutationObserver(flush);
    var node = document.createTextNode('');
    observer.observe(node, { characterData: true });

    return function () {
      node.data = iterations = ++iterations % 2;
    };
  }

  // web worker
  function useMessageChannel() {
    var channel = new MessageChannel();
    channel.port1.onmessage = flush;
    return function () {
      return channel.port2.postMessage(0);
    };
  }

  function useSetTimeout() {
    // Store setTimeout reference so es6-promise will be unaffected by
    // other code modifying setTimeout (like sinon.useFakeTimers())
    var globalSetTimeout = setTimeout;
    return function () {
      return globalSetTimeout(flush, 1);
    };
  }

  var queue = new Array(1000);
  function flush() {
    for (var i = 0; i < len; i += 2) {
      var callback = queue[i];
      var arg = queue[i + 1];

      callback(arg);

      queue[i] = undefined;
      queue[i + 1] = undefined;
    }

    len = 0;
  }

  function attemptVertx() {
    try {
      var vertx = Function('return this')().require('vertx');
      vertxNext = vertx.runOnLoop || vertx.runOnContext;
      return useVertxTimer();
    } catch (e) {
      return useSetTimeout();
    }
  }

  var scheduleFlush = void 0;
  // Decide what async method to use to triggering processing of queued callbacks:
  if (isNode) {
    scheduleFlush = useNextTick();
  } else if (BrowserMutationObserver) {
    scheduleFlush = useMutationObserver();
  } else if (isWorker) {
    scheduleFlush = useMessageChannel();
  } else if (browserWindow === undefined && "function" === 'function') {
    scheduleFlush = attemptVertx();
  } else {
    scheduleFlush = useSetTimeout();
  }

  function then(onFulfillment, onRejection) {
    var parent = this;

    var child = new this.constructor(noop);

    if (child[PROMISE_ID] === undefined) {
      makePromise(child);
    }

    var _state = parent._state;

    if (_state) {
      var callback = arguments[_state - 1];
      asap(function () {
        return invokeCallback(_state, child, callback, parent._result);
      });
    } else {
      subscribe(parent, child, onFulfillment, onRejection);
    }

    return child;
  }

  /**
    `Promise.resolve` returns a promise that will become resolved with the
    passed `value`. It is shorthand for the following:
  
    ```javascript
    let promise = new Promise(function(resolve, reject){
      resolve(1);
    });
  
    promise.then(function(value){
      // value === 1
    });
    ```
  
    Instead of writing the above, your code now simply becomes the following:
  
    ```javascript
    let promise = Promise.resolve(1);
  
    promise.then(function(value){
      // value === 1
    });
    ```
  
    @method resolve
    @static
    @param {Any} value value that the returned promise will be resolved with
    Useful for tooling.
    @return {Promise} a promise that will become fulfilled with the given
    `value`
  */
  function resolve$1(object) {
    /*jshint validthis:true */
    var Constructor = this;

    if (object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object.constructor === Constructor) {
      return object;
    }

    var promise = new Constructor(noop);
    resolve(promise, object);
    return promise;
  }

  var PROMISE_ID = Math.random().toString(36).substring(2);

  function noop() {}

  var PENDING = void 0;
  var FULFILLED = 1;
  var REJECTED = 2;

  var TRY_CATCH_ERROR = { error: null };

  function selfFulfillment() {
    return new TypeError("You cannot resolve a promise with itself");
  }

  function cannotReturnOwn() {
    return new TypeError('A promises callback cannot return that same promise.');
  }

  function getThen(promise) {
    try {
      return promise.then;
    } catch (error) {
      TRY_CATCH_ERROR.error = error;
      return TRY_CATCH_ERROR;
    }
  }

  function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
    try {
      then$$1.call(value, fulfillmentHandler, rejectionHandler);
    } catch (e) {
      return e;
    }
  }

  function handleForeignThenable(promise, thenable, then$$1) {
    asap(function (promise) {
      var sealed = false;
      var error = tryThen(then$$1, thenable, function (value) {
        if (sealed) {
          return;
        }
        sealed = true;
        if (thenable !== value) {
          resolve(promise, value);
        } else {
          fulfill(promise, value);
        }
      }, function (reason) {
        if (sealed) {
          return;
        }
        sealed = true;

        reject(promise, reason);
      }, 'Settle: ' + (promise._label || ' unknown promise'));

      if (!sealed && error) {
        sealed = true;
        reject(promise, error);
      }
    }, promise);
  }

  function handleOwnThenable(promise, thenable) {
    if (thenable._state === FULFILLED) {
      fulfill(promise, thenable._result);
    } else if (thenable._state === REJECTED) {
      reject(promise, thenable._result);
    } else {
      subscribe(thenable, undefined, function (value) {
        return resolve(promise, value);
      }, function (reason) {
        return reject(promise, reason);
      });
    }
  }

  function handleMaybeThenable(promise, maybeThenable, then$$1) {
    if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
      handleOwnThenable(promise, maybeThenable);
    } else {
      if (then$$1 === TRY_CATCH_ERROR) {
        reject(promise, TRY_CATCH_ERROR.error);
        TRY_CATCH_ERROR.error = null;
      } else if (then$$1 === undefined) {
        fulfill(promise, maybeThenable);
      } else if (isFunction(then$$1)) {
        handleForeignThenable(promise, maybeThenable, then$$1);
      } else {
        fulfill(promise, maybeThenable);
      }
    }
  }

  function resolve(promise, value) {
    if (promise === value) {
      reject(promise, selfFulfillment());
    } else if (objectOrFunction(value)) {
      handleMaybeThenable(promise, value, getThen(value));
    } else {
      fulfill(promise, value);
    }
  }

  function publishRejection(promise) {
    if (promise._onerror) {
      promise._onerror(promise._result);
    }

    publish(promise);
  }

  function fulfill(promise, value) {
    if (promise._state !== PENDING) {
      return;
    }

    promise._result = value;
    promise._state = FULFILLED;

    if (promise._subscribers.length !== 0) {
      asap(publish, promise);
    }
  }

  function reject(promise, reason) {
    if (promise._state !== PENDING) {
      return;
    }
    promise._state = REJECTED;
    promise._result = reason;

    asap(publishRejection, promise);
  }

  function subscribe(parent, child, onFulfillment, onRejection) {
    var _subscribers = parent._subscribers;
    var length = _subscribers.length;

    parent._onerror = null;

    _subscribers[length] = child;
    _subscribers[length + FULFILLED] = onFulfillment;
    _subscribers[length + REJECTED] = onRejection;

    if (length === 0 && parent._state) {
      asap(publish, parent);
    }
  }

  function publish(promise) {
    var subscribers = promise._subscribers;
    var settled = promise._state;

    if (subscribers.length === 0) {
      return;
    }

    var child = void 0,
        callback = void 0,
        detail = promise._result;

    for (var i = 0; i < subscribers.length; i += 3) {
      child = subscribers[i];
      callback = subscribers[i + settled];

      if (child) {
        invokeCallback(settled, child, callback, detail);
      } else {
        callback(detail);
      }
    }

    promise._subscribers.length = 0;
  }

  function tryCatch(callback, detail) {
    try {
      return callback(detail);
    } catch (e) {
      TRY_CATCH_ERROR.error = e;
      return TRY_CATCH_ERROR;
    }
  }

  function invokeCallback(settled, promise, callback, detail) {
    var hasCallback = isFunction(callback),
        value = void 0,
        error = void 0,
        succeeded = void 0,
        failed = void 0;

    if (hasCallback) {
      value = tryCatch(callback, detail);

      if (value === TRY_CATCH_ERROR) {
        failed = true;
        error = value.error;
        value.error = null;
      } else {
        succeeded = true;
      }

      if (promise === value) {
        reject(promise, cannotReturnOwn());
        return;
      }
    } else {
      value = detail;
      succeeded = true;
    }

    if (promise._state !== PENDING) {
      // noop
    } else if (hasCallback && succeeded) {
      resolve(promise, value);
    } else if (failed) {
      reject(promise, error);
    } else if (settled === FULFILLED) {
      fulfill(promise, value);
    } else if (settled === REJECTED) {
      reject(promise, value);
    }
  }

  function initializePromise(promise, resolver) {
    try {
      resolver(function resolvePromise(value) {
        resolve(promise, value);
      }, function rejectPromise(reason) {
        reject(promise, reason);
      });
    } catch (e) {
      reject(promise, e);
    }
  }

  var id = 0;
  function nextId() {
    return id++;
  }

  function makePromise(promise) {
    promise[PROMISE_ID] = id++;
    promise._state = undefined;
    promise._result = undefined;
    promise._subscribers = [];
  }

  function validationError() {
    return new Error('Array Methods must be provided an Array');
  }

  var Enumerator = function () {
    function Enumerator(Constructor, input) {
      this._instanceConstructor = Constructor;
      this.promise = new Constructor(noop);

      if (!this.promise[PROMISE_ID]) {
        makePromise(this.promise);
      }

      if (isArray(input)) {
        this.length = input.length;
        this._remaining = input.length;

        this._result = new Array(this.length);

        if (this.length === 0) {
          fulfill(this.promise, this._result);
        } else {
          this.length = this.length || 0;
          this._enumerate(input);
          if (this._remaining === 0) {
            fulfill(this.promise, this._result);
          }
        }
      } else {
        reject(this.promise, validationError());
      }
    }

    Enumerator.prototype._enumerate = function _enumerate(input) {
      for (var i = 0; this._state === PENDING && i < input.length; i++) {
        this._eachEntry(input[i], i);
      }
    };

    Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
      var c = this._instanceConstructor;
      var resolve$$1 = c.resolve;

      if (resolve$$1 === resolve$1) {
        var _then = getThen(entry);

        if (_then === then && entry._state !== PENDING) {
          this._settledAt(entry._state, i, entry._result);
        } else if (typeof _then !== 'function') {
          this._remaining--;
          this._result[i] = entry;
        } else if (c === Promise$1) {
          var promise = new c(noop);
          handleMaybeThenable(promise, entry, _then);
          this._willSettleAt(promise, i);
        } else {
          this._willSettleAt(new c(function (resolve$$1) {
            return resolve$$1(entry);
          }), i);
        }
      } else {
        this._willSettleAt(resolve$$1(entry), i);
      }
    };

    Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
      var promise = this.promise;

      if (promise._state === PENDING) {
        this._remaining--;

        if (state === REJECTED) {
          reject(promise, value);
        } else {
          this._result[i] = value;
        }
      }

      if (this._remaining === 0) {
        fulfill(promise, this._result);
      }
    };

    Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
      var enumerator = this;

      subscribe(promise, undefined, function (value) {
        return enumerator._settledAt(FULFILLED, i, value);
      }, function (reason) {
        return enumerator._settledAt(REJECTED, i, reason);
      });
    };

    return Enumerator;
  }();

  /**
    `Promise.all` accepts an array of promises, and returns a new promise which
    is fulfilled with an array of fulfillment values for the passed promises, or
    rejected with the reason of the first passed promise to be rejected. It casts all
    elements of the passed iterable to promises as it runs this algorithm.
  
    Example:
  
    ```javascript
    let promise1 = resolve(1);
    let promise2 = resolve(2);
    let promise3 = resolve(3);
    let promises = [ promise1, promise2, promise3 ];
  
    Promise.all(promises).then(function(array){
      // The array here would be [ 1, 2, 3 ];
    });
    ```
  
    If any of the `promises` given to `all` are rejected, the first promise
    that is rejected will be given as an argument to the returned promises's
    rejection handler. For example:
  
    Example:
  
    ```javascript
    let promise1 = resolve(1);
    let promise2 = reject(new Error("2"));
    let promise3 = reject(new Error("3"));
    let promises = [ promise1, promise2, promise3 ];
  
    Promise.all(promises).then(function(array){
      // Code here never runs because there are rejected promises!
    }, function(error) {
      // error.message === "2"
    });
    ```
  
    @method all
    @static
    @param {Array} entries array of promises
    @param {String} label optional string for labeling the promise.
    Useful for tooling.
    @return {Promise} promise that is fulfilled when all `promises` have been
    fulfilled, or rejected if any of them become rejected.
    @static
  */
  function all(entries) {
    return new Enumerator(this, entries).promise;
  }

  /**
    `Promise.race` returns a new promise which is settled in the same way as the
    first passed promise to settle.
  
    Example:
  
    ```javascript
    let promise1 = new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve('promise 1');
      }, 200);
    });
  
    let promise2 = new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve('promise 2');
      }, 100);
    });
  
    Promise.race([promise1, promise2]).then(function(result){
      // result === 'promise 2' because it was resolved before promise1
      // was resolved.
    });
    ```
  
    `Promise.race` is deterministic in that only the state of the first
    settled promise matters. For example, even if other promises given to the
    `promises` array argument are resolved, but the first settled promise has
    become rejected before the other promises became fulfilled, the returned
    promise will become rejected:
  
    ```javascript
    let promise1 = new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve('promise 1');
      }, 200);
    });
  
    let promise2 = new Promise(function(resolve, reject){
      setTimeout(function(){
        reject(new Error('promise 2'));
      }, 100);
    });
  
    Promise.race([promise1, promise2]).then(function(result){
      // Code here never runs
    }, function(reason){
      // reason.message === 'promise 2' because promise 2 became rejected before
      // promise 1 became fulfilled
    });
    ```
  
    An example real-world use case is implementing timeouts:
  
    ```javascript
    Promise.race([ajax('foo.json'), timeout(5000)])
    ```
  
    @method race
    @static
    @param {Array} promises array of promises to observe
    Useful for tooling.
    @return {Promise} a promise which settles in the same way as the first passed
    promise to settle.
  */
  function race(entries) {
    /*jshint validthis:true */
    var Constructor = this;

    if (!isArray(entries)) {
      return new Constructor(function (_, reject) {
        return reject(new TypeError('You must pass an array to race.'));
      });
    } else {
      return new Constructor(function (resolve, reject) {
        var length = entries.length;
        for (var i = 0; i < length; i++) {
          Constructor.resolve(entries[i]).then(resolve, reject);
        }
      });
    }
  }

  /**
    `Promise.reject` returns a promise rejected with the passed `reason`.
    It is shorthand for the following:
  
    ```javascript
    let promise = new Promise(function(resolve, reject){
      reject(new Error('WHOOPS'));
    });
  
    promise.then(function(value){
      // Code here doesn't run because the promise is rejected!
    }, function(reason){
      // reason.message === 'WHOOPS'
    });
    ```
  
    Instead of writing the above, your code now simply becomes the following:
  
    ```javascript
    let promise = Promise.reject(new Error('WHOOPS'));
  
    promise.then(function(value){
      // Code here doesn't run because the promise is rejected!
    }, function(reason){
      // reason.message === 'WHOOPS'
    });
    ```
  
    @method reject
    @static
    @param {Any} reason value that the returned promise will be rejected with.
    Useful for tooling.
    @return {Promise} a promise rejected with the given `reason`.
  */
  function reject$1(reason) {
    /*jshint validthis:true */
    var Constructor = this;
    var promise = new Constructor(noop);
    reject(promise, reason);
    return promise;
  }

  function needsResolver() {
    throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
  }

  function needsNew() {
    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
  }

  /**
    Promise objects represent the eventual result of an asynchronous operation. The
    primary way of interacting with a promise is through its `then` method, which
    registers callbacks to receive either a promise's eventual value or the reason
    why the promise cannot be fulfilled.
  
    Terminology
    -----------
  
    - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
    - `thenable` is an object or function that defines a `then` method.
    - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
    - `exception` is a value that is thrown using the throw statement.
    - `reason` is a value that indicates why a promise was rejected.
    - `settled` the final resting state of a promise, fulfilled or rejected.
  
    A promise can be in one of three states: pending, fulfilled, or rejected.
  
    Promises that are fulfilled have a fulfillment value and are in the fulfilled
    state.  Promises that are rejected have a rejection reason and are in the
    rejected state.  A fulfillment value is never a thenable.
  
    Promises can also be said to *resolve* a value.  If this value is also a
    promise, then the original promise's settled state will match the value's
    settled state.  So a promise that *resolves* a promise that rejects will
    itself reject, and a promise that *resolves* a promise that fulfills will
    itself fulfill.
  
  
    Basic Usage:
    ------------
  
    ```js
    let promise = new Promise(function(resolve, reject) {
      // on success
      resolve(value);
  
      // on failure
      reject(reason);
    });
  
    promise.then(function(value) {
      // on fulfillment
    }, function(reason) {
      // on rejection
    });
    ```
  
    Advanced Usage:
    ---------------
  
    Promises shine when abstracting away asynchronous interactions such as
    `XMLHttpRequest`s.
  
    ```js
    function getJSON(url) {
      return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();
  
        xhr.open('GET', url);
        xhr.onreadystatechange = handler;
        xhr.responseType = 'json';
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.send();
  
        function handler() {
          if (this.readyState === this.DONE) {
            if (this.status === 200) {
              resolve(this.response);
            } else {
              reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
            }
          }
        };
      });
    }
  
    getJSON('/posts.json').then(function(json) {
      // on fulfillment
    }, function(reason) {
      // on rejection
    });
    ```
  
    Unlike callbacks, promises are great composable primitives.
  
    ```js
    Promise.all([
      getJSON('/posts'),
      getJSON('/comments')
    ]).then(function(values){
      values[0] // => postsJSON
      values[1] // => commentsJSON
  
      return values;
    });
    ```
  
    @class Promise
    @param {Function} resolver
    Useful for tooling.
    @constructor
  */

  var Promise$1 = function () {
    function Promise(resolver) {
      this[PROMISE_ID] = nextId();
      this._result = this._state = undefined;
      this._subscribers = [];

      if (noop !== resolver) {
        typeof resolver !== 'function' && needsResolver();
        this instanceof Promise ? initializePromise(this, resolver) : needsNew();
      }
    }

    /**
    The primary way of interacting with a promise is through its `then` method,
    which registers callbacks to receive either a promise's eventual value or the
    reason why the promise cannot be fulfilled.
     ```js
    findUser().then(function(user){
      // user is available
    }, function(reason){
      // user is unavailable, and you are given the reason why
    });
    ```
     Chaining
    --------
     The return value of `then` is itself a promise.  This second, 'downstream'
    promise is resolved with the return value of the first promise's fulfillment
    or rejection handler, or rejected if the handler throws an exception.
     ```js
    findUser().then(function (user) {
      return user.name;
    }, function (reason) {
      return 'default name';
    }).then(function (userName) {
      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
      // will be `'default name'`
    });
     findUser().then(function (user) {
      throw new Error('Found user, but still unhappy');
    }, function (reason) {
      throw new Error('`findUser` rejected and we're unhappy');
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
    });
    ```
    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
     ```js
    findUser().then(function (user) {
      throw new PedagogicalException('Upstream error');
    }).then(function (value) {
      // never reached
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // The `PedgagocialException` is propagated all the way down to here
    });
    ```
     Assimilation
    ------------
     Sometimes the value you want to propagate to a downstream promise can only be
    retrieved asynchronously. This can be achieved by returning a promise in the
    fulfillment or rejection handler. The downstream promise will then be pending
    until the returned promise is settled. This is called *assimilation*.
     ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // The user's comments are now available
    });
    ```
     If the assimliated promise rejects, then the downstream promise will also reject.
     ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // If `findCommentsByAuthor` fulfills, we'll have the value here
    }, function (reason) {
      // If `findCommentsByAuthor` rejects, we'll have the reason here
    });
    ```
     Simple Example
    --------------
     Synchronous Example
     ```javascript
    let result;
     try {
      result = findResult();
      // success
    } catch(reason) {
      // failure
    }
    ```
     Errback Example
     ```js
    findResult(function(result, err){
      if (err) {
        // failure
      } else {
        // success
      }
    });
    ```
     Promise Example;
     ```javascript
    findResult().then(function(result){
      // success
    }, function(reason){
      // failure
    });
    ```
     Advanced Example
    --------------
     Synchronous Example
     ```javascript
    let author, books;
     try {
      author = findAuthor();
      books  = findBooksByAuthor(author);
      // success
    } catch(reason) {
      // failure
    }
    ```
     Errback Example
     ```js
     function foundBooks(books) {
     }
     function failure(reason) {
     }
     findAuthor(function(author, err){
      if (err) {
        failure(err);
        // failure
      } else {
        try {
          findBoooksByAuthor(author, function(books, err) {
            if (err) {
              failure(err);
            } else {
              try {
                foundBooks(books);
              } catch(reason) {
                failure(reason);
              }
            }
          });
        } catch(error) {
          failure(err);
        }
        // success
      }
    });
    ```
     Promise Example;
     ```javascript
    findAuthor().
      then(findBooksByAuthor).
      then(function(books){
        // found books
    }).catch(function(reason){
      // something went wrong
    });
    ```
     @method then
    @param {Function} onFulfilled
    @param {Function} onRejected
    Useful for tooling.
    @return {Promise}
    */

    /**
    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
    as the catch block of a try/catch statement.
    ```js
    function findAuthor(){
    throw new Error('couldn't find that author');
    }
    // synchronous
    try {
    findAuthor();
    } catch(reason) {
    // something went wrong
    }
    // async with promises
    findAuthor().catch(function(reason){
    // something went wrong
    });
    ```
    @method catch
    @param {Function} onRejection
    Useful for tooling.
    @return {Promise}
    */

    Promise.prototype.catch = function _catch(onRejection) {
      return this.then(null, onRejection);
    };

    /**
      `finally` will be invoked regardless of the promise's fate just as native
      try/catch/finally behaves
    
      Synchronous example:
    
      ```js
      findAuthor() {
        if (Math.random() > 0.5) {
          throw new Error();
        }
        return new Author();
      }
    
      try {
        return findAuthor(); // succeed or fail
      } catch(error) {
        return findOtherAuther();
      } finally {
        // always runs
        // doesn't affect the return value
      }
      ```
    
      Asynchronous example:
    
      ```js
      findAuthor().catch(function(reason){
        return findOtherAuther();
      }).finally(function(){
        // author was either found, or not
      });
      ```
    
      @method finally
      @param {Function} callback
      @return {Promise}
    */

    Promise.prototype.finally = function _finally(callback) {
      var promise = this;
      var constructor = promise.constructor;

      return promise.then(function (value) {
        return constructor.resolve(callback()).then(function () {
          return value;
        });
      }, function (reason) {
        return constructor.resolve(callback()).then(function () {
          throw reason;
        });
      });
    };

    return Promise;
  }();

  Promise$1.prototype.then = then;
  Promise$1.all = all;
  Promise$1.race = race;
  Promise$1.resolve = resolve$1;
  Promise$1.reject = reject$1;
  Promise$1._setScheduler = setScheduler;
  Promise$1._setAsap = setAsap;
  Promise$1._asap = asap;

  /*global self*/
  function polyfill() {
    var local = void 0;

    if (typeof global !== 'undefined') {
      local = global;
    } else if (typeof self !== 'undefined') {
      local = self;
    } else {
      try {
        local = Function('return this')();
      } catch (e) {
        throw new Error('polyfill failed because global object is unavailable in this environment');
      }
    }

    var P = local.Promise;

    if (P) {
      var promiseToString = null;
      try {
        promiseToString = Object.prototype.toString.call(P.resolve());
      } catch (e) {
        // silently ignored
      }

      if (promiseToString === '[object Promise]' && !P.cast) {
        return;
      }
    }

    local.Promise = Promise$1;
  }

  // Strange compat..
  Promise$1.polyfill = polyfill;
  Promise$1.Promise = Promise$1;

  return Promise$1;
});

//# sourceMappingURL=es6-promise.map

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ApmBase = function () {
  function ApmBase(serviceFactory, disable) {
    _classCallCheck(this, ApmBase);

    this._disable = disable;
    this.serviceFactory = serviceFactory;
    this._initialized = false;
  }

  _createClass(ApmBase, [{
    key: 'init',
    value: function init(config) {
      if (this.isEnabled() && !this._initialized) {
        this._initialized = true;
        var configService = this.serviceFactory.getService('ConfigService');
        configService.setConfig({
          agentName: 'js-base',
          agentVersion: '1.0.0'
        });
        configService.setConfig(config);
        this.serviceFactory.init();
        var errorLogging = this.serviceFactory.getService('ErrorLogging');
        errorLogging.registerGlobalEventListener();

        var performanceMonitoring = this.serviceFactory.getService('PerformanceMonitoring');
        performanceMonitoring.init();

        if (configService.get('sendPageLoadTransaction')) {
          this._sendPageLoadMetrics();
        }
      }
      return this;
    }
  }, {
    key: '_sendPageLoadMetrics',
    value: function _sendPageLoadMetrics() {
      var transactionService = this.serviceFactory.getService('TransactionService');
      var configService = this.serviceFactory.getService('ConfigService');

      var tr = transactionService.startTransaction(configService.get('pageLoadTransactionName'), 'page-load');
      var sendPageLoadMetrics = function sendPageLoadMetrics() {
        // to make sure PerformanceTiming.loadEventEnd has a value
        setTimeout(function () {
          if (tr) {
            tr.detectFinish();
          }
        });
      };

      if (document.readyState === 'complete') {
        sendPageLoadMetrics();
      } else {
        window.addEventListener('load', sendPageLoadMetrics);
      }
    }
  }, {
    key: 'isEnabled',
    value: function isEnabled() {
      return !this._disable;
    }
  }, {
    key: 'config',
    value: function config(_config) {
      var configService = this.serviceFactory.getService('ConfigService');
      configService.setConfig(_config);
    }
  }, {
    key: 'setUserContext',
    value: function setUserContext(userContext) {
      var configService = this.serviceFactory.getService('ConfigService');
      configService.setUserContext(userContext);
    }
  }, {
    key: 'setCustomContext',
    value: function setCustomContext(customContext) {
      var configService = this.serviceFactory.getService('ConfigService');
      configService.setCustomContext(customContext);
    }
  }, {
    key: 'setTags',
    value: function setTags(tags) {
      var configService = this.serviceFactory.getService('ConfigService');
      configService.setTags(tags);
    }

    // Should call this method before 'load' event on window is fired

  }, {
    key: 'setInitialPageLoadName',
    value: function setInitialPageLoadName(name) {
      if (this.isEnabled()) {
        var configService = this.serviceFactory.getService('ConfigService');
        configService.setConfig({
          pageLoadTransactionName: name
        });
      }
    }
  }, {
    key: 'startTransaction',
    value: function startTransaction(name, type) {
      if (this.isEnabled()) {
        var transactionService = this.serviceFactory.getService('TransactionService');
        return transactionService.startTransaction(name, type);
      }
    }
  }, {
    key: 'startSpan',
    value: function startSpan(name, type) {
      if (this.isEnabled()) {
        var transactionService = this.serviceFactory.getService('TransactionService');
        return transactionService.startSpan(name, type);
      }
    }
  }, {
    key: 'getCurrentTransaction',
    value: function getCurrentTransaction() {
      if (this.isEnabled()) {
        var transactionService = this.serviceFactory.getService('TransactionService');
        return transactionService.getCurrentTransaction();
      }
    }
  }, {
    key: 'getTransactionService',
    value: function getTransactionService() {
      if (this.isEnabled()) {
        var transactionService = this.serviceFactory.getService('TransactionService');
        return transactionService;
      }
    }
  }, {
    key: 'captureError',
    value: function captureError(error) {
      if (this.isEnabled()) {
        var errorLogging = this.serviceFactory.getService('ErrorLogging');
        return errorLogging.logError(error);
      }
    }
  }, {
    key: 'addFilter',
    value: function addFilter(fn) {
      var configService = this.serviceFactory.getService('ConfigService');
      configService.addFilter(fn);
    }
  }]);

  return ApmBase;
}();

module.exports = ApmBase;

/***/ })
/******/ ]);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(3)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var initElasticApm = __webpack_require__(0).init
// import init as initElasticApm from '../../..'
var createApmBase = __webpack_require__(4)

var active = Math.random() < 1

var elasticApm = createApmBase({
  active: active,
  debug: true,
  serviceName: 'apm-agent-js-base-test-e2e-general-usecase',
  serviceVersion: '0.0.1',
  distributedTracingOrigins: ['http://localhost:8002'],
  pageLoadTraceId: '286ac3ad697892c406528f13c82e0ce1',
  pageLoadSpanId: 'bbd8bcc3be14d814',
  pageLoadSampled: true,
})

elasticApm.setInitialPageLoadName('general-usecase-initial-page-load')

elasticApm.setUserContext({ usertest: 'usertest', id: 'userId', username: 'username', email: 'email' })
elasticApm.setCustomContext({ testContext: 'testContext' })
elasticApm.setTags({ 'testTagKey': 'testTagValue' })

elasticApm.addFilter(function (payload) {
  if (payload.errors) {
    payload.errors.forEach(function (error) {
      error.exception.message = error.exception.message.replace('secret', '[REDACTED]')
    })
  }
  if (payload.transactions) {
    payload.transactions.forEach(function (tr) {
      tr.spans.forEach(function (span) {
        if (span.context && span.context.http && span.context.http.url) {
          var url = new URL(span.context.http.url, window.location.origin)
          if (url.searchParams && url.searchParams.get('token')) {
            url.searchParams.set('token', 'REDACTED')
          }
          span.context.http.url = url.toString()
        }
      })
    })
  }
  // Make sure to return the payload
  return payload
})

function generateError() {
  throw new Error('timeout test error with a secret')
}

setTimeout(function () {
  generateError()
}, 100)

var url = '/test/e2e/common/data.json?test=hamid'
var req = new window.XMLHttpRequest()
req.open('GET', url, false)
req.addEventListener("load", function () {
  console.log('got data!')
});

req.send()


req = new window.XMLHttpRequest()
req.open('POST', 'http://localhost:8002/data', false)
req.addEventListener("load", function () {
  var payload = JSON.parse(req.responseText)
  console.log('distributed tracing data', payload)
  if (typeof payload.traceId !== 'string') {
    throw new Error('Wrong distributed tracing payload: ' + req.responseText)
  }
});

req.send()

generateError.tmp = 'tmp'

var appEl = document.getElementById('app')
var testEl = document.createElement('h2')
testEl.setAttribute('id', 'test-element')
testEl.innerHTML = 'Passed'
appEl.appendChild(testEl)


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var initElasticApm = __webpack_require__(0).init
var apmBase = __webpack_require__(0).apmBase
var ApmServerMock = __webpack_require__(5)
function createApmBase(config) {
  // config.serverUrl = 'http://localhost:8200'
  var envConfig = {
  "agentConfig": {
    "serverUrl": "http://localhost:8200",
    "serviceName": "apm-agent-js-base/test"
  },
  "useMocks": false,
  "mockApmServer": false,
  "serverUrl": "http://localhost:8200",
  "env": {}
}
  if (!window.globalConfigs) {
    window.globalConfigs = envConfig
  }
  var gc = window.globalConfigs
  console.log(gc)
  var apmServer
  apmServer = apmBase.serviceFactory.getService('ApmServer')
  if (gc.serverUrl) {
    config.serverUrl = gc.serverUrl
  }
  var serverMock = new ApmServerMock(apmServer, gc.useMocks)
  apmBase.serviceFactory.registerServiceInstance('ApmServer', serverMock)

  elasticApm = initElasticApm(config)
  return elasticApm
}

module.exports = createApmBase


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var Subscription = __webpack_require__(6)
class ApmServerMock {
  constructor(apmServer, useMocks) {
    var subscription = this.subscription = new Subscription()
    var _apmServer = this._apmServer = apmServer
    var calls = this.calls = {}

    function captureCall(methodName, call) {
      if (calls[methodName]) {
        calls[methodName].push(call)
      } else {
        calls[methodName] = [call]
      }
      subscription.applyAll(this, [call])
    }
    function applyMock(methodName, captureFn, mockFn) {
      var args = Array.prototype.slice.call(arguments)
      args.splice(0, 3)
      var result
      var mocked = false
      if (!mockFn) {
        result = _apmServer[methodName].apply(_apmServer, args)
      } else {
        result = mockFn.apply(this, args)
        mocked = true
      }
      var call = { args: args, mocked: mocked }
      captureFn(methodName, call)
      return result
    }

    function spyOn(service, methodName, mockFn) {
      var _orig = service[methodName]
      return service[methodName] = function () {
        var args = Array.prototype.slice.call(arguments).map((a) => JSON.parse(JSON.stringify(a)))
        var call = { args: args, mocked: false }
        if (mockFn) {
          call.mocked = true
          call.returnValue = mockFn.apply(service, arguments)
          captureCall(methodName, call)
          return call.returnValue
        } else {
          call.returnValue = _orig.apply(service, arguments)
          captureCall(methodName, call)
          return call.returnValue
        }
      }
    }
    spyOn(_apmServer, 'sendErrors', useMocks ? function () { return Promise.resolve(); } : undefined)

    spyOn(_apmServer, 'sendTransactions', useMocks ? function () { return Promise.resolve(); } : undefined)

    this.addError = _apmServer.addError.bind(_apmServer)
    this.addTransaction = _apmServer.addTransaction.bind(_apmServer)
  }
  init() { }
}

module.exports = ApmServerMock


/***/ }),
/* 6 */
/***/ (function(module, exports) {

function Subscription () {
  this.subscriptions = []
}

Subscription.prototype.subscribe = function (fn) {
  var self = this
  this.subscriptions.push(fn)

  return function () {
    var index = self.subscriptions.indexOf(fn)
    if (index > -1) {
      self.subscriptions.splice(index, 1)
    }
  }
}

Subscription.prototype.applyAll = function (applyTo, applyWith) {
  this.subscriptions.forEach(function (fn) {
    try {
      fn.apply(applyTo, applyWith)
    } catch (error) {
      console.log(error, error.stack)
    }
  }, this)
}

module.exports = Subscription


/***/ })
/******/ ]);
//# sourceMappingURL=app.e2e-bundle.js.map