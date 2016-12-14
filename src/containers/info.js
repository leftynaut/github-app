import React, { Component } from 'react';

class Info extends Component {
  render() {
    if (!this.props.repo.commits) {
      return <div>nada</div>;
    }
    return (
      <div>{this.props.repo.commits[0].author.login}</div>
    );
  }
}

export default Info;
