import React, { Component } from 'react'
import { List, Container, Header, Segment } from 'semantic-ui-react'


export default class BoardHistory extends Component {
  render() {
    return (
        <Container text>
            <Header> This task tracks all card movements on the Pizza Project board</Header>
            <Segment raised>
              <List bulleted>
                  <List.Item>Card "Study" moved from to do to doing</List.Item>
                  <List.Item>Card "Lunch" moved from to do to doing</List.Item>
              </List>
            </Segment>
        </Container>
    )
  }
}