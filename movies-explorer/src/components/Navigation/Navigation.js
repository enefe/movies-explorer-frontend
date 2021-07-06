import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../images/profile.svg';
import close from '../../images/close.svg';


import './Navigation.css';

function Navigation(props) {
    return (
                <div className={`navigation ${props.isOpen && 'navigation_opened'}`}>
                    <div className="navigation__container">
                        <img className="navigation__close" src={close} alt="Закрытие навигации" onClick={props.onClose} />
                        <nav className="navigation__menu">
                            <ul className="navigation__list">
                                <li>
                                    <Link to="/" className="navigation__link" onClick={props.onClose}>Главная</Link>
                                </li>
                                <li>
                                    <Link to="/movies"  className="navigation__link" onClick={props.onClose}>Фильмы</Link>
                                </li>
                                <li>
                                    <Link to="/saved-movies"  className="navigation__link" onClick={props.onClose}>Сохренённые фильмы</Link>
                                </li>
                            </ul>
                            <Link to="/profile" className="navigation__profile"><img src={profile} alt="Аккаунт" onClick={props.onClose} /></Link>
                        </nav>
                    </div>
                </div>    
    )
}

export default Navigation;