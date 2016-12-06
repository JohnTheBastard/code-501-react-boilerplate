import React from 'react'
import axios from 'axios'
import _ from 'lodash'

class Joke extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '',
      category: ''
    }
  }

  getJoke () {
    let url = 'https://api.icndb.com/jokes/random'
    if (this.state.category !== '') {
      url += `?limitTo=${this.state.category}`
    }
    axios.get(url)
         .then((res) => {
           console.log('\n\nYOU GOT A RESPONSE!\n\n')
           console.log(res)
           //const oldJoke = this.state.text
           const newJoke = res.data.value.joke
           let category = res.data.value.categories[0]
           category === undefined ? category : ''
            this.setState({
              text: newJoke,
              category: category
            })
         })
         .catch((res) => {
           console.log('\n\nYOU GOT AN ERROR!\n\n')
           console.error(res)
         })
  }

  componentDidMount(){
    this.getJoke()
  }
  render(){
    return (
      <div className='Joke'>
        <p>Hello, world!</p>
        <p>{this.state.text}</p>
      </div>
    )
  }
}


export default Joke
