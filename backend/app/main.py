import os
import requests
from flask import Flask
from flask_cors import CORS
from config import API_CREDENTIALS, TRELLO_API_BASE_URL

app = Flask(__name__)
CORS(app)

import routes


TOKEN = API_CREDENTIALS['token']


def create_webhook(NGROK_URL):
    payload = {
        'key': API_CREDENTIALS['key'],
        'callbackURL': NGROK_URL + '/webhooks/cards',
        'idModel': '5ce2ae27e2de5319951360e0',
        'description': 'Webhook to watch board movement'
    }
    requests.post(
        f'{TRELLO_API_BASE_URL}/tokens/{TOKEN}/webhooks/', params=payload
    )
    return "Webhook created", 200
