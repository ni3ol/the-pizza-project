import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000';
export class BackendClient {

    getBoardLists = () => {
        const boardListURL = `${API_URL}/api/boardlists`;
        return axios.get(boardListURL).then(response => response.data)
    }

    createCard = (card) => {
        return axios.post(`${API_URL}/api/cards`, { card })
    }

    getBoardHistory = () => {
        return axios.get(`${API_URL}/cards`).then(response => response.data)
    }
}