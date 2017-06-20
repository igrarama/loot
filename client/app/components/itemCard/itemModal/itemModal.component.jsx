import React, { Component } from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import _ from 'lodash';

import './itemModal.scss';
import { fetchProductHistory } from '../../../../redux/actions/productActions';

class ItemModal extends Component {
    constructor(props) {
		super(props);
        this.state = {}
	}
    
    handleClickOutside = (event) => {
        this.props.onClose();
    }
    
    componentWillMount() {
        fetchProductHistory(this.props.item)
            .then((history) => {
                this.setState({ history });
            });
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
                    <div>
                        <span>פעיל? </span>
                        <input className='checkbox' type='checkbox' checked={ isInUse } onChange={ toggleIsInUse } />
                    </div>
                </div>
                <div className='advanced-info'>
                    <div>
                        <span>תאריך הנפקה: </span>
                        { item.issueDate }
                    </div>
                    <div>
                        <span>תאריך העברה אחרון: </span>
                        { item.lastTransactionTime }
                    </div>
                </div>
                {
                    !_.isEmpty(this.state.history) ? (
                        <table className='history'>
                            <thead>
                                <tr>
                                    <th>שולח</th>
                                    <th>נמען</th>
                                    <th>תאריך</th>
                                    <th>מאשר</th>
                                    <th>סטטוס</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.history.map((transaction, i) => (
                                        <tr key={i}>
                                            <td>{ transaction.sender ? (transaction.sender.firstName + ' ' + transaction.sender.lastName) : '' }</td>
                                            <td>{ transaction.receiver ? (transaction.receiver.firstName + ' ' + transaction.receiver.lastName) : '' }</td>
                                            <td>{ transaction.transactionTime }</td>
                                            <td>{ transaction.approver ? (transaction.approver.firstName + ' ' + transaction.approver.lastName) : '' }</td>
                                            <td>{ transaction.status }</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    ) : null 
                }
            </div>
        );
    }
}

ItemModal.propTypes = {
    item: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired
};

export default onClickOutside(ItemModal);