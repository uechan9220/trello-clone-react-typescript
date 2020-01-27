// import * as React from 'react'
import { CONSTANTS } from '../actions'

let listID = 2

const initialState = [
  {
    title: 'hoge',
    id: 0,
    cards: [
      {
        id: 0,
        text: 'we created a static list and static card'
      },
      {
        id: 1,
        text: 'we used a mix between material UI react and styled component'
      }
    ]
  },
  {
    title: 'fuga',
    id: 1,
    cards: [
      {
        id: 0,
        text: 'we will create our first reducer'
      },
      {
        id: 1,
        text: 'abd rander many cards on our list with static data'
      },
      {
        id: 2,
        text: 'hog ehogehoge hogehogehoge hogeho g ehogehoge wwwwwwwwww'
      },
      {
        id: 3,
        text: "I'm moke Trello clone with React in Typescript"
      }
    ]
  }
]

const listsReducer = (
  state = initialState,
  action: { payload: any; type: any }
) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: listID
      }
      listID++
      return [...state, newList]

    case CONSTANTS.ADD_CARD:
      let cardID = action.payload.cardID
      const newCard = {
        id: cardID,
        text: action.payload.text
      }
      cardID++

      const newState = state.map(list => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          }
        } else {
          return list
        }
      })

      return newState

    default:
      return state
  }
}

export default listsReducer
