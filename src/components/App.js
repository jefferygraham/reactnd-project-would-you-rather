import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Header from './Header';
import Dashboard from './Dashboard';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <Header />
        {this.props.loading ? null : <Dashboard />}
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);
