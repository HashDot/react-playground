import React, { Component } from 'react';

class Channel extends Component {
  constructor(props){
    super(props)
    this.counter = 0
  }

  onClick(e){
    e.preventDefault()
    const { setChannel, channel } = this.props
    setChannel(channel)
    this.counter += 1
    //console.log(channel)
  }

  getColor(){
    return this.props.channel.color
  }

  getHex(){
    return this.props.channel.hex
  }

  render(){
    const { channel } = this.props;
    const hex = this.getHex()
    return (
      <div className="item" onClick={ this.onClick.bind(this) }>
        <div className="content">
          <div className="header" style={{ color: hex }}>
            <a className={ "ui " + this.getColor() + " empty circular label" }></a>
            &nbsp;
            { channel.name }
          </div>
          { channel.topic }
        </div>
      </div>

    )
  }
}

Channel.propTypes = {
  channel: React.PropTypes.object.isRequired,
  setChannel: React.PropTypes.func.isRequired
}

export default Channel
