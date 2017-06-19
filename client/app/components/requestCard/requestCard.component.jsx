import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './requestCard.scss';

class requestCard extends Component {
    render() {
        return (
            <div className='request-wrapper'>
                <div className={ 'request-card ' + this.props.typeColor}>
                    <span>{ this.props.item.id }</span>
                </div>
            </div>
        );
    }
}

requestCard.propTypes = {
    item: PropTypes.object.isRequired,
    typeColor: PropTypes.string
};

requestCard.defaultProps = {
    typeColor: 'base'
}

export default requestCard;
