import React from 'react'
import axios from 'axios'
import _ from 'lodash'

class Chuck extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '',
      token: ''
    }
  }

  getJoke () {
    let url = 'https://api.icndb.com/limit=10'
    if (this.state.token !== '') {
      url += `&pageToken=${this.state.token}`
    }
    axios.get(url)
         .then((res) => {
           const oldMessages = this.state.messagesList
           const newMessages = oldMessages.concat(res.data.messages)
            this.setState({
              messagesList: newMessages,
              token: res.data.pageToken
            })
         })
         .catch((res) => {
           console.error(res)
         })
  }
}

export default Joke
