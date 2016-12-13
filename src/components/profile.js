import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAuthor } from '../actions/index';

class Profile extends Component {
  componentWillMount() {
    this.props.fetchAuthor(this.props.params.username);
  }

  renderProfile() {
    return (
      <div>You did it!</div>
    );
  }

  render() {
    const username = this.props.params.username;
    return (
      <div className="single-photo">
          {this.renderProfile()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { profile: state.profile };
}

export default connect(mapStateToProps, { fetchAuthor })(Profile);
