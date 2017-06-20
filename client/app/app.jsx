import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'normalize.css';
import 'font-awesome/scss/font-awesome.scss';
import './styles/site.scss';

import { fetchProductTypes, fetchProductTypeTags,fetchProductDefs } from '../redux/actions/productActions';
import { fetchUser } from '../redux/actions/userActions';
import { fetchOrders } from '../redux/actions/orderActions';

class App extends Component {
  componentWillMount() {
    this.props.dispatch(fetchProductTypes());
    this.props.dispatch(fetchProductTypeTags());
    this.props.dispatch(fetchUser());
    this.props.dispatch(fetchProductDefs());
  }
  
  render() {
    let { current, children } = this.props;
    return (
      <div className='wrapper'>
        <header>
          <h1 style={{ margin: 0 }} >
            Loot
          </h1>
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