import requests
from flask import render_template, request, jsonify
from main import app
from config import (
    API_CREDENTIALS,
    TRELLO_API_BASE_URL,
    PIZZA_PROJECT_BOARD_ID,
    TO_DO_LIST_ID
)


@app.route('/api/boardlists')
def get_lists():
    payload = {**API_CREDENTIALS}
    response = requests.get(
        f'{TRELLO_API_BASE_URL}/boards/{PIZZA_PROJECT_BOARD_ID}/lists',
        params=payload)
    board_lists = response.json()
    list_names = [board_list['name'] for board_list in board_lists]
    flask_response = jsonify(list_names)
    return flask_response


@app.route('/api/cards', methods=['POST'])
def post_card():
    if request.method == 'POST':
        card = request.get_json()['card']
        print(card)
        payload = {'name': card,
                   'idList': TO_DO_LIST_ID, **API_CREDENTIALS}
        requests.post(
            f'{TRELLO_API_BASE_URL}/cards', params=payload
        )
        return 'Card posted in TODO list'


@app.route('/webhooks/cards', methods=['HEAD', 'POST'])
def on_card_update():
    print(request.get_json())
    response = request.get_json()
    if response['action']['type'] == 'updateCard':
        entities = response['action']['display']['entities']
        card_name = entities['card']['text']
        list_before = entities['listBefore']['text']
        list_after = entities['listAfter']['text']
        print(f'Card "{card_name}" moved from {list_before} to {list_after}')
    return 'Ok', 200
