import { CONSTANTS } from '../actions'

export const addCard = (listID: number, text: string) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { listID, text }
  }
}
