import * as React from 'react'
import { TrelloListProps } from '../interface/props'
import TrelloCard from './TrelloCard'
import TrelloActionButton from './TrelloActionButton'
import { Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  margin: 8px;
  height: 100%;
`

const TrelloList: React.FC<TrelloListProps> = ({ title, cards, listID }) => {
  console.log(cards)
  return (
    <Droppable droppableId={String(listID)}>
      {provided => (
        <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
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
        </ListContainer>
      )}
    </Droppable>
  )
}

export default TrelloList
