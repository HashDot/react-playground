import React, { Component } from 'react'

class ChannelForm extends Component {

  onSubmit(e){
    e.preventDefault()
    console.log(this.refs.channel);
    const node = this.refs.channel
    const channelName = node.value
    this.props.addChannel(channelName)
    node.value = ''
  }

  onChange(e){
    console.log(e);
  }

  render(){
    return (
      <form className="ui form" onChange={ this.onChange.bind(this) } onSubmit={ this.onSubmit.bind(this) }>
        <input
          type='text'
          ref='channel'
          placeholder='Channelname'
        />
      </form>
    )
  }

}

ChannelForm.propTypes = {
  addChannel: React.PropTypes.func.isRequired
}

export default ChannelForm
