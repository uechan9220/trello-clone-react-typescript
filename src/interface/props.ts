export interface TrelloListProps {
  listID: number
  key: number
  title: string
  cards: [{ id: number; text: string }]
}

export interface TrelloCardProps {
  text: string
  id: number
  index: number
}

export interface TrelloActionsButtonProps{
  list?: boolean
  dispatch: any
  listID?: number
  cardID?: number
}
