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
    },
    {
        id: 4
    },
    {
        id: 5
    },
    {
        id: 6
    },
    {
        id: 7
    },
    {
        id: 8
    }
]

class MyInventory extends Component {
    render() {
        let { myItems } = this.props;

        return (
            <div id='my-inventory-page'>
                <div className='inventory-options'>
                    <div className='search'>
                        <input placeholder={'חיפוש'} />
                    </div>
                    <div className='general-tags'></div>
                </div>
                <div className='backpack'>
                    {
                        myItems.map((item, i) => (
                            <div className='card-wrapper' key={ 'item_' + i }>
                                <ItemCard
                                    item={ item } />
                            </div>
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