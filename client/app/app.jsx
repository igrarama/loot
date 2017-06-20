import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'normalize.css';
import 'font-awesome/scss/font-awesome.scss';
import './styles/site.scss';

import { fetchProductTypes, fetchProductTypeTags } from '../redux/actions/productActions';
import { fetchUser, searchPeople } from '../redux/actions/userActions';

class App extends Component {
  componentWillMount() {
    this.props.dispatch(fetchProductTypes());
    this.props.dispatch(fetchProductTypeTags());
    this.props.dispatch(fetchUser());
    this.props.dispatch(searchPeople('Moshik'));
  }
  
  render() {
    let { current, children } = this.props;
    return (
      <div className='wrapper'>
        <header>
          ברוך הבא
        </header>
        <main>
          { current ? children : null }
        </main>
      </div>
    );
  }
}

export default connect(state => ({
  current: state.user.get('current')
}))(App);