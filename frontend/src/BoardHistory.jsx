import React, { Component } from 'react'
import { List, Container, Header, Divider, Button } from 'semantic-ui-react'
import { backendClient } from './clients.js'

export default class BoardHistory extends Component {
  state = {
    boardHistory: [],
  }
  handleClick = () => {
    backendClient.getBoardHistory().then(history => { this.setState({ boardHistory: history }) })
  }

  render() {
    return (
        <Container text>
            <Header> This task tracks card movement history on the Pizza Project board</Header>
            <Divider/>
            <Button primary onClick={this.handleClick}>Get updated list</Button>
            {this.state.boardHistory && this.state.boardHistory.map(entry => (
              <List.Item key={entry}>{entry}</List.Item>
            ))}
        </Container>
    )
  }
}