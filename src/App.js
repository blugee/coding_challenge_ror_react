import React from 'react';
import { BrowserRouter as Switch, Redirect, Route, } from "react-router-dom";
import Login from './Route/Login';
import Dashboard from './Route/Dashboard';
import Registration from './Route/Registration';
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

  componentDidMount() {
    // this.setState({ authenticated: true });
  }

  render() {
    return (
      <>
        <UserContext.Provider value={this.state}>
          <Switch>
          <Route exact path={`/login`} render={props =>
                    !this.state.authenticated ? <React.Fragment><Login {...props} /></React.Fragment> : <Redirect to={`/dashboard`} />
                  } />
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
