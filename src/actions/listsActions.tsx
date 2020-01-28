import { CONSTANTS } from '../actions'

export const addList = (title: string) => {
  return {
    type: CONSTANTS.ADD_LIST,
    payload: title
  }
}

export const sort = (
  droppableIdStart: number,
  droppableIdEnd: number,
  droppableIndexStart: number,
  droppableIndexEnd: number,
  draggableId: number
) => {
  return {
    type: CONSTANTS.DRAG_HAPPENED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId
    }
  }
}
