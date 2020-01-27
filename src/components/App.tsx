import * as React from 'react'
import TrelloList from './TrelloList'
import { connect } from 'react-redux'
import TrelloActionButton from './TrelloActionButton'

class App extends React.Component<{ lists: [] }> {
  render() {
    const { lists } = this.props

    return (
      <div>
        <h1>hello</h1>
        <div style={styles.listsContainer}>
          {lists.map(
            (list: {
              id: number
              title: string
              cards: [{ id: number; text: string }]
            }) => (
              <TrelloList listID={list.id} key={list.id} title={list.title} cards={list.cards} />
            )
          )}
          <TrelloActionButton list />
        </div>
      </div>
    )
  }
}

const styles = {
  listsContainer: {
    display: 'flex'
  }
}

const mapStateToProps = (state: { lists: [] }) => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App)
