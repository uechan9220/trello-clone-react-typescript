import * as React from 'react'
import { TrelloListProps } from '../interface/props'
import TrelloCard from './TrelloCard'

const TrelloList: React.FC<TrelloListProps> = ({ title, cards }) => {
  return (
    <div style={styles.container}>
      <h4>{title}</h4>
      {cards.map(card => (
        <TrelloCard text={card.text} />
      ))}
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#dfe3e6',
    borderRadius: 3,
    width: 300,
    padding: 8,
    margin: 8
  }
}

export default TrelloList
