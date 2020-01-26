export interface TrelloListProps {
  title: string
  cards: [{ id: number; text: string }]
}

export interface TrelloCardProps {
  text: string
}
