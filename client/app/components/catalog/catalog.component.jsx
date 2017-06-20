import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Catalog extends Component {
    render() {
        return(
            <div id='catalog-page'>
                <div className='header'>
                    <h3>קטלוג מוצרים</h3>
                </div>
                <div className="catalog">
                    {
                        // this.props.items.map((item, i) => (
                        // <div className='card-wrapper' key={ 'item_' + i }>
                        // <ItemCard
                        // item={ item }
                        // expanded={ this.props.activeItem == item }
                        // onSelect={ this.props.onSelect.bind(this, item) }
                        // typeColor={ this.props.mapItemTypeColor(item.type.title) } />
                        // </div>
                        // ))
                    }
                </div>
            </div>
        );
    }


}

Catalog.propTypes = {

};

export default Catalog;