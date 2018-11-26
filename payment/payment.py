import os
import sys
import time
import logging
import uuid
import json
import requests
from flask import Flask
from flask import request
from flask import jsonify
from rabbitmq import Publisher
from elasticapm.contrib.flask import ElasticAPM


app = Flask(__name__)
apm = ElasticAPM(app)

CART = os.getenv('CART_HOST', 'cart')
USER = os.getenv('USER_HOST', 'user')

@app.route('/health', methods=['GET'])
def health():
    return 'OK'

@app.route('/pay/<id>', methods=['POST'])
def pay(id):
    app.logger.info('payment for {}'.format(id))
    cart = request.get_json()
    app.logger.info(cart)

    # dummy call to Paypal, hope they dont object
    req = requests.get('https://paypal.com/')
    app.logger.info('paypal returned {}'.format(req.status_code))

    # Generate order id
    orderid = str(uuid.uuid4())
    queueOrder({ 'orderid': orderid, 'user': id, 'cart': cart })

    # add to history
    req = requests.post('http://{user}:8080/order/{id}'.format(user=USER, id=id),
            data=json.dumps({'orderid': orderid, 'cart': cart}),
            headers={'Content-Type': 'application/json'})
    app.logger.info('order history returned {}'.format(req.status_code))

    # delete cart
    req = requests.delete('http://{cart}:8080/cart/{id}'.format(cart=CART, id=id));
    app.logger.info('cart delete returned {}'.format(req.status_code))

    return jsonify({ 'orderid': orderid })


def queueOrder(order):
    app.logger.info('queue order')

    # For screenshot demo requirements optionally add in a bit of delay
    delay = int(os.getenv('PAYMENT_DELAY_MS', 0))
    time.sleep(delay / 1000)

    headers = {}
    app.logger.info('msg headers {}'.format(headers))

    publisher.publish(order, headers)

# RabbitMQ
publisher = Publisher(app.logger)

if __name__ == "__main__":
    sh = logging.StreamHandler(sys.stdout)
    sh.setLevel(logging.INFO)
    app.logger.addHandler(sh)
    app.logger.setLevel(logging.INFO)
    port = int(os.getenv("SHOP_PAYMENT_PORT", "8080"))
    app.run(host='0.0.0.0', port=port)
