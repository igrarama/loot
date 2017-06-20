import React, { Component } from 'react';
import { connect } from 'react-redux';

import { authenticate } from '../../../redux/actions/userActions';

import './login.scss';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  componentDidMount() {
    this.checkAuth(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.checkAuth(nextProps);
  }

  checkAuth({ current, history }){
    if(current && current._id){
      history.push('/');
    }
  }

  handleChange(key, e){
    this.setState({
      [key]: e.target.value
    })
  }

  login(e){
    e.preventDefault();

    let { email, password } = this.state;

    this.props.dispatch(authenticate(email, password));
  }

  render() {
    return (
      <div className="login">
        <form onSubmit={this.login.bind(this)}>
          <div className="field">
            <label>מייל</label>
            <input type="email" value={ this.state.email } onChange={ this.handleChange.bind(this, 'email') } />
          </div>
          <div className="field">
            <label>סיסמה</label>
            <input type="password" value={ this.state.password } onChange={ this.handleChange.bind(this, 'password') } />
          </div>
          <input type="submit" />
        </form>
      </div>
    )
  }

}

function mapStateToProps(state){
  return {
    current: state.user.get('current')
  };
}
    
export default connect(mapStateToProps)(Login);