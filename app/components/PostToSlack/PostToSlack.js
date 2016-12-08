import React from 'react'
import axios from 'axios'
const endpoint = 'https://hooks.slack.com/services/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'

class PostToSlack extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
      username: '',
      icon_emoji: ':conga-parrot:'
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post(endpoint, JSON.stringify({text: this.state.message,
                                     username: this.state.username,
                                   icon_emoji: this.state.icon_emoji}))
         .then((res) => {
            console.error(res)
            this.setState({
              username: '',
              message: '',
              icon_emoji: ':conga-parrot:'
            })
         })
         .catch((error) => {
           console.error(error)
         })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
      <input type='text' label='message' placeholder='message'
             value={this.state.message}
             onChange={(e) => this.setState({message: e.target.value})} />

      <input type='text' label='username' placeholder='username'
             value={this.state.username}
             onChange={(e) => this.setState({username: e.target.value})} />

      <select label='Emoji' value={this.state.icon_emoji}
              onChange={(e) => this.setState({icon_emoji: e.target.value})} >
       <option value=':conga-parrot:'>Conga Parrot</option>
       <option value=':emily:'>Upside-down Emily</option>
       <option value=':turtle:'>Turtle</option>
       <option value=':+1:'>Thumbs up</option>
       </select>
      <input type='submit' />
      </form>
    )
  }
}

export default PostToSlack
