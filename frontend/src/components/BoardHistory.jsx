import React, { Component } from 'react'
import { List, Container, Header, Divider, Button, Icon, Segment } from 'semantic-ui-react'
import { backendClient } from '../client/clients.js'

export default class BoardHistory extends Component {
  state = {
    boardHistory: [],
  }
  handleClick = () => {
    backendClient.getBoardHistory().then(history => { this.setState({ boardHistory: history }) })
  }

  render() {
    return (
        <Container>
            <Header textAlign='center'> This task tracks card movement history on the Pizza Project board</Header>
            <Divider/>
            <Button fluid primary onClick={this.handleClick}>Get updated list</Button>
            {this.state.boardHistory && this.state.boardHistory.map(entry => (
              <Segment text>
                <Icon circular name='paper plane' />
                <List.Item key={entry}>{entry}</List.Item>
              </Segment>
            ))}
        </Container>
    )
  }
}