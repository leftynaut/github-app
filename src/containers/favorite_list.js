import React, { Component } from 'react';
import { connect } from 'react-redux';

class FavoriteList extends Component {

  renderFavorite(repoData) {
    const author = repoData.owner.login;
    const name = repoData.name;
    const stars = repoData.stargazers_count;
    return (
      <tr>
        <td>{author}</td>
        <td>{name}</td>
        <td>{stars}</td>
      </tr>
    );
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Repo</th>
            <th>Author</th>
            <th>Stars</th>
          </tr>
        </thead>
        <tbody>
          {this.props.repo.map(this.renderFavorite)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ repo }) {
  return { repo };
}

export default connect(mapStateToProps)(FavoriteList);
