import React, { Component } from 'react'
import { List, Container, Header, Segment } from 'semantic-ui-react'


export default class BoardLists extends Component {
  render() {
    return (
        <Container text>
            <Header> This task uses the Trello API to fetch the names of the lists on the Pizza Project Board</Header>
            <Segment raised>
              <List bulleted>
                  <List.Item>To do</List.Item>
                  <List.Item>Doing</List.Item>
              </List>
            </Segment>
        </Container>
    )
  }
}