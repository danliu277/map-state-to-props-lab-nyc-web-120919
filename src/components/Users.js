import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    debugger
    return (
      <div>
        {this.props.users.length}
        <ul>
          Users!
          {this.props.users.map((user, index) => <li key={index}>{user.username}</li>)}Í
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const msp = (state) => {
  return {
    users: state.users
  }
}

// connect this component to Redux
export default connect(msp)(Users);
