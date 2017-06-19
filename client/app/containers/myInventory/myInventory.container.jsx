import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './myInventory.scss';
import ItemCard from '../../components/itemCard/itemCard.component';

const itemsMock = [
    {
        id: 1
    },
    {
        id: 2
    },
    {
        id: 3
    }
]

class MyInventory extends Component {
    render() {
        let { myItems } = this.props;

        return (
            <div id='my-inventory-page'>
                <div className='inventory-options'>
                    <div className='search'></div>
                    <div className='general-tags'></div>
                </div>
                <div className='backpack'>
                    {
                        myItems.map((item, i) => (
                            <ItemCard
                                key={ 'item_' + i }
                                item={ item } />
                        ))
                    }
                </div>
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