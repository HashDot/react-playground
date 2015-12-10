import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ChatMessage from './ChatMessage.jsx'

class Chat extends Component {

  constructor(props){
    super(props)
    this.state = {
      chatCommentsHeight: null
    }
  }

  componentDidMount(){
    this._scrollToBottom()
    this._divHeight()
  }

  componentDidUpdate() {
    this._scrollToBottom()
    //this._divHeight()
  }

  shouldComponentUpdate(){
    console.log('test...');
    var node = ReactDOM.findDOMNode(this.refs.chatComments)
    console.log(node );
    console.log(window.innerWidth - node.scrollHeight);
    return true
  }

  _scrollToBottom() {
    var node = ReactDOM.findDOMNode(this.refs.chatComments)
    node.scrollTop = node.scrollHeight
  }

  _divHeight(){
    var node = ReactDOM.findDOMNode(this.refs.chatComments)
    this.setState({ chatCommentsHeight: window.innerWidth - node.scrollHeight })
    console.log(window.innerWidth - node.scrollHeight);
  }

  render(){

    const channel = this.props.channel
    return (
      <div>
        <h2 className="ui header chat" style={{ borderColor: channel.hex }}>
          <i className="comments icon"></i>
          <div className="content">
            { channel.name }
            <div className="sub header">
              { channel.topic }
            </div>
          </div>
        </h2>

        <div className="ui comments chatComments" ref="chatComments" style={{ height: this._divHeight.bind(this), width: window.innerWidth - 270 }}>{
          channel.messages.map( msg => {
            return <ChatMessage
              msg={ msg }
              key={ msg.id }
            />
          })
        }
        </div>

      </div>
    )
  }
}

Chat.propTypes = {
  channel: React.PropTypes.object.isRequired
}

export default Chat
