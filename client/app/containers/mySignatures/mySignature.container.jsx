import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import RequestCard from '../../components/requestCard/requestCard.component';
import './mySignature.scss';

const ordersMock = [
    {
        id: 1,
        customer: {
            orgPath: "nnnn/fdfd/fdsf/fdsf",
            personalNumber: "1234567",
            firstName: "name",
            lastName: "last",
            email: "mail@mail.mil",
            releaseDate: Date.now(),
            voip: "1234",
            phoneNumber: "123-456-7890"
        },
        products: [
            {
                name: "screen",
                isInStock: true,
            },
            {
                name: "screen",
                isInStock: true,
            },
            {
                name: "screen",
                isInStock: true,
            },
            {
                name: "computer",
                isInStock: true,
            }
        ],
        reason: "reason number 1",
        comment: "lols and stuff"
    },
    {
        id: 2,
            customer: {
                orgPath: "nnnn/fdfd/fdsf/fdsf",
            personalNumber: "1234567",
            firstName: "name2",
            lastName: "last",
            email: "mail@mail.mil",
            releaseDate: Date.now(),
            voip: "1234",
            phoneNumber: "123-456-7890"
        },
        products: [
            {
                name: "screen",
                isInStock: false,
            },
            {
                name: "cable",
                isInStock: true,
            },
            {
                name: "cable",
                isInStock: true,
            },
            {
                name: "computer",
                isInStock: false,
            }
        ],
        reason: "reason number 22",
        comment: ""
    }
]

class MySignature extends Component {
    render() {
        return (
            <div id='my-signature-page'>
                <div className='backpack'>
                    {
                        this.props.items.map((item, i) => (
                                <RequestCard
                                    key={ 'item_' + i }
                                    item={ item } />
                        ))
                    }
                </div>
            </div>
        );
    }
}

MySignature.propTypes = {
    items: PropTypes.array.isRequired
};

let mapStateToProps = (store) => {
    // map to correct state
    return {
        items: store.myItems || ordersMock
    }
}

export default connect(mapStateToProps)(MySignature);