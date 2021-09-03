import React from 'react';
import logo from '../../images/logo.svg';
import burger from '../../images/burger.svg';
import profile from '../../images/profile.svg';
import { Route, Switch, Link } from 'react-router-dom';

import './Header.css';

function Header(props) {
    return (
        <header className="header">
            <Link to="/"><img className="header__logo header__logo_auth" src={logo} alt="Логотип" /></Link>
            <Switch>

                {
                    !props.loggedIn ? (
                        <Route exact path="/">
                            <div className="header__signs">
                                <Link to="signup" className="header__signup">Регистрация</Link>
                                <Link to="signin" className="header__signin">Войти</Link>
                            </div>    
                        </Route>
                    ) : (
                        <Route exact path="/">
                            <div className="header__links">
                                <Link to="/movies"  className="header__link" onClick={props.onClose}>Фильмы</Link>
                                <Link to="/saved-movies"  className="header__link" onClick={props.onClose}>Сохренённые фильмы</Link>
                            </div>  
                        </Route>
                    )
                }

                <Route exact path="/profile">
                    <img className="header__burger" src={burger} alt="Навигация" onClick={props.onOpenNavigation} />
                    <div className="header__links">
                        <Link to="/movies"  className="header__link" onClick={props.onClose}>Фильмы</Link>
                        <Link to="/saved-movies"  className="header__link" onClick={props.onClose}>Сохренённые фильмы</Link>
                    </div>
                    <Link to="/profile" className="header__profile-link"><img src={profile} alt="Аккаунт" onClick={props.onClose} className="header__image-profile" /></Link>
                </Route>
                <Route exact path="/movies">
                    <img className="header__burger" src={burger} alt="Навигация" onClick={props.onOpenNavigation} />
                    <div className="header__links">
                        <Link to="/movies"  className="header__link" onClick={props.onClose}>Фильмы</Link>
                        <Link to="/saved-movies"  className="header__link" onClick={props.onClose}>Сохренённые фильмы</Link>
                    </div>
                    <Link to="/profile" className="header__profile-link"><img src={profile} alt="Аккаунт" onClick={props.onClose} className="header__image-profile" /></Link>
                </Route>
                <Route exact path="/saved-movies">
                    <img className="header__burger" src={burger} alt="Навигация" onClick={props.onOpenNavigation} />
                    <div className="header__links">
                        <Link to="/movies"  className="header__link" onClick={props.onClose}>Фильмы</Link>
                        <Link to="/saved-movies"  className="header__link" onClick={props.onClose}>Сохренённые фильмы</Link>
                    </div>
                    <Link to="/profile" className="header__profile-link"><img src={profile} alt="Аккаунт" onClick={props.onClose} className="header__image-profile" /></Link>
                </Route>
            </Switch>
        </header>
    )
}

export default Header;