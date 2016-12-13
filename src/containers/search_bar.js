import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);


    this.state = { searchTerm: '' };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.fetchRepo(this.state.searchTerm);
    this.setState({ searchTerm: '' });
  }

  onInputChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          placeholder="Enter a repo in the folloing format: 'facebook/react'"
          value={this.state.searchTerm}
          onChange={this.onInputChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

SearchBar.propTypes = {
  fetchRepo: React.PropTypes.func
};

export default SearchBar;
