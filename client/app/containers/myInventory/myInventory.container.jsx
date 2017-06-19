import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './myInventory.scss';
import ItemCard from '../../components/itemCard/itemCard.component';

const itemsMock = [
    {
        id: 1,
        type: {
            title: 'tech'
        }
    },
    {
        id: 2,
        type: {
            title: 'army'
        }
    },
    {
        id: 3,
        type: {
            title: 'army'
        }
    },
    {
        id: 4,
        type: {
            title: 'tech'
        }
    },
    {
        id: 5,
        type: {
            title: 'tech'
        }
    },
    {
        id: 6,
        type: {
            title: 'army'
        }
    }
]

const generalTags = [
    {
        title: 'tech',
        name: 'מיחשוב'
    },
    {
        title: 'army',
        name: 'צבאי'
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
                    <div className='general-tags'>
                        {
                            generalTags.map((tag, i) => (
                                <span
                                    key={ 'generalTag_' + i }
                                    className={ tag.title }>
                                    { tag.name }
                                </span>
                            ))
                        }
                    </div>
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