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
  }
]

const listsReducer = (state = initialState, action: { type: any }) => {
  switch (action.type) {
    default:
      return state
  }
}

export default listsReducer