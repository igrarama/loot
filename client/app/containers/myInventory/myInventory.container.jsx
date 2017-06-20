import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { routerActions } from 'react-router-redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import './myInventory.scss';
import Backpack from '../../components/backpack/backpack.component';

import { fetchUserItems } from '../../../redux/actions/userActions';

class MyInventory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterList: [],
            inputValue: ''
        }
    }
    
    get activeItem(){
		let { match, myItems } = this.props;
		if(match.params.id){
			return myItems.find(item => item._id == match.params.id);
		}
	}

    selectItem(item, isSelected){
		if(isSelected){
			this.props.history.push(`/inventory/${item._id}`);
		} else {
			this.props.history.push(`/inventory`);
		}
	}
    
    mapItemTypeColor = (type) => {     
        switch (type) {
            case "מחשוב":
                return 'orange';
            case "תצוגה":
                return 'orange';
            case "סריאלי":
                return 'blue';
            case "לא סריאלי":
                return 'blue';
            case "ציוד משרדי":
                return 'green';
            case "ריהוט":
                return 'green';
            default:
                return 'base';
        }
    }
    
    addFilter = ({ key, value, id }) => {
        let { filterList } = this.state;
        let filters = [...filterList];
        let index = filters.findIndex((filter) => filter.id == id);
        if (index == -1)
            filters.push({ key, value, id });
        else {
            if (key)
                filters[index] = { key, value, id }
            else
                filters.splice(index, 1);
        }
        this.setState({ filterList: filters });
    }

    filterItems = (item) => {
        let { filterList } = this.state;
        let flag = false;
        filterList.map(filter => {
            let tags =  _.get(item, filter.key);
            let tagged = false;
            tags ? tags.map((tag) => {
                if (tag.indexOf(filter.value) != -1)
                    flag = true;
            }) : null;
        })
        return flag;
    }

    searchFilter = (item) => {
        if (!this.state.inputValue)
            return true;
        return JSON.stringify(item).indexOf(this.state.inputValue) != -1;
    }
    
    onSearch = (event) => {
        let { value } = event.target;
        this.setState({ inputValue: value });
    }
    
    componentWillMount() {
        this.props.dispatch(fetchUserItems());
    }

    render() {
        return (
            <div id='my-inventory-page'>
                <div className='header'>
                    <h3>הציוד שלי</h3>
                    <div className='inventory-options'>
                        <div className='search'>
                            <input
                                placeholder={'חיפוש'}
                                onChange={ this.onSearch.bind(this) }
                                value={ this.state.inputValue } />
                        </div>
                        <div className='general-tags'>
                            {
                                this.props.generalTags.map((tag, i) => {
                                    let key = 'generalTag_' + i;
                                    let tagFilter = {
                                        key: ['productDef', 'type', 'tags'],
                                        value: tag,
                                        id: key
                                    }
                                    let { filterList } = this.state;
                                    let onClick = !filterList.find((filter) => filter.id == key) ? 
                                        this.addFilter.bind(this, tagFilter) :
                                        this.addFilter.bind(this, { key: undefined, id: key })
                                    return (
                                        <span
                                            key={ key }
                                            className={ 'tag ' + (filterList.find((filter) => filter.id == key) ? 'active' : '') + ' ' + this.mapItemTypeColor(tag) }
                                            onClick={ onClick }>
                                            <i className='fa fa-tag' />
                                            { tag }
                                        </span>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='main'>
                    <Backpack
                        items={ this.props.myItems.filter(this.filterItems.bind(this)).filter(this.searchFilter) }
                        activeItem={ this.activeItem }
                        onSelect={ this.selectItem.bind(this) }
                        mapItemTypeColor={ this.mapItemTypeColor.bind(this) } />
                </div>
            </div>
        );
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.generalTags != nextProps.generalTags) {
            let filters = [];
            nextProps.generalTags.map((tag, i) => {
                let key = 'generalTag_' + i;
                let tagFilter = {
                    key: ['productDef', 'type', 'tags'],
                    value: tag,
                    id: key
                }
                filters.push(tagFilter);
            })
            this.setState({ filterList: filters });
        }
    }
}

MyInventory.propTypes = {
	myItems: PropTypes.array.isRequired
};

let mapStateToProps = (store) => {
    return {
        myItems: store.user.myItems || [],
        generalTags: store.settings.generalTags || []
    }
}

export default connect(mapStateToProps)(MyInventory);