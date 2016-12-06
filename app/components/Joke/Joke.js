import React from 'react'
import axios from 'axios'
import _ from 'lodash'

class Joke extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '',
      id: '',
      metadata: []
    }
  }

  componentWillMount() {
    let url = 'https://api.icndb.com/jokes/count'
    let jokeCount;
    axios.get(url)
         .then((res) =>{
            jokeCount = res.data.value
            console.log('\n\nWILL MOUNT RESPONSE!\n\n')
            this.setState({
                metadata: [...Array(jokeCount).keys()].map(i => "")
            })
         })
         .catch((res) => {
            console.error(res)
         })
  }

  getJoke() {
    let url = 'https://api.icndb.com/jokes/random'
    axios.get(url)
         .then((res) => {
           console.log('\n\nYOU GOT A RESPONSE!\n\n')
           console.error(this.state.metadata)
           console.error(res.data.value.id)
           //const oldJoke = this.state.text
           const newJoke = res.data.value.joke
           const newID = res.data.value.id
            this.setState({
              text: newJoke,
              id: newID
            })
         })
         .catch((res) => {
           console.error(res)
         })
  }

  rateJoke (id, value) {
    const oldMetadata = this.state.metadata
    const newMetadata = oldMetadata.map((o, i) => o = i === id ? value : o )
    this.setState({
      metadata: newMetadata
    })
    this.getJoke()
  }

  componentDidMount(){
    this.getJoke()
  }
  render(){
    return (
      <div className='Joke'>
        <p>{this.state.text}</p>
        <button onClick={this.rateJoke.bind(this, this.state.id, true)}>Thumbs Up</button> &nbsp;
        <button onClick={this.rateJoke.bind(this, this.state.id, false)}>Thumbs Down</button>
      </div>
    )
  }
}


export default Joke
