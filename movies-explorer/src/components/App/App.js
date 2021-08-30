/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Route, Switch, Redirect, useHistory/* , useLocation */ } from 'react-router-dom';
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
  const [preloader, setPreloader] = React.useState(true);

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

  /* const location = useLocation(); */
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    getMovies();
  }, [loggedIn/* , location */])

  const getMovies = () => {
    if (loggedIn /* && location.pathname === '/movies' */) {
        setPreloader(true);
        apiMovies.getMovies()
        .then((res) => {
            localStorage.setItem('movies', JSON.stringify(res));
            setMovies(JSON.parse(localStorage.getItem('movies')));
            /* const movies = res.map((item) => {
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
            setMovies(movies); */
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => setTimeout(() => {
            setPreloader(false);
        }, 1000))
    }
  }

  // Поиск фильмов:

  const [short, setShort] = React.useState(false);
  const [value, setValue] = React.useState('');
  
  const moviesJwt = JSON.parse(localStorage.getItem('movies'));
  const filterMovies = moviesJwt.filter((movie) => {
    return (movie.nameRU.toLowerCase().includes(value.toLowerCase())) && (short ? movie.duration < 40 : movie.duration >= 40);
  })

/*   // Поиск фильмов: 

  const [short, setShort] = React.useState(false);

  function onSearchMovie(movie) {
    if (movie) {

        let jwt;
        let getAllMovies;

        if (location.pathname === '/movies') {
            jwt = 'movies';
            getAllMovies = setMovies;
        } else {
            jwt = 'savedMovies';
            getAllMovies = setSavedMovies;
        }

        const moviesJwt = JSON.parse(localStorage.getItem(jwt));
        const movies = moviesJwt.filter((item) => (item.nameRU.toLowerCase().includes(movie.toLowerCase())) && (short ? item.duration < 40 : item.duration >= 40));
        getAllMovies(movies);
    }
  } */
  
  // Чекбокс короткометражек:

  const onShortMovies = () => {
    setShort(!short);
  }

  // Отображение сохраненных фильмов:

  const [savedMovies, setSavedMovies] = React.useState([]);

  React.useEffect(() => {
    getSavedMovies();
  }, [loggedIn, /* location, */ currentUser])

  function getSavedMovies() {
    if (loggedIn /* && (location.pathname === '/movies' || location.pathname === '/saved-movies') */) {
      setPreloader(true);
      api.getMovies()
      .then((movies) => {
        const ownerAddMovie = movies.filter((item) => {
          return (item.owner === currentUser._id);
        });

        localStorage.setItem('savedMovies', JSON.stringify(ownerAddMovie));

        setSavedMovies(JSON.parse(localStorage.getItem('savedMovies')));

      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setTimeout(() => {
        setPreloader(false);
      }, 1000))
    }
  }

  // Поиск сохраненных фильмов
  /* const savedMoviesJwt = localStorage.getItem('savedMovies'); */
  const filterSavedMovies = savedMovies.filter((savedMovie) => {
    return savedMovie.nameRU.toLowerCase().includes(value.toLowerCase()) && (short ? savedMovie.duration < 40 : savedMovie.duration >= 40);
  })

  // Добавление фильма:

  function handleAddMovie(movie) {
    /* debugger; */
    api.addMovie(movie)
      .then((newMovie) => {
        localStorage.setItem('savedMovies', JSON.stringify(newMovie));

        setSavedMovies([JSON.parse(localStorage.getItem('savedMovies')), ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Удаление фильма:

  function handleMovieDelete(movie) {
    /* debugger; */
    console.log(movie);
    api.deleteMovie(movie)
        .then(() => {
            localStorage.setItem('savedMovies', JSON.stringify(savedMovies.filter((item) => item._id !== movie._id)));

            setSavedMovies(JSON.parse(localStorage.getItem('savedMovies')));
        })
/*         const movieId = savedMovies.find((item) => item.id === movie.id)._id;
        api.deleteMovie(movieId)
          .then(() => {
            const newMovie = savedMovies.filter((c) => !(c._id === movieId));
            setSavedMovies(newMovie);
            localStorage.setItem("savedMovies", JSON.stringify(newMovie));
          })   */ 
/*         api.deleteMovie(movie)
          .then(() => {
              const newSavedMovies = savedMovies.filter((savedMovie) => savedMovie.movieId !== (movie.id || movie.movieId));
              setSavedMovies(newSavedMovies);
          }) */
          .catch((err) => {
            console.log(err);
          })
  }

  // Проверка сохраненного фильма:

  function isSavedMovie(movie) {
    debugger;
    console.log(movie);
    savedMovies.some((с) => с._id === movie._id);
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

  // Проверка токена:

  function tokenCheck() {
    const token = localStorage.getItem('token');
    if (token) {
        auth.getContent(token)
            .then((res) => {
                if (res.data) {
                    setUserData(res.data);
                    setLoggedIn(true);
                    history.push('/movies');
                }
            })
            .catch((err) => localStorage.removeItem('token'));
    }
  }

  // Удаление токена при выходе из аккаунта:

  function handelClickLogout(){
    localStorage.removeItem('token');
  }

  React.useEffect(() => {
    tokenCheck();
  }, [])

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
            preloader={preloader}
            movies={movies}
            savedMovies={savedMovies}
            component={Movies}
            filterMovies={filterMovies}
            filterSavedMovies={filterSavedMovies}
            short={short}
            onShortMovies={onShortMovies}
            /* onSearchMovie={onSearchMovie} */
            setValue={setValue}
            isSavedMovie={isSavedMovie}
            onMovieLike={handleAddMovie}
            onMovieDelete={handleMovieDelete}
          />

          <ProtectedRoute
            path="/saved-movies"
            movies={movies}
            savedMovies={savedMovies}
            loggedIn={loggedIn}
            preloader={preloader}
            component={SavedMovies}
            filterMovies={filterMovies}
            filterSavedMovies={filterSavedMovies}
            short={short}
            onShortMovies={onShortMovies}
            /* onSearchMovie={onSearchMovie} */
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
