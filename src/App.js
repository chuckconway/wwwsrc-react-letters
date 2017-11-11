import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import LandingPage from './components/home/LandingPage';
import SignIn from './components/authentication/SignIn';
import SignOut from './components/authentication/SignOut';
import People from './components/people/People';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <header></header>

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signout" component={SignOut} />
          <Route exact path="/people" component={People} />
        </Switch>
        </div>

    </Router>
    );
  }
}

export default App;
