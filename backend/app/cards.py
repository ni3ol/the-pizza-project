card_history = []


def update_card(card_name, list_before, list_after):
    return f'Card "{card_name}" moved from {list_before} to {list_after}'


def add_card_to_history(card):
    card_history.append(card)


def get_card_history():
    return card_history

