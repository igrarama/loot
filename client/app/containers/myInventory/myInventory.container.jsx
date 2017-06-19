import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './myInventory.scss';
import Backpack from '../../components/backpack/backpack.component';

class MyInventory extends Component {
    mapItemTypeColor = (type) => {
        switch (type) {
            case 'tech':
                return 'blue';
            case 'army':
                return 'green';
            default:
                return 'base';
        }
    }
    
    render() {
        return (
            <div id='my-inventory-page'>
                <div className='header'>
                    <h3>הציוד שלי</h3>
                    <div className='inventory-options'>
                        <div className='search'>
                            <input placeholder={'חיפוש'} />
                        </div>
                        <div className='general-tags'>
                            {
                                this.props.generalTags.map((tag, i) => (
                                    <span
                                        key={ 'generalTag_' + i }
                                        className={ 'tag ' + this.mapItemTypeColor(tag.title) }>
                                        <i className='fa fa-tag' />
                                        { tag.name }
                                    </span>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='main'>
                    <Backpack
                        items={ this.props.myItems }
                        mapItemTypeColor={ this.mapItemTypeColor.bind(this) } />
                </div>
                <div className='footer'>
                    <div className='request-item'>
                        <i className='fa fa-plus' />
                    </div>
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
        myItems: store.user.myItems,
        generalTags: store.settings.generalTags
    }
}

export default connect(mapStateToProps)(MyInventory);