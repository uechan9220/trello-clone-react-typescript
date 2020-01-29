import * as React from 'react'
import { TrelloListProps } from '../interface/props'
import TrelloCard from './TrelloCard'
import TrelloActionButton from './TrelloActionButton'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { Provider } from 'react-redux'

const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  margin: 8px;
  height: 100%;
`

const TrelloList: React.FC<TrelloListProps> = ({
  title,
  cards,
  listID,
  index
}) => {
  console.log(cards)
  return (
    <Draggable draggableId={String(listID)} index={index}>
      {provided => (
        <ListContainer
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
        >
          <Droppable droppableId={String(listID)}>
            {provided => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <h4>{title}</h4>
                {cards.map((card, index) => (
                  <TrelloCard
                    key={card.id}
                    index={index}
                    text={card.text}
                    id={card.id}
                  />
                ))}
                <TrelloActionButton listID={listID} cardID={cards.length} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </ListContainer>
      )}
    </Draggable>
  )
}

export default TrelloList
