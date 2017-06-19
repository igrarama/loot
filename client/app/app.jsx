import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'normalize.css';
import 'font-awesome/scss/font-awesome.scss';
import './styles/site.scss';

class App extends Component {
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

export default connect()(App);