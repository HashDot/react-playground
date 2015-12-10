import React, { Component } from 'react'
import ChannelList from './ChannelList.jsx'
import ChannelForm from './ChannelForm.jsx'

class Channels extends Component {
  render(){
    return (
      <div>
        <h3 className="ui header">
          Channels
        </h3>
        <ChannelList
          channels={ this.props.channels }
          setChannel={ this.props.setChannel }
        />
      <div className="spacer-mid"></div>
      <center>
        <a className="ui labeled inverted green icon button" onClick={ this.props.channelModalShow }>
          <i className="plus icon"></i>
          Create Channel
        </a>
      </center>

      </div>
    )
  }
}

Channels.propTypes = {
  channels: React.PropTypes.array.isRequired,
  setChannel: React.PropTypes.func.isRequired,
  addChannel: React.PropTypes.func.isRequired,
  channelModalShow: React.PropTypes.func.isRequired
}

export default Channels
