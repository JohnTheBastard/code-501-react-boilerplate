import React from 'react'
import Joke from '../Joke/Joke'

class Chuck extends React.Component {
  render(){
    return  (
      <main>
        <div>
        <h1>Jokes From Chuck Norris</h1>
        <Joke />

        </div>
      </main>
    )
  }

}

export default Chuck
