export interface TrelloListProps {
  key: number
  title: string
  cards: [{ id: number; text: string }]
}

export interface TrelloCardProps {
  text: string
}
