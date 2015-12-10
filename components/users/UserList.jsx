import React, { Component } from 'react'
import User from './User.jsx'

class UserList extends Component {

  render(){
    return (
      <div className="ui inverted relaxed divided list channelList">{
        this.props.users.map( user => {
          return <User
            user={ user }
            key={ user.id }
          />
        })
      }</div>
    )
  }

}

UserList.propTypes = {
  users: React.PropTypes.array.isRequired
}

export default UserList
