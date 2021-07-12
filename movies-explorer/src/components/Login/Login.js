import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

import './Login.css';

function Login(props) {
    const [state, setState] = React.useState({email: '', password: ''});

    function handleChange (e) {
        const {name, value} = e.target;
        setState(state => ({...state, [name]: value}));
    }

    function handleSubmit (e) {
        e.preventDefault();
        if (!state.email || !state.password) {
            return;
        }
        props.onLogin(state.email, state.password)
    }

    return (
        <div className="auth">
            <div className="auth__container">
                <Link to="/"><img className="auth__image" src={logo} alt="Логотип" /></Link>
                <h2 className="auth__title">Рады видеть!</h2>      
            </div>
            <form onSubmit={handleSubmit} className="auth__form">
                <p className="auth__name">Email</p>
                <input placeholder="" className="auth__input" required id="email" name="email" type="text" value={state.email} onChange={handleChange} />
                <p className="auth__name">Пароль</p>
                <input placeholder="" className="auth__input" required id="password" name="password" type="password" value={state.password} onChange={handleChange} />
                <button type="submit" className="auth__button">Войти</button>
            </form>
            <div className="auth__sign">
                <p className="auth__question">Ещё не зарегистрированы?</p>
                <Link to="signup" className="auth__signup">Регистрация</Link>
            </div>
        </div>
    )
}

export default Login;

