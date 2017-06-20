import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemCard from '../itemCard/itemCard.component';
import Collapsible from 'react-collapsible';
import './catalog.scss';

class Catalog extends Component {
    constructor(props) {
        super(props);
    }

renderInput= (product) =>
{
    return(
        <div className="product">
            <span className="title">שם:</span>
            <span className="value">
                                          {product.name}</span>
            <span className="title">תיאור:</span>
            <span className="value">
                                          {product.description}</span>
            <span className="title"> מחיר:</span>
            <span className="value">
                                          {product.price}</span>
            <span className="title">
                                        {product.isInStock ? "נמצא במלאי":"חסר במלאי"}</span>
        </div>
    );
}
renderTitle= () =>
    {
        return(<span className="title">מחשבים</span>);
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
                                    <Collapsible trigger={this.renderTitle()}>
                                        <Collapsible trigger= {this.renderInput(product)}>
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