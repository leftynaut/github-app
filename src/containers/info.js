import React, { Component } from 'react';
import TimeAgo from 'react-timeago';

class Info extends Component {
  render() {
    if (!this.props.repo.commits) {
      return <div></div>;
    }
    const c1 = this.props.repo.commits[0].commit;
    const c2 = this.props.repo.commits[1].commit;
    const c3 = this.props.repo.commits[2].commit;
    return (
      <div className="row">
        <div className="col m4">
          <div><strong>{c1.author.name}</strong></div>
          <div>{c1.message}</div>
          <div className="commitTime"><TimeAgo date={c1.author.date} /></div>
        </div>
        <div className="col m4">
          <div><strong>{c2.author.name}</strong></div>
          <div>{c2.message}</div>
          <div className="commitTime"><TimeAgo date={c2.author.date} /></div>
        </div>
        <div className="col m4">
          <div><strong>{c3.author.name}</strong></div>
          <div>{c3.message}</div>
          <div className="commitTime"><TimeAgo date={c3.author.date} /></div>
        </div>
      </div>
    );
  }
}

Info.propTypes = {
  repo: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default Info;
