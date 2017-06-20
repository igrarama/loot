import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemCard from '../itemCard/itemCard.component';
import Collapsible from 'react-collapsible';
class Catalog extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div id='catalog-page'>
                <div className='header'>
                    <h3>קטלוג מוצרים</h3>
                </div>
                <div className="catalog">
                    {
                        this.props.productDefs.map((product, i) =>
                            <div className='product-wrapper' key={ 'product' + i }>
                                {
                                    <Collapsible trigger={product.type.hebrewName}>
                                        <p>
                                            שם:
                                            {product.name}
                                        </p>
                                        <p>
                                        תיאור:
                                        {product.description}</p>
                                        <p>
                                        מחיר:
                                        {product.price}
                                    </p>

                                    <p>
                                                נמצא במלאי:
                                        {product.isInStock}
                                     </p>
                                        <Collapsible trigger="פרטים נוספים">
                                            <p>
CPU:
                                                {product.productAttributes.CPU}
                                            </p>
                                            <p>
Case Size:
                                                {product.productAttributes.CaseSize}
                                            </p>
                                            <p>
Memory:
                                                {product.productAttributes.Memory}
                                            </p>
                                            <p>
Storage:
                                                {product.productAttributes.Storage}
                                            </p>
                                        </Collapsible>
                                    </Collapsible>
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

Catalog.propTypes = {
    productDefs: PropTypes.array.isRequired
};

export default Catalog;