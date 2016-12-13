import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn} from 'material-ui/Table';

class FavoriteList extends Component {

  renderFavorite(repoData) {
    const author = repoData.owner.login;
    const name = repoData.name;
    const stars = repoData.stargazers_count;
    return (
      <TableRow>
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
      <Table onRowSelection={(i) => {console.dir(this.props.repo[i[0]]);}}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Repo</TableHeaderColumn>
            <TableHeaderColumn>Author</TableHeaderColumn>
            <TableHeaderColumn>Stars</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.props.repo.map(this.renderFavorite)}
        </TableBody>
      </Table>
    );
  }
}

function mapStateToProps({ repo }) {
  return { repo };
}

FavoriteList.propTypes = {
  repo: React.PropTypes.array
};

export default connect(mapStateToProps)(FavoriteList);
