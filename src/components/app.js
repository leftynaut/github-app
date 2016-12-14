import React, { Component } from 'react';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import SearchBar from '../containers/search_bar';

export default class App extends Component {
  render() {
    return (
      <div>
        <Toolbar>
          <ToolbarTitle text="Github Favorites" />
          <SearchBar {...this.props} />
        </Toolbar>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.function
};
