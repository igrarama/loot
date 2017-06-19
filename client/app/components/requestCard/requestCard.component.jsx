import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './requestCard.scss';

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

    displayPerson = (customer) => {
        return <div className="person">
            <div className="name">
                <span>{ customer.firstName }</span>
                <span>{ customer.lastName }</span>
            </div>
            <div className="info">
                <span>{ customer.personalNumber }</span>
                <span>{ customer.releaseDate }</span>
            </div>
            <div className="contact-info">
                <span>{ customer.email }</span>
                <span>{ customer.voip }</span>
                <span>{ customer.phoneNumber }</span>
            </div>
        </div>;
    }

    displayOrder = (products) => {
        products = _.groupBy(products, 'id');
        products = Object.keys(products).map(key => {
            return {
                name: products[key][0].name,
                isInUse: products[key][0].isInUse,
                count: products[key].length
            };
        });
        return <div className="order">
            <span>products</span>
            <ul>
                { products.map(product => {
                    return <li className="product">
                        <span className="productName"> { product.name } </span>
                        <span className="amount"> X { product.count }</span>
                        <span className="isInUse">{ product.isInUse }</span>
                    </li>
                })}
            </ul>
        </div>;
    }

    render() {
        let { customer, products, reason, comments } = this.props.item;
        return (
            <div className={ 'item1-card ' + this.props.typeColor}>
                { this.displayPerson(customer) }
                { this.displayOrder(products) }
                <div className="reason">
                    <span> : { reason }</span>
                    <span> : { comments }</span>
                </div>
                <span>{ this.props.item.id }</span>
            </div>
        );
    }
}

RequestCard.propTypes = {
    item: PropTypes.object.isRequired,
    typeColor: PropTypes.string
};

RequestCard.defaultProps = {
    typeColor: 'base'
}

export default RequestCard;
