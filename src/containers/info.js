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
      <div>
        <div>{c1.author.name}</div>
        <div>{c1.message}</div>
        <div><TimeAgo date={c1.author.date} /></div>
        <div>{c2.author.name}</div>
        <div>{c2.message}</div>
        <div><TimeAgo date={c2.author.date} /></div>
        <div>{c3.author.name}</div>
        <div>{c3.message}</div>
        <div><TimeAgo date={c3.author.date} /></div>
      </div>
    );
  }
}

Info.propTypes = {
  repo: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default Info;
