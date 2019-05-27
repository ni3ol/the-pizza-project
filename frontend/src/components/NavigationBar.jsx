import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import BoardLists from './BoardLists.jsx'
import CreateCard from './CreateCard.jsx'
import BoardHistory from './BoardHistory.jsx'

export default class NavigationBar extends Component {
  state = { activeItem: 'Board Lists' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  renderContentsForActiveItem = (activeItem) => {
    if (activeItem === 'Board Lists') {
      console.log(this.props.board_lists)
      return <BoardLists lists={this.props.boardLists}/>
    }
    if (activeItem === 'Create Card') {
      return <CreateCard/>
    }
    if (activeItem === 'Board History') {
      return <BoardHistory/>
    }
  }

  render() {
    const { activeItem } = this.state
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item 
            name='Board Lists'
            active={activeItem === 'Board Lists'} 
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Create Card'
            active={activeItem === 'Create Card'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Board History'
            active={activeItem === 'Board History'}
            onClick={this.handleItemClick}
          />
        </Menu>
        {this.renderContentsForActiveItem(activeItem)}
      </div>
    )
  }
}