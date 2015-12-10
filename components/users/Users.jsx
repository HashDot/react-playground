import React, { Component } from 'react'
import UserList from './UserList.jsx'

class Users extends Component {
  render(){
    return (
      <div>
        <h3 className="ui header">
          Users
        </h3>
        <UserList { ...this.props } />
      </div>
    )
  }
}

Users.propTypes = {
  users: React.PropTypes.array.isRequired
}

export default Users
