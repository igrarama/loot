import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'normalize.css';
import 'font-awesome/scss/font-awesome.scss';
import './styles/site.scss';

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <header>
          ברוך הבא
        </header>
        <main>
          { this.props.children }
        </main>
      </div>
    );
  }
}

export default connect()(App);