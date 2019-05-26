import React from 'react';
import axios from 'axios';
import './App.css';
import { Header } from 'semantic-ui-react';
import NavigationBar from './NavigationBar.jsx'

const API_URL = 'http://127.0.0.1:5000'

class App extends React.Component {
  state = {
    boardLists: [],
    boardHistory: []
  }

  componentDidMount() {
    const boardListURL = `${API_URL}/api/boardlists`;
    axios.get(boardListURL).then(response => response.data)
    .then((data) => {
      this.setState({ boardLists: data })
      console.log(this.state.boardLists)
     })
  }

  render() {
    return (
      <div>
        <Header>The Pizza Project</Header>
        <NavigationBar boardLists={this.state.boardLists}/>
      </div>
    );
  }
}

export default App;
