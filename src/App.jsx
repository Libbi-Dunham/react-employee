import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Home from './views/Home/Home';
import Auth from './views/Auth/Auth';
import ConfirmEmail from './views/Auth/ConfirmEmail';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header from './components/Layout/Header';
import UserProfile from './views/UserProfile/UserProfile';

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Auth />
          </Route>
          <Route path="/register">
            <Auth isSigningUp={true} />
          </Route>
          <Route path="/confirm-email">
            <ConfirmEmail />
          </Route>
          <PrivateRoute path="/profile">
            <UserProfile />
          </PrivateRoute>
          <PrivateRoute path="/profile/edit"></PrivateRoute>
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}
