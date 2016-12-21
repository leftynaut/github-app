import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
// import axios from 'axios';

import { fetchRepo } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);


    this.state = { searchTerm: '' };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  // when component mounts, axios makes a get request for all search terms
  // and populates the app accordingly

  // NOTE: temporarily removing backend connection while implementing apollo
  componentWillMount() {
    // const request = axios.get('https://github-favorites-backend.herokuapp.com/api');
    // request.then(res => {
    //   res.data.forEach(item => {
    //     this.props.fetchRepo(item, 'all');
    //   });
    // });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.fetchRepo(this.state.searchTerm);
    this.setState({ searchTerm: '' });
  }

  onInputChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  // TODO: setup RegEx form validation
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          placeholder="Add repos in the following format: 'facebook/react'"
          value={this.state.searchTerm}
          onChange={this.onInputChange}
        />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRepo }, dispatch);
}

const query = gql`
    query {
      repository(owner:"facebook", name: "react"){
        createdAt,
        description
      }
    }
  `;

const containerWithData = graphql(query)(SearchBar);

SearchBar.propTypes = {
  fetchRepo: React.PropTypes.func
};

export default connect(null, mapDispatchToProps)(containerWithData);
// export default connect({mapQueriesToProps})(SearchBar);
