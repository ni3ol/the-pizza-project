import React from 'react';
import { Header, Segment, Icon } from 'semantic-ui-react';
import NavigationBar from './components/NavigationBar.jsx'
import { backendClient } from './client/clients.js'

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
          <Header as='h2' icon textAlign='center'>
            <Icon name='trello' circular />
            <Header.Content>The Pizza Project</Header.Content>
          </Header>
        </Segment>
        <NavigationBar boardLists={this.state.boardLists} />
      </div>
    );
  }
}

export default App;
