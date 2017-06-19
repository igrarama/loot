import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Backpack from '../../components/backpack/backpack.component';

const ordersMock = [
    {
        id: 1,
        customer: {
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

class MyInventory extends Component {
    render() {
        return (
            <div id='my-inventory-page'>
                <Backpack
                    items={ ordersMock }
                    mapItemTypeColor={ () => {return 'green'; } } />
            </div>
        );
    }
}

MyInventory.propTypes = {
    myItems: PropTypes.array.isRequired
};

let mapStateToProps = (store) => {
    // map to correct state
    return {
        myItems: store.myItems || itemsMock
    }
}

export default connect(mapStateToProps)(MyInventory);