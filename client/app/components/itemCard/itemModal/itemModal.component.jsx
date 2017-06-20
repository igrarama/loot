import React, { Component } from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';

import './itemModal.scss';

class ItemModal extends Component {
    constructor(props) {
		super(props);
	}
    
    handleClickOutside = (event) => {
        this.props.onClose();
    }
    
    componentWillMount() {
        // TODO: add a call to transactions to get item history
    }
    
    render() {
        let { item, typeColor, isInUse, toggleIsInUse } = this.props;
        
        return (
            <div className={ 'item-expanded ' + typeColor}>
                <div className='basic-info'>
                    <h4>
                        { item.productDef.name }
                        ({ item.productDef.type.hebrewName })
                    </h4>
                    <span>{ item.productDef.description }</span>
                </div>
                <div className='extra-info'>
                    <span className='serial'>{ item.serialNumber ? item.serialNumber : '' }</span>
                    <input className='checkbox' type='checkbox' checked={ isInUse } onChange={ toggleIsInUse } />
                </div>
                <div className='advanced-info'>
                    <div>
                        <span>תאריך הנפקה</span>
                        { item.issueDate }
                    </div>
                    <div>
                        <span>תאריך העברה אחרון</span>
                        { item.lastTransactionTime }
                    </div>
                </div>
            </div>
        );
    }
}

ItemModal.propTypes = {
    item: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired
};

export default onClickOutside(ItemModal);