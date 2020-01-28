// import * as React from 'react'
import { CONSTANTS } from '../actions'

let listID = 2

const initialState = [
  {
    title: 'hoge',
    id: `list-${0}`,
    cards: [
      {
        id: `list-${0}-card-${0}`,
        text: 'we created a static list and static card'
      },
      {
        id: `list-${0}-card-${1}`,
        text: 'we used a mix between material UI react and styled component'
      }
    ]
  },
  {
    title: 'fuga',
    id: `list-${1}`,
    cards: [
      {
        id: `list-${1}-card-${0}`,
        text: 'we will create our first reducer'
      },
      {
        id: `list-${1}-card-${1}`,
        text: 'abd rander many cards on our list with static data'
      },
      {
        id: `list-${1}-card-${2}`,
        text: 'hog ehogehoge hogehogehoge hogeho g ehogehoge wwwwwwwwww'
      },
      {
        id: `list-${1}-card-${3}`,
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
        id: `list-${listID}`
      }
      listID++
      return [...state, newList]

    case CONSTANTS.ADD_CARD: {
      let cardID = action.payload.cardID
      const newCard = {
        id: `list-${listID}-card-${cardID}`,
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
    }

    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId
      } = action.payload
      const newState = [...state]
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id)
        const card = list?.cards.splice(droppableIndexStart, 1)
        if (card !== undefined)
          list?.cards.splice(droppableIndexEnd, 0, ...card)
      }

    default:
      return state
  }
}

export default listsReducer
