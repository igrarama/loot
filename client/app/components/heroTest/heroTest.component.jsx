import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './heroTest.scss';

class HeroTest extends Component {
    render() {
        return (
            <div id={ 'hero' }>
                This is a component test
            </div>
        );
    }
}

HeroTest.propTypes = {

};

export default HeroTest;