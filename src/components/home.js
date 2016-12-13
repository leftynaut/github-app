import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBar from '../containers/search_bar';

class Home extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

Home.propTypes = {
  message: React.PropTypes.string
};


/**
 * As your Redux state gets larger, you'll want to avoid
 * passing the entire state object to your components when
 * they only need a slice of the state.
 */

export default connect(state => state)(Home);
