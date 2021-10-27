import React from 'react';
import { BrowserRouter as Switch, Route, } from "react-router-dom";
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Registration from './Components/Registration';
import UserContext from './contexts/UserContext';
import RestrictedRoute from './utils/RestrictedRoute';
import { connect } from "react-redux";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      authenticated: false,
      userDetails: null,
      logginStatus: true,
      login: async () => {
        // const userDetails = await AuthService.GetCurrentLoggedUserDetails();
        this.setState({ authenticated: true });
      },
      logout: () => this.setState({ authenticated: false, userDetails: null }),
    };

  }

  render() {
    return (
      <>
        <UserContext.Provider value={this.state}>
          <Switch>

            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/registration">
              <Registration />
            </Route>
            <Route exact path="/">
              <Login />
            </Route>
            <RestrictedRoute path={`/dashboard`} component={Dashboard}   />
          </Switch>
        </UserContext.Provider>
      </>
    );
  }
}

export default App;
