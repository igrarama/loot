import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';

import './suggest.scss';

class Suggest extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
	}

	getSuggestionValue = (suggestion) => {
		let value = this.props.getSuggestionValue(suggestion);
		this.onChange(value)
	}

	onChange = (event) => {
		this.setState({ value: event.target.value || value });
	}
	
	render() {
		let inputProps = {
			onChange: this.onChange.bind(this),
			placeholder: this.props.placeholder,
			value: this.state.value
		}

		return (
			<Autosuggest
        suggestions={ this.props.suggestions }
        onSuggestionsFetchRequested={ (value) => this.props.onFetchSuggestions(value) }
        onSuggestionsClearRequested={ () => this.props.onClearSuggestions() }
        getSuggestionValue={ this.getSuggestionValue.bind(this) }
        renderSuggestion={ (suggestion) => this.props.renderSuggestion(suggestion) }
        inputProps={inputProps}
      />
		);
	}
}

Suggest.propTypes = {
	suggestions: PropTypes.array.isRequired,
	onFetchSuggestions: PropTypes.func.isRequired,
	onClearSuggestions: PropTypes.func.isRequired,
	getSuggestionValue: PropTypes.func,
	renderSuggestion: PropTypes.func,
	placeholder: PropTypes.string,
};

Suggest.defaultProps = {
	getSuggestionValue: (suggestion) => suggestion.name,
	renderSuggestion: (suggestion) => <span>{ suggestion.name }</span>,
	placeholder: 'חפש',
	onChange: (value) => { this.setState({ value }) }
}

export default Suggest;