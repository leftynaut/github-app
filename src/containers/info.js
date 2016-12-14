import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeRepo } from '../actions/index';
import FlatButton from 'material-ui/FlatButton';
import TimeAgo from 'react-timeago';

class Info extends Component {
  constructor(props) {
    super(props);

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.props.removeRepo(this.props.previous);
  }

  render() {
    if (!this.props.repo.commits) {
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
        <div className="remove col m12">
          <FlatButton label="Remove" secondary onClick={this.onButtonClick} />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeRepo }, dispatch);
}

Info.propTypes = {
  repo: React.PropTypes.any,
  previous: React.PropTypes.any,
  removeRepo: React.PropTypes.func
};

export default connect(null, mapDispatchToProps)(Info);
