import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import './App.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as auth from '../../utils/auth';
import {api} from '../../utils/MainApi';
import {apiMovies} from '../../utils/MoviesApi';

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
  const [loggedIn, setLoggedIn] = React.useState(false);

  function handleLogin() {
    setLoggedIn(true);
  }

  // Получение информации о профиле:

  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    getUserInfo();
  }, [loggedIn]);

  const getUserInfo = () => {
    if (loggedIn) {
        api.getUserInfo()
        .then((res) => {
            setCurrentUser(res.data);
        })
        .catch((err) => {
             console.log(err);
        });
    }
  }

  // Попап с навигацией:

  const [isNavigationOpen, setNavigationOpen] = React.useState(false);

  function handleNavigationBurgerClick() {
    setNavigationOpen(true);
  }

  function closeAllPopups() {
    setNavigationOpen(false);
  }

  const history = useHistory();

  // Редактирование профиля:

  function handleUpdateUser(data) {
    api.setUserInfo(data)
        .then((user) => {
            setCurrentUser(user);
        })
        .catch((err) => {
            console.log(err);
       });
  }

  // Получение карточек с фильмами:

  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    getMovies();
  }, [loggedIn])

  const getMovies = () => {
    if (loggedIn) {
        apiMovies.getMovies()
        .then((res) => {
            const movies = res.map((item) => {
                return {
                    country: item.country,
                    director: item.director,
                    duration: item.duration,
                    year: item.year,
                    description: item.description,
                    image: item.image,
                    trailer: item.trailer,
                    thumbnail: item.thumbnail,
                    owner: item.owner,
                    movieId: item.movieId,
                    nameRU: item.nameRU,
                    nameEN: item.nameEN
                }
            })
            setMovies(movies);
        })
        .catch((err) => {
            console.log(err);
        })
    }
  }

  // Поиск фильмов:

  const [value, setValue] = React.useState('');
  
  const filterMovies = movies.filter((movie) => {
    return movie.nameRU.toLowerCase().includes(value.toLowerCase());
  })
  
/*   // Чекбокс короткометражек:

  const [short, setShort] = React.useState(false);

  const filterDuration = movies.filter((movie) => {
     if (movie.duration >= 40) {
      return setShort(true);
    };
  }) */

  // Отображение сохраненных фильмов:

  const [savedMovies, setSavedMovies] = React.useState([]);

  React.useEffect(() => {
    getSavedMovies();
  }, [loggedIn])

  function getSavedMovies() {
    if (loggedIn) {
      api.getMovies()
      .then((res) => {
        const savedMovies = res.map((item) => {
          return {
              country: item.country,
              director: item.director,
              duration: item.duration,
              year: item.year,
              description: item.description,
              image: item.image,
              trailer: item.trailer,
              thumbnail: item.thumbnail,
              owner: item.owner,
              movieId: item.movieId,
              nameRU: item.nameRU,
              nameEN: item.nameEN
          }
      })
        setSavedMovies(savedMovies);
      })
      .catch((err) => {
        console.log(err);
      })
    }
    
  }

  const filterSavedMovies = savedMovies.filter((savedMovie) => {
    return savedMovie.nameRU.toLowerCase().includes(value.toLowerCase());
  })

/*   function getSavedMovies() {
    const jwt = localStorage.getItem("jwt");
    api.getMovies(jwt)
      .then((res) => {
        setSavedMovie(res);
      })
      .catch((err) => {
        console.log(err);
      })
  } */

  // Добавление фильма:

  React.useEffect(() => {
    handleAddMovie();
  }, [loggedIn])

  function handleAddMovie(movie) {
    api.addMovie(movie)
      .then((res) => {
        console.log(res);
        setSavedMovies(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Удаление фильма:

  function handleMovieDelete(movie) {
    api.deleteMovie(movie)
        .then(() => {
            setMovies(movies.filter(c => c.movieId !== movie.movieId));
        })
        .catch((err) => {
            console.log(err);
        })
}

  // Авторизация и регистрация:

  function onRegister(name, email, password) {
    auth.register(name, email, password)
        .then((res) => {
            if (res.data._id) {
                history.push('/movies');
            } 
        })
        .catch((err) => {
            console.log(err);
        });
  }

  function onLogin(email, password) {
    auth.login(email, password)
        .then((data) => {
            if (data.token){
                localStorage.setItem('token', data.token);
                history.push('/movies');
                handleLogin();
                return data;
            } else {
                return;
            }
        })
        .catch((err) => console.log(err));
  }

  const [userData, setUserData] = React.useState('');

  function tokenCheck() {
    const token = localStorage.getItem('token');
    if (token) {
        auth.getContent(token)
            .then((res) => {
                console.log(res);
                if (res.data) {
                    setUserData(res.data);
                    setLoggedIn(true);
                    history.push('/movies');
                }
            })
            .catch((err) => localStorage.removeItem('token'));
    }
  }

  function handelClickLogout(){
    localStorage.removeItem('token');
  }

  React.useEffect(() => {
    tokenCheck();
  }, [])

  /*     const jwt = localStorage.getItem("jwt"); */

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header onOpenNavigation={handleNavigationBurgerClick} />

        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <ProtectedRoute
            path="/movies"
            loggedIn={loggedIn}
            component={Movies}
            filterMovies={filterMovies}
            /* filterDuration={filterDuration} */
            setValue={setValue}
            onMovieLike={handleAddMovie}
            onMovieDelete={handleMovieDelete}
          />

          <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
            filterSavedMovies={filterSavedMovies}
            setValue={setValue}
            onMovieDelete={handleMovieDelete}
          />

          <ProtectedRoute
            path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            userData={userData}
            handelClickLogout={handelClickLogout}
            onUpdateUser={handleUpdateUser}
          />

          <Route path="/signin">
            <Login onLogin={onLogin} />
          </Route>

          <Route path="/signup">
            <Register onRegister={onRegister} />
          </Route>

          <Route path="*">
            <PageNotFound />
          </Route>

          <Route exact path="/">
            {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/signin" />}
          </Route> 
        </Switch>

      

        <Navigation isOpen={isNavigationOpen} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
