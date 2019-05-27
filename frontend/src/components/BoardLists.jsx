import React, { Component } from 'react'
import {Container, Header, Divider, Card } from 'semantic-ui-react'
export default class BoardLists extends Component {
  render() {
    const lists = this.props.lists;
    const cards = []
    
    lists && lists.map(list => (
      cards.push({header: list})
    ))
    console.log({lists})
    return (
      <Container>
        <Header textAlign='center'> This task uses the Trello API to fetch the names of the lists on the Pizza Project Board</Header>
        <Divider/>
        <Card.Group centered items={cards} />
      </Container>
    )
  }
}