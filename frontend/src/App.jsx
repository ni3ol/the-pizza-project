import React from 'react';
import axios from 'axios';
import './App.css';
import { Header } from 'semantic-ui-react';
import NavigationBar from './NavigationBar.jsx'

const API_URL = 'http://127.0.0.1:5000'

class App extends React.Component {
  state = {
    board_lists: [],
    board_history: []
  }

  componentDidMount() {
    const board_lists_url = `${API_URL}/api/boardlists`;
    axios.get(board_lists_url).then(response => response.data)
    .then((data) => {
      this.setState({ board_lists: data })
      console.log(this.state.board_lists)
     })
  }

  render() {
    return (
      <div>
        <Header>The Pizza Project</Header>
        <NavigationBar board_lists={this.state.board_lists}/>
      </div>
    );
  }
}

export default App;
