import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import { Nav } from './Nav';
import Login from './Login';
import Dashboard from './Dashboard';
import NewQuestion from './NewQuestion';
import QuestionPage from './QuestionPage';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <div>
          <Nav />
          {this.props.loading ? null : (
            <Login />
            // <div>
            //   <Route path='/' exact component={Dashboard} />
            //   <Route path='/question/:id' exact component={QuestionPage} />
            //   <Route path='/new' exact component={NewQuestion} />
            // </div>
          )}
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);
