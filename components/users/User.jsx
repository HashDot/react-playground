import React, { Component } from 'react';

class User extends Component {

  onClick(e){
    e.preventDefault()
    const { user } = this.props
    console.log(user)
  }

  getStatus(){
    return this.props.user.status === true ? 'green' : 'red'
  }

  render(){
    const { user } = this.props
    return (
      <div className="item" onClick={ this.onClick.bind(this) } style={{ paddingTop: '10px', paddingBottom: '10px' }}>
        <div className="left floated content">
          <img className="ui avatar image" src={ "/public/img/" + user.name  + ".png" }/>
          { user.name }
        </div>

        <div className="right floated content" style={{ paddingTop: '8px' }}>
          <i className={ this.getStatus() + " circle thin icon" }></i>
        </div>
      </div>
    )
  }
}

User.propTypes = {
  user: React.PropTypes.object.isRequired
}

export default User
