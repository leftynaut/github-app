import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchCommits } from '../actions/index';
import { Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn } from 'material-ui/Table';

import Info from './info';

class FavoriteList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      previous: null
    };

    this.renderInfo = this.renderInfo.bind(this);
    this.renderFavorite = this.renderFavorite.bind(this);
  }

  renderInfo(selection) {
    const repo = this.props.repo.favorites[selection[0]];
    if (repo) {
      this.props.fetchCommits(`${repo.owner.login}/${repo.name}`);
    }
    this.setState({selected: selection[0]});
    if (selection[0] !== undefined) {
      this.setState({
        previous: selection[0]
      });
    }
  }

  renderFavorite(repoData, i) {
    const author = repoData.owner.login;
    const name = repoData.name;
    const stars = repoData.stargazers_count;
    let bool;
    this.state.selected === i ? bool = true : bool = false;
    return (
      <TableRow key={i} selected={bool}>
        <TableRowColumn>{name}</TableRowColumn>
        <TableRowColumn>
          <Link to={`/author/${author}`}>{author}</Link>
        </TableRowColumn>
        <TableRowColumn>{stars}</TableRowColumn>
      </TableRow>
    );
  }

  render() {
    return (
      <div>
        <div>
          <Table onRowSelection={this.renderInfo}>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>Repo</TableHeaderColumn>
                <TableHeaderColumn>Author</TableHeaderColumn>
                <TableHeaderColumn>Stars</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              {this.props.repo.favorites.map(this.renderFavorite)}
            </TableBody>
          </Table>
        </div>
        <div>
          <Info
            {...this.props}
            selected={this.state.selected}
            previous={this.state.previous} />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ repo }) {
  return { repo };
}

FavoriteList.propTypes = {
  repo: React.PropTypes.any,
  fetchCommits: React.PropTypes.func
};

export default connect(mapStateToProps, { fetchCommits })(FavoriteList);
