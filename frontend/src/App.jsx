import React from 'react';
import axios from 'axios';
import './App.css';
import { Header } from 'semantic-ui-react';
import NavigationBar from './NavigationBar.jsx'

const API_URL = 'http://127.0.0.1:5000'

const getBoardLists = () => {
  const boardListURL = `${API_URL}/api/boardlists`;
  return axios.get(boardListURL).then(response => response.data)
}

class App extends React.Component {
  state = {
    boardLists: [],
    boardHistory: []
  }

  componentDidMount() {
    getBoardLists().then(lists => { this.setState({ boardLists: lists }) })
    
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
