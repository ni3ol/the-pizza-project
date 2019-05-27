import React from 'react';
import { Header } from 'semantic-ui-react';
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
        <Header>The Pizza Project</Header>
        <NavigationBar boardLists={this.state.boardLists} />
      </div>
    );
  }
}

export default App;
