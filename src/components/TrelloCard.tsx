import * as React from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import { TrelloCardProps } from '../interface/props'

const TrelloCard: React.FC<TrelloCardProps> = ({ text }) => {
  return (
    <Card>
      <Typography gutterBottom>{text}</Typography>
    </Card>
  )
}

export default TrelloCard
