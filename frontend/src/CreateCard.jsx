import React, { Component } from 'react'
import { Input, Container, Segment, Header } from 'semantic-ui-react'


export default class CreateCard extends Component {
  render() {
    return (
        <Container>
            <Header> This task uses the Trello API to post a card to the to do list on the Pizza Project Board</Header>
            <Segment raised>
              <Input action='Submit' placeholder='Card' />
            </Segment>
        </Container>
    )
  }
}