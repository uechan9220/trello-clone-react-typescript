import { CONSTANTS } from '../actions'

export const addList = (title: string) => {
  return {
    type: CONSTANTS.ADD_LIST,
    payload: title
  }
}