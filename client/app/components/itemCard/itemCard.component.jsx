import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './itemCard.scss';

class ItemCard extends Component {
    render() {
        return (
            <div className={ 'item-card ' + 'purple'}>
                { this.props.item.id }
            </div>
        );
    }
}

ItemCard.propTypes = {
    item: PropTypes.object.isRequired
};

export default ItemCard;