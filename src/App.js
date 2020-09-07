import React from 'react';

import { Auth0Provider } from "@auth0/auth0-react";

import { Switch, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component'
import Register from './pages/register/register'
import Profile from './pages/user-profile/user-profile.component'

import './App.scss';



function App() {
  return (
    <div className="App">
        <Auth0Provider
    domain="dev-it-capif.eu.auth0.com"
    clientId="ixp982QrjNUlGFgUVNuCdRdmptwO4bY7"
    redirectUri={window.location.origin}
  >
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
      </Auth0Provider>
    </div>
  );
}

export default App;
