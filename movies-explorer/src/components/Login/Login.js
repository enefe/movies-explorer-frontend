import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import useFormValidation from "../../utils/useFormValidation";

import './Login.css';

function Login(props) {
    const { values, errors, valid, handleChange, resetForm } = useFormValidation({});

    function handleSubmit(e) {
        e.preventDefault();
        props.onLogin(values.email, values.password);
        resetForm();
    }

/*     const [state, setState] = React.useState({email: '', password: ''});

    function handleChanges (e) {
        const {name, value} = e.target;
        setState(state => ({...state, [name]: value}));
    }

    function handleSubmit (e) {
        e.preventDefault();
        if (!state.email || !state.password) {
            return;
        }
        props.onLogin(state.email, state.password)
    } */

    return (
        <div className="auth">
            <div className="auth__container">
                <Link to="/"><img className="auth__image" src={logo} alt="Логотип" /></Link>
                <h2 className="auth__title">Рады видеть!</h2>      
            </div>
            <form onSubmit={handleSubmit} className="auth__form">
                <p className="auth__name">Email</p>
                <span className="auth__error">{errors.email}</span>
                <input placeholder="" className={`auth__input ${errors.email && "auth__input_invalid"}`} required id="email" name="email" type="email" defaultValue={values.email || ''} onChange={handleChange} autoComplete="off" />
                <p className="auth__name">Пароль</p>
                <span className="auth__error">{errors.password}</span>
                <input placeholder="" className={`auth__input ${errors.password && "auth__input_invalid"}`} required id="password" name="password" type="password" defaultValue={values.password || ''} onChange={handleChange} minLength="3" autoComplete="off" />
                <button type="submit" className={`auth__button ${!valid && "auth__button_disable"}`} disabled={!valid}>Войти</button>
            </form>
            <div className="auth__sign">
                <p className="auth__question">Ещё не зарегистрированы?</p>
                <Link to="signup" className="auth__signup">Регистрация</Link>
            </div>
        </div>
    )
}

export default Login;

