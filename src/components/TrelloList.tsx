import * as React from 'react'
import { TrelloListProps } from '../interface/props'
import TrelloCard from './TrelloCard'

const TrelloList: React.FC<TrelloListProps> = ({ title }) => {
  return (
    <div style={styles.container}>
      <h4>{title}</h4>
      <TrelloCard />
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#ccc',
    borderRadius: 3,
    width: 300,
    padding: 8
  }
}

export default TrelloList
