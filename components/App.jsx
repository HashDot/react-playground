import React, { Component } from 'react'
import Portal from 'react-portal';


import Channels from './channels/Channels.jsx'
import ChannelForm from './channels/ChannelForm.jsx'
import Users from './users/Users.jsx'
import Chat from './chat/Chat.jsx'

import Rodal from 'rodal';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      modal: false,
      visible: false,
      modalIsOpen: false,
      channels: [
        {
          id: 0,
          name: 'General',
          color: 'red',
          hex: '#DB2828',
          topic: 'A general chat.',
          owner: 'Hans',
          messages: [
            {
              id: 1,
              author: 'Hans',
              created: 1449521900107,
              message: 'Erste Chat Nachricht! Krass!'
            },
            {
              id: 2,
              author: 'Klaus',
              created: 1449521900207,
              message: 'Die Zweite Nachricht! Noch viel krasser!'
            }
          ]
        },
        {
          id: 1,
          name: 'Support',
          color: 'green',
          hex: '#21BA45',
          topic: 'Please ask and wait for support.',
          owner: 'Hans',
          messages: []
        },
        {
          id: 2,
          name: 'Development',
          color: 'purple',
          hex: '#A333C8',
          topic: 'Only for the pros!',
          owner: 'Hans',
          messages: []
        },
        {
          id: 3,
          name: 'Business',
          color: 'blue',
          hex: '#2185D0',
          topic: 'For the richies :D',
          owner: 'Hans',
          messages: [
            {
              id: 1,
              author: 'Hans',
              created: 1446521900107,
              message: 'Erste Chat Nachricht! Krass!'
            },
            {
              id: 2,
              author: 'Klaus',
              created: 1449521900207,
              message: 'Die Zweite Nachricht! Noch viel krasser!'
            },
            {
              id: 3,
              author: 'Klaus',
              created: 1449521900207,
              message: 'Die Zweite Nachricht! Noch viel krasser!'
            },
            {
              id: 4,
              author: 'Klaus',
              created: 1449521900207,
              message: 'Die Zweite Nachricht! Noch viel krasser!'
            },
            {
              id: 5,
              author: 'Klaus',
              created: 1449521900207,
              message: 'Die Zweite Nachricht! Noch viel krasser!'
            },
            {
              id: 6,
              author: 'Klaus',
              created: 1449521900207,
              message: 'Die Zweite Nachricht! Noch viel krasser!'
            },
            {
              id: 7,
              author: 'Klaus',
              created: 1449521900207,
              message: 'Die Zweite Nachricht! Noch viel krasser!'
            },
            {
              id: 8,
              author: 'Hans',
              created: 1449521900107,
              message: 'Erste Chat Nachricht! Krass!'
            },
            {
              id: 9,
              author: 'Klaus',
              created: 1449521900207,
              message: 'Die Zweite Nachricht! Noch viel krasser!'
            },
            {
              id: 10,
              author: 'Klaus',
              created: 1449521900207,
              message: 'Die Zweite Nachricht! Noch viel krasser!'
            },
            {
              id: 11,
              author: 'Klaus',
              created: 1449521900207,
              message: 'Die Zweite Nachricht! Noch viel krasser!'
            },
            {
              id: 12,
              author: 'Klaus',
              created: 1449521900207,
              message: 'Die Zweite Nachricht! Noch viel krasser!'
            },
            {
              id: 13,
              author: 'Klaus',
              created: 1449521900207,
              message: 'Die Zweite Nachricht! Noch viel krasser!'
            },
            {
              id: 14,
              author: 'Klaus',
              created: 1449521800207,
              message: 'Die Zweite Nachricht! Noch viel krasser!'
            },
            {
              id: 15,
              author: 'Klaus',
              created: 1449521900207,
              message: 'Die Zweite Nachricht! Noch viel krasser!'
            },
            {
              id: 16,
              author: 'Klaus',
              created: 1449521900207,
              message: 'Die Zweite Nachricht! Noch viel krasser!'
            },
            {
              id: 17,
              author: 'Klaus',
              created: 1449521900207,
              message: 'Die Zweite Nachricht! Noch viel krasser!'
            },
            {
              id: 18,
              author: 'Klaus',
              created: 1449521800207,
              message: 'Die Zweite Nachricht! Noch viel krasser!'
            }
          ]
        }
      ],
      activeChannel: {
        id: 0,
        name: 'General',
        color: 'red',
        hex: '#DB2828',
        topic: 'A general chat.',
        owner: 'Hans',
        messages: [
          {
            id: 1,
            author: 'Hans',
            created: 1449521900107,
            message: 'Erste Chat Nachricht! Krass!'
          },
          {
            id: 2,
            author: 'Klaus',
            created: 1449521900207,
            message: 'Die Zweite Nachricht! Noch viel krasser!'
          }
        ]
      },
      users: [
        { id: 0, name: 'Hans', status: true },
        { id: 1, name: 'Dieter', status: false },
        { id: 2, name: 'Klaus', status: false },
        { id: 3, name: 'Gudrun', status: true }
      ],
      windowWidth: window.innerWidth,
      channelColor: null,
      channelHex: null,
      channelColorStatus: false
    }
  }

  addChannel(name, topic, color, hex){
    let { channels } = this.state
    channels.push({ id: channels.length, name, topic, messages: [], color, hex })
    this.setState({ channels })
    console.log({channels});
    // TODO: Send to server
  }

  setChannel(activeChannel){
    this.setState({ activeChannel })
    // TODO: Get Channels Messages from Server
  }

  channelModalShow() {
    this.setState({ visible: true })
  }

  channelModalHide() {
    this.setState({ visible: false })
  }

  channelNewMessage(e){
    e.preventDefault()
    let { channels, activeChannel } = this.state
    if(this.refs.channelNewMessage.value != ''){
      activeChannel.messages.push({
        id: activeChannel.messages.length + 1,
        author: 'Klaus',
        created: Date.now(),
        message: this.refs.channelNewMessage.value
      })
      this.setState({ activeChannel })
      this.refs.channelNewMessage.value = ''
    }
  }

  channelColor(color, hex){
    this.setState({ channelColor: color })
    this.setState({ channelHex: hex })
    this.setState({ channelColorStatus: true })
  }

  onSubmit(e){
    e.preventDefault()
    this.addChannel(this.refs.channel.value, this.refs.topic.value, this.state.channelColor, this.state.channelHex)
    this.refs.channel.value = ''
    this.refs.topic.value = ''
    this.setState({ channelColor: '' })
    this.setState({ channelHex: '' })
    this.setState({ channelColorStatus: false })
    this.channelModalHide()
  }


  render(){
    console.log(window.innerWidth);
    return (
      <span>
        <div className="ui bottom attached segment pushable">

          <div className="ui visible inverted left vertical sidebar menu">
            <h2 className="ui header bar" style={{ borderColor: this.state.activeChannel.hex }}>
              <div className="content">
                chatr
                <div className="sub header">
                  mnkycode.com
                </div>
              </div>
            </h2>

            <Channels
              channels={ this.state.channels }
              addChannel={ this.addChannel.bind(this) }
              setChannel={ this.setChannel.bind(this) }
              channelModalShow={ this.channelModalShow.bind(this) }
            />
          <div className="spacer"></div>
            <Users
              users={ this.state.users }
            />
          </div>

          <div className="pusher">
            <Chat
              channel={ this.state.activeChannel }
            />
          <div className="chatInput" style={{ width: window.innerWidth - 260 }}>
              <form className="ui fluid action input" onSubmit={ this.channelNewMessage.bind(this) }>
                <input type="text" placeholder="Input a message ..." ref="channelNewMessage"  />
                <div className={ this.state.activeChannel.color + " ui button"}>
                  <i className={ " large smile icon" }></i>
                </div>
              </form>
            </div>
          </div>
        </div>

        <Rodal
          visible={ this.state.visible }
          onClose={ this.channelModalHide.bind(this) }
          animation={ 'slideUp' }
          height={ 390 }
        >
          <span className="rodal-close" onClick={ this.channelModalHide.bind(this) }></span>
          <div className="rodal-header">Create Channel</div>
          <div className="rodal-body">
            <form className="ui form" style={{ height: '250px' }} onSubmit={ this.onSubmit.bind(this) } >
              <div className="field">
                <label>Name</label>
                <input type="text" ref="channel" placeholder="Enter a fancy name" />
              </div>
              <div className="field">
                <label>Topic</label>
                <textarea rows="3" ref="topic" placeholder="Something about this new channel!"></textarea>
              </div>

              <div className="field">
                <label>Color</label>
                <a className="ui red empty circular label" onClick={ this.channelColor.bind(this, 'red', '#DB2828') }></a>
                <a className="ui orange empty circular label" onClick={ this.channelColor.bind(this, 'orange', '#F2711C') }></a>
                <a className="ui yellow empty circular label" onClick={ this.channelColor.bind(this, 'yellow', '#FBBD08') }></a>
                <a className="ui olive empty circular label" onClick={ this.channelColor.bind(this, 'olive', '#B5CC18') }></a>
                <a className="ui green empty circular label" onClick={ this.channelColor.bind(this, 'green', '#21BA45') }></a>
                <a className="ui teal empty circular label" onClick={ this.channelColor.bind(this, 'teal', '#00B5AD') }></a>
                <a className="ui blue empty circular label" onClick={ this.channelColor.bind(this, 'blue', '#2185D0') }></a>
                <a className="ui violet empty circular label" onClick={ this.channelColor.bind(this, 'violet', '#6435C9') }></a>
                <a className="ui purple empty circular label" onClick={ this.channelColor.bind(this, 'purple', '#A333C8') }></a>
                <a className="ui pink empty circular label" onClick={ this.channelColor.bind(this, 'pink', '#E03997') }></a>
                <a className="ui brown empty circular label"  onClick={ this.channelColor.bind(this, 'brown', '#E03997') }></a>
                <a className="ui grey empty circular label" onClick={ this.channelColor.bind(this, 'grey', '#767676') }></a>
                <a className="ui black empty circular label" onClick={ this.channelColor.bind(this, 'black', '#1B1C1D') }></a>
                <br />
                <a className={ "ui " + this.state.channelColor + " image label" }>
                  Color
                  <div className="detail">
                    {(() => {
                      switch (this.state.channelColorStatus) {
                        case true:    return "Selected";
                        default:      return "Please select a color";
                      }
                    })()}
                  </div>
                </a>
              </div>
              <a className="ui green basic button" onClick={ this.onSubmit.bind(this) } >Create</a>
              <a className="ui red basic button" onClick={ this.channelModalHide.bind(this) }>Cancel</a>
            </form>
          </div>
        </Rodal>

    </span>
    )
  }
}






export default App
