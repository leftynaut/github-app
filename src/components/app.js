import React, { Component } from 'react';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';

export default class App extends Component {
  render() {
    return (
      <div>
        <Toolbar>
          <ToolbarTitle text="Github Favorites" />
        </Toolbar>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.obj
};
