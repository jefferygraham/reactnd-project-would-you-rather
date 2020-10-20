import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import Header from './Header';
import Login from './Login';
import Dashboard from './Dashboard';
import NewQuestion from './NewQuestion';
import QuestionPage from './QuestionPage';
import Leaderboard from './Leaderboard';
import PrivateRoute from './PrivateRoute';
import NotLoggedIn from './NotLoggedIn';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Route
            path='/'
            exact
            render={() => (this.props.authedUser ? <Dashboard /> : <Login />)}
          />
          <Route path='/login' exact component={NotLoggedIn} />
          <PrivateRoute path='/questions/:id' exact component={QuestionPage} />
          <PrivateRoute path='/add' exact component={NewQuestion} />
          <PrivateRoute path='/leaderboard' exact component={Leaderboard} />
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
