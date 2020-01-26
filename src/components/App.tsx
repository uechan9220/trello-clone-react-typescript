import * as React from 'react'
import TrelloList from './TrelloList'
import { connect } from 'react-redux'

class App extends React.Component<{lists: []}> {
  render() {
    const { lists } = this.props

    return (
      <div>
        <h1>hello</h1>
        {lists.map((list: { title: string; cards: [{ id: number; text: string }] }) => (
          <TrelloList title={list.title} cards={list.cards} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state: { lists: [] }) => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App)
