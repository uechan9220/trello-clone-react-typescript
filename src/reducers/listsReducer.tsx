// import * as React from 'react'

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
      }
    ]
  },
]

const listsReducer = (state = initialState, action: { type: any }) => {
  switch (action.type) {
    default:
      return state
  }
}

export default listsReducer
