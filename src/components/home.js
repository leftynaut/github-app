import React, { Component } from 'react';
import { connect } from 'react-redux';

import FavoriteList from '../containers/favorite_list';

class Home extends Component {
  componentWillMount() {
  }
  render() {
    return (
      <div>
        <FavoriteList {...this.props} />
      </div>
    );
  }
}

Home.propTypes = {
  message: React.PropTypes.string
};

export default connect(state => state)(Home);
