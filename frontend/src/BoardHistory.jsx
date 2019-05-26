import React, { Component } from 'react'
import axios from 'axios'
import { List, Container, Header, Segment, Button } from 'semantic-ui-react'

const API_URL = 'http://127.0.0.1:5000'

const getBoardHistory = () => {
  return axios.get(`${API_URL}/cards`).then(response => response.data)
}
export default class BoardHistory extends Component {
  state = {
    boardHistory: [],
  }
  handleClick = () => {
    getBoardHistory().then(history => { this.setState({ boardHistory: history }) })
  }

  render() {
    return (
        <Container text>
            <Header> This task tracks card movement history on the Pizza Project board</Header>
            <Button onClick={this.handleClick}>Get updated list</Button>
            <Segment raised>
            {this.state.boardHistory && this.state.boardHistory.map(entry => (
              <List.Item key={entry}>{entry}</List.Item>
            ))}
            </Segment>
        </Container>
    )
  }
}