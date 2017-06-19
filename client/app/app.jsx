import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'normalize.css';

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