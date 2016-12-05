import React from 'react'
import MessageBox from './MessageBox'
import axios from 'axios'
import _ from 'lodash'

class MessagesList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      messagesList: [],
      token: ''
    }
  }

  getMessages () {
    let url = 'http://message-list.appspot.com/messages?limit=10'
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

  componentDidMount(){
    this.getMessages()
  }
  render(){
    if(this.state.messagesList.length > 0){
      const sortedMessages = _.orderBy(this.state.messagesList, (o) => o.updated, 'desc')
      return (
        <div className='MessagesList'>
          <button onClick={this.getMessages.bind(this)}>Get More Messages</button>
          <ul>
            {sortedMessages.map( (message, ii) =>
              <MessageBox
                key={ii}
                author={message.author}
                message={message.content}
                date={message.updated}
              />
            )}
          </ul>
        </div>
      )
    } else {
      return <div>No Messages</div>
    }
  }
}

export default MessagesList
