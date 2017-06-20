import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './requestCard.scss';
import PersonCard from '../personCard/personCard.component';

class RequestCard extends Component {
    constructor() {
        super();
        this.state = {
            isExpanded: false
        }
    }

    setIsExpanded = () => {
        let { isExpanded } = this.state;
        this.setState({ isExpanded: !isExpanded });
    }

    displayOrder = (products) => {
        let groupedProducts = _.groupBy(products, 'name');
        products = Object.keys(groupedProducts).map(key => {
            return {
                name: groupedProducts[key][0].name,
                isInUse: groupedProducts[key][0].isInUse,
                count: groupedProducts[key].length
            };
        });
        return <div className="order">
            <span>ציוד רצוי</span>
            <ul>
                { products.map(product => {
                    return <li className="product">
                        <span className="productName"> { product.name } </span>
                        <span className="amount"> X { product.count }</span>
                        <span className="isInStock"> X { product.isInUse }</span>
                    </li>
                })}
            </ul>
        </div>;
    }

    render() {
        let { customer, products, reason, comments } = this.props.item;
        return (
            <div className={ 'item1-card green'}>
                <PersonCard customer={customer}/>
                { this.displayOrder(products) }
                <div className="reason">
                    <span>סיבת הבקשה: { reason }</span>
                    { comments ? <span>הערות נוספות: { comments }</span> : ""}
                </div>
            </div>
        );
    }
}

RequestCard.propTypes = {
    item: PropTypes.object.isRequired
};

RequestCard.defaultProps = {
    typeColor: 'base'
}

export default RequestCard;
