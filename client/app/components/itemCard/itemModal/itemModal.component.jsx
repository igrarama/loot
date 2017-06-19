import React, { Component } from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';

import './itemModal.scss';

class ItemModal extends Component {
    handleClickOutside = (event) => {
        this.props.onClose();
    }
    
    render() {
        return (
            <div className='item-expanded'>
                Expanded
            </div>
        );
    }
}

ItemModal.propTypes = {
    item: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired
};

export default onClickOutside(ItemModal);