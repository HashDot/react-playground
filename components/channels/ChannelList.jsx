import React, { Component } from 'react'
import Channel from './Channel.jsx'

class ChannelList extends Component {

  render(){
    return (
      <div className="ui inverted relaxed divided list channelList">{
        this.props.channels.map( chan => {
          return <Channel
            channel={ chan }
            key={ chan.id }
            setChannel={ this.props.setChannel }
          />
        })
      }</div>
    )
  }

}

ChannelList.propTypes = {
  channels: React.PropTypes.array.isRequired,
  setChannel: React.PropTypes.func
}

export default ChannelList
