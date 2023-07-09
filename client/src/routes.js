import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import App from './pages/App';
import Login from './pages/Login';
import Register from './pages/Register';
import Clothes from './pages/Clothes';
import ClothItemDetail from './pages/CarItemDetail';
import Favourites from './pages/Favourites';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/clothes" component={Clothes} />
      <Route exact path="/favourites" component={Favourites} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/clothes/:id" component={ClothItemDetail} />
      <Route
        exact
        path="/logout"
        render={() => {
          localStorage.setItem('DripHubToken', undefined);
          localStorage.setItem('DripHubUser', '');
          window.location.href = '/login';
        }}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
