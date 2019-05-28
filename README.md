## The Pizza Project

The Pizza Project is an assignment that integrates with the Trello API to fetch list names, post cards onto a list and receive alerts via a webhook when movement on the board occurs.

### Task A

Fetches the names of the lists on the Pizza Project board and displays them in the browser.

### Task B

Posts a new card onto the TODO list. This is done using a form on the browser.

### Task C

A webhook is created that alerts the web application for any change on the board. We filter events to only display when cards move between lists. I used NGROK to complete this task.

### Task D

I did this project over a few days in bits and pieces. I started off doing the backend in Python and Flask where I connected to Trello and completed the tasks using REST and a simple template frontend.
When the functionality of the tasks were working I added a react frontend by first building a simple website that used dummy data to display the results of the tasks. I used Semantic UI to build components. I then wired up the front and backend using axios and added some styling to the frontend to make it look pretty :)
Finally, I tried to dockerise it, but wasn't sure how to do so with NGROK. If you docker-compose up now, you get the front end and first two tasks working, but not the webhook.

If I had more time I would definitely dockerise it completely with NGROK. I would also not include my api keys and token in my code, and I would have the data from the webhook come through as a continuous stream on the frontend instead of clicking a button to do a GET request to the backend.

## Running the Project

## Locally

- First you need to download NGROK from `https://ngrok.com/download`. The steps are simple.
- Start NGROK in terminal: `./ngrok http 5000`
- export your forwarding URL (eg. `http://92832de0.ngrok.io`): `export NGROK_URL=[forwarding_url]`
- Activate pyvenv: `pyenv activate pizza_project` and then activate: `source [path_to_.pyenv/versions/pizza_project/bin/activate]`
- In backend: `pip install -r requirements.txt`
- Create the webhook: `python -i app/main.py` and call the function `create_webhook()`
- In frontend: `npm install`
- Start up the project: `npm start` (frontend) `flask run` (backend)
- Navigate to `http://localhost:3000`.
- Make changes on the board to see webhook requests coming through in terminal or by clicking the button on the frontend.

### Docker

In the parent directory you can run `docker-compose-up` and navigate to `http://localhost:3000` to view my frontend and working Task A and Task B. Task C unfortunately does not work with docker.
