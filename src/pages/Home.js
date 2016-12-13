import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>This is the home page.</h1>
        <p>It is currently a stateless function. If you wish to use
          any lifecycle methods here (which you likely will) you need to
        make this a class component instead.</p>
        <hr />
        <p> {this.props.message} </p>
      </div>
    );
  }
}

HomePage.propTypes = {
  message: React.PropTypes.string
};


/**
 * As your Redux state gets larger, you'll want to avoid
 * passing the entire state object to your components when
 * they only need a slice of the state.
 */

export default connect(state => state)(HomePage);
