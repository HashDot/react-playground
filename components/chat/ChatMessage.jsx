import React, { Component } from 'react'
import TimeAgo from 'react-timeago'

class ChatMessage extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const { msg } = this.props;
    return (
      <div className="comment">
          <a className="avatar">
            <img src={ "public/img/" + msg.author + ".png" } />
          </a>
          <div className="content">
            <a className="author">
              { msg.author }
            </a>
            <div className="metadata">
              <span className="date">
                <TimeAgo date={ msg.created } />
              </span>
            </div>
            <div className="text">
              { msg.message }
            </div>
          </div>
        </div>
    )
  }
}

ChatMessage.propTypes = {
  msg: React.PropTypes.object.isRequired
}

export default ChatMessage
