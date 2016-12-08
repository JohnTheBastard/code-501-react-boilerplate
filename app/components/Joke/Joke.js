import React from 'react'
import axios from 'axios'
import _ from 'lodash'

class Joke extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '',
      id: '',
      category: '',
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
    const category = this.state.category;
    if(category !== ''){
      const categoryEndpoint = `?limitTo=[${this.state.category}]`
      url += categoryEndpoint
    }
    axios.get(url)
         .then((res) => {
           console.error(res.data.value.id)
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
    console.error(newMetadata)
    this.setState({
      metadata: newMetadata
    })
    this.getJoke()
  }

  componentDidMount(){
    this.getJoke()
  }

  handleSubmit(e){
    e.preventDefault()
    this.getJoke()
  }

  render(){
    return (
      <div className='Joke'>
        <p>{this.state.text}</p>
        <button onClick={this.rateJoke.bind(this, this.state.id, true)}>Thumbs Up</button> &nbsp;
        <button onClick={this.rateJoke.bind(this, this.state.id, false)}>Thumbs Down</button>

      <p>Optional: limit to category {this.state.category}</p>
      <form onSubmit={this.handleSubmit.bind(this)}>

      <select label='category' value={this.state.category}
              onChange={(e) => this.setState({category: e.target.value})} >
       <option value=''>all</option>
       <option value='explicit'>explicit</option>
       <option value='nerdy'>nerdy</option>
       </select>&nbsp;
       <input type='submit' />
       </form>
       </div>

    )
  }
}


export default Joke
