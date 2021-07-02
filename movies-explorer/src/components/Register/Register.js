import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

import './Register.css';

function Register(props) {
        return (
            <div className="auth">
                <Link to="/"><img className="auth__image" src={logo} alt="Логотип" /></Link>
                <h2 className="auth__title">Добро пожаловать!</h2>
                <form className="auth__form">
                    <p className="auth__name">Имя</p>
                    <input placeholder="" className="auth__input" required id="name" name="name" type="text" value='' />
                    <p className="auth__name">Email</p>
                    <input placeholder="" className="auth__input" required id="email" name="email" type="text" value='' />
                    <p className="auth__name">Пароль</p>
                    <input placeholder="" className="auth__input" required id="password" name="password" type="password" value='' />
                    <button type="submit" className="auth__button">Зарегистрироваться</button>
                </form>
                <div className="auth__sign">
                    <p className="auth__question">Уже зарегистрированы?</p>
                    <Link to="signin" className="auth__signup">Войти</Link>
                </div>
            </div>
    )
}

export default Register;