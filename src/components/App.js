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
          <div>
            <Route
              path='/'
              exact
              render={() => (this.props.authedUser ? <Dashboard /> : <Login />)}
            />
            <Route path='/question/:id' exact component={QuestionPage} />
            <Route
              path='/add'
              exact
              render={() =>
                this.props.authedUser ? <NewQuestion /> : <NotLoggedIn />
              }
            />
            <Route path='/poll/:id' exact component={Poll} />
            <Route path='/pollresults/:id' exact component={PollResults} />
            <Route
              path='/leaderboard'
              exact
              render={() =>
                this.props.authedUser ? <Leaderboard /> : <NotLoggedIn />
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
