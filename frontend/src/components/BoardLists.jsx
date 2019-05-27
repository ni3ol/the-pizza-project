import React, { Component } from 'react'
import { List, Container, Header, Divider } from 'semantic-ui-react'


export default class BoardLists extends Component {
  render() {
    const lists = this.props.lists;
    console.log({lists})
    return (
      <Container text>
        <Header> This task uses the Trello API to fetch the names of the lists on the Pizza Project Board</Header>
        <Divider/>
          <List bulleted>
            {lists && lists.map(list => (
              <List.Item key={list}>{list}</List.Item>
            ))}
          </List>
      </Container>
    )
  }
}