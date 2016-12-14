import React, { Component } from 'react';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import { Link } from 'react-router';
import SearchBar from '../containers/search_bar';

export default class App extends Component {
  componentWillMount() {
  }

  // TODO: replace Toolbar with MaterialUI App Bar

  render() {
    return (
      <div>
        <Toolbar>
          <Link to="/"><ToolbarTitle text="Github Favorites" /></Link>
          <SearchBar {...this.props} />
        </Toolbar>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node
};
