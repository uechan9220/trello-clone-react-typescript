import * as React from 'react'
import TrelloList from './TrelloList'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>hello</h1>
        <TrelloList title='Trello'/>
      </div>
    )
  }
}

export default App
