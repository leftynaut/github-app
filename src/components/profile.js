import React, { Component } from 'react';
import { connect } from 'react-redux';
import TimeAgo from 'react-timeago';
import { fetchAuthor } from '../actions/index';

class Profile extends Component {
  componentWillMount() {
    this.props.fetchAuthor(this.props.params.username);
  }

  render() {
    const { profile } = this.props;
    if (!profile) {
      return <div>Profile loading</div>;
    }
    return (
      <div>
        <img src={profile.avatar_url} alt="profile" />
        <h3>{profile.name}</h3>
        <p>Number of followers: {profile.followers}</p>
        <p>Bio: {profile.bio}</p>
        <p>Been on Github since <TimeAgo date={profile.created_at} /></p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { profile: state.author.profile };
}

Profile.propTypes = {
  fetchAuthor: React.PropTypes.func,
  profile: React.PropTypes.obj,
  params: React.PropTypes.obj
};

export default connect(mapStateToProps, { fetchAuthor })(Profile);
