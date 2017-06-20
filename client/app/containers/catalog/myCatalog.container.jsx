import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { routerActions } from 'react-router-redux';
import _ from 'lodash';
import Catalog from  '../../components/catalog/catalog.component';
import { connect } from 'react-redux';

class MyCatalog extends Component {

    render()
    {
        return (<Catalog
            productDefs = {this.props.productDefs}/>);
    }
}

let mapStateToProps = (store) => {
    return {
        productDefs: store.settings.get('productDefs') || [],
    }
}
export default connect(mapStateToProps)(MyCatalog);
