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
      <div className="container">
        <div className="row valign-wrapper">
          <div className="col m5">
            <img className="circle responsive-img" src={profile.avatar_url} alt="profile" />
          </div>
          <div className="col m7 valign">
            <h3>{profile.name}</h3>
            <p>{profile.bio}</p>
            <p>Number of followers: <strong>{profile.followers}</strong></p>
            <p>Github user since: <strong><TimeAgo date={profile.created_at} /></strong></p>
          </div>
        </div>
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
