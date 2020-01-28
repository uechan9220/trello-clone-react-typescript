import * as React from 'react'
import TrelloList from './TrelloList'
import { connect } from 'react-redux'
import TrelloActionButton from './TrelloActionButton'
import { DragDropContext } from 'react-beautiful-dnd'
import { sort } from '../actions/listsActions'
import styled from 'styled-components'

const ListContainer = styled.div`
  display: felx;
  flex-direction: row;
`

class App extends React.Component<{ lists: []; dispatch: any }> {
  onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result

    if (!destination) {
      return
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    )
  }

  render() {
    const { lists } = this.props
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div>
          <h1>hello</h1>
          <ListContainer>
            {lists.map(
              (list: {
                id: number
                title: string
                cards: [{ id: number; text: string }]
              }) => (
                <TrelloList
                  listID={list.id}
                  key={list.id}
                  title={list.title}
                  cards={list.cards}
                />
              )
            )}
            <TrelloActionButton list />
          </ListContainer>
        </div>
      </DragDropContext>
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
