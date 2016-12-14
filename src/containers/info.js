import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import TimeAgo from 'react-timeago';

class Info extends Component {
  render() {
    if (!this.props.repo.commits || this.props.selected === undefined) {
      return <div></div>;
    }
    const c = this.props.repo.commits;
    const cArr = [c[0].commit, c[1].commit, c[2].commit];
    return (
      <div className="commits">
        <div className="row">
            {cArr.map((commit, i) => (
              <div key={i} className="col m4">
                <div><strong>{commit.author.name}</strong></div>
                <div>{commit.message}</div>
                <div className="commitTime"><TimeAgo date={commit.author.date} /></div>
              </div>
            ))}
        </div>
        <div className="remove col m12"><FlatButton label="Remove" secondary /></div>
      </div>
    );
  }
}

Info.propTypes = {
  repo: React.PropTypes.any,
  selected: React.PropTypes.any
};

export default Info;
