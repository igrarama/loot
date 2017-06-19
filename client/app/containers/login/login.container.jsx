import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {

  componentDidMount() {
    this.checkAuth(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.checkAuth(nextProps);
  }

  checkAuth({ current, history }){
    if(current && current.id){
      history.push('/');
    }
  }

  login(e){
    e.preventDefault();
    this.props.dispatch({
      type: "SET_USER",
      user: {
        id: '1'
      }
    });
  }

  render() {
    return (
      <form onSubmit={this.login.bind(this)}>
        <input type="submit" />
      </form>
    )
  }

}

function mapStateToProps(state){
  return {
    current: state.auth.get('current')
  };
}
    
export default connect(mapStateToProps)(Login);