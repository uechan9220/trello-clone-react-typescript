export interface TrelloListProps {
  listID: number
  key: number
  title: string
  cards: [{ id: number; text: string }]
}

export interface TrelloCardProps {
  text: string
}
