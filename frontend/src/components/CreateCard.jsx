import React, { Component } from 'react'
import { Form, Container, Segment, Header, Button } from 'semantic-ui-react'
import { backendClient } from '../client/clients'

export default class CreateCard extends Component {
  constructor(props) {
    super(props);
    this.state = { card: '', submitted: false };
  }

  handleChange = (event) => {
    this.setState({ card: event.target.value });
  }

  handleSubmit = (event) => {
    const card = this.state.card;
    alert('The following card was added TODO: ' + card);
    event.preventDefault();
    backendClient.createCard(card).then(() => {this.setState({submitted: true})})
  }

  render() {
    return (
      <Container>
        <Header> This task uses the Trello API to post a card to the to do list on the Pizza Project Board</Header>
        <Segment raised>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Card</label>
              <input placeholder='Finish work' value={this.state.card} onChange={this.handleChange} />
            </Form.Field>
            <Button primary type='submit'>Submit</Button>
          </Form>
          {this.state.submitted && (<div>Card submitted successfully.</div>)}
        </Segment>
      </Container>
    )
  }
}