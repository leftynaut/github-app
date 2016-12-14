import React, { Component } from 'react';
import TimeAgo from 'react-timeago';

class Info extends Component {
  render() {
    if (!this.props.repo.commits) {
      return <div></div>;
    }
    const c = this.props.repo.commits;
    const cArr = [c[0].commit, c[1].commit, c[2].commit];
    return (
      <div className="row">
          {cArr.map((commit, i) => (
            <div key={i} className="col m4">
              <div><strong>{commit.author.name}</strong></div>
              <div>{commit.message}</div>
              <div className="commitTime"><TimeAgo date={commit.author.date} /></div>
            </div>
          ))}
      </div>
    );
  }
}

Info.propTypes = {
  repo: React.PropTypes.any
};

export default Info;
