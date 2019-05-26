import requests
from flask import Flask, jsonify
from config import API_CREDENTIALS

app = Flask(__name__)

import routes

TOKEN = API_CREDENTIALS['token']

def create_webhook():
    payload = {
        'key': API_CREDENTIALS['key'],
        'callbackURL': 'http://89c9d538.ngrok.io/webhooks/cards',
        'idModel': '5ce2ae27e2de5319951360e0',
        'description': 'Webhook to watch board movement'
    }
    response = requests.post(
        f'{TRELLO_API_BASE_URL}/tokens/{TOKEN}/webhooks/', params=payload
    )
    return response
