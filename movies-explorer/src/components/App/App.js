import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Navigation from '../Navigation/Navigation';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {

  const [isNavigationOpen, setNavigationOpen] = React.useState(false);

  function handleNavigationBurgerClick() {
    setNavigationOpen(true);
  }

  function closeAllPopups() {
    setNavigationOpen(false);
  }

  return (
    <div className="page">
      <Header onOpenNavigation={handleNavigationBurgerClick} />

      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/movies">
          <Movies />
        </Route>

        <Route path="/saved-movies">
          <SavedMovies />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/signin">
          <Login />
        </Route>

        <Route path="/signup">
          <Register />
        </Route>

        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>

      

      <Navigation isOpen={isNavigationOpen} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
