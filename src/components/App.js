import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import Header from './Header';
import Login from './Login';
import Dashboard from './Dashboard';
import NewQuestion from './NewQuestion';
import QuestionPage from './QuestionPage';
import Poll from './Poll';
import PollResults from './PollResults';
import Leaderboard from './Leaderboard';
import NotLoggedin from './NotLoggedIn';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <div>
            <Route
              path='/'
              exact
              render={(props) =>
                this.props.authedUser ? <Dashboard /> : <Login />
              }
            />
            <Route
              path='/question/:id'
              exact
              render={(props) =>
                this.props.authedUser ? <QuestionPage /> : <NotLoggedin />
              }
            />
            <Route
              path='/add'
              exact
              render={(props) =>
                this.props.authedUser ? <NewQuestion /> : <NotLoggedin />
              }
            />
            <Route
              path='/poll/:id'
              exact
              render={(props) =>
                this.props.authedUser ? <Poll /> : <NotLoggedin />
              }
            />
            <Route
              path='/pollresults/:id'
              exact
              render={(props) =>
                this.props.authedUser ? <PollResults /> : <NotLoggedin />
              }
            />
            <Route
              path='/leaderboard'
              exact
              render={(props) =>
                this.props.authedUser ? <Leaderboard /> : <NotLoggedin />
              }
            />
          </div>
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
