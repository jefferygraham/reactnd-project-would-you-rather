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
            {/* <Route path='/' exact component={Login} /> */}
            <Route path='/' exact component={Dashboard} />
            <Route path='/question/:id' exact component={QuestionPage} />
            <Route path='/add' exact component={NewQuestion} />
            <Route path='/poll/:id' exact component={Poll} />
            <Route path='/pollresults/:id' exact component={PollResults} />
            <Route path='/leaderboard' exact component={Leaderboard} />
          </div>
        </Fragment>
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
