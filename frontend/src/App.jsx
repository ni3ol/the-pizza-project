import React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import NavigationBar from './NavigationBar.jsx'
import { backendClient } from './clients.js'



class App extends React.Component {
  state = {
    boardLists: [],
    boardHistory: []
  }

  componentDidMount() {
    backendClient.getBoardLists().then(lists => { this.setState({ boardLists: lists }) })
  }

  render() {
    return (
      <div>
        <Segment inverted color='blue' padded='very'>
          <Header size='huge' color='black' textAlign='center'>The Pizza Project</Header>
        </Segment>
        <NavigationBar boardLists={this.state.boardLists} />
      </div>
    );
  }
}

export default App;
