import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import useFormValidation from "../../utils/useFormValidation";

import './Register.css';

function Register(props) {
/*     const [state, setState] = React.useState({name: '', email: '', password: ''});

    function handleChange (e) {
        const {name, value} = e.target;
        setState(state => ({...state, [name]: value}));
    }

    function handleSubmit (e) {
        e.preventDefault();
        props.onRegister(state.name, state.email, state.password);
    }  */
    const { values, errors, valid, handleChange, resetForm } = useFormValidation({});

    function handleSubmit(e) {
        e.preventDefault();
        props.onRegister(values);
        resetForm();
    }

    return (
        <div className="auth">
            <div className="auth__container">
                <Link to="/"><img className="auth__image" src={logo} alt="Логотип" /></Link>
                <h2 className="auth__title">Добро пожаловать!</h2>
            </div>
            <form onSubmit={handleSubmit} className="auth__form">
                <p className="auth__name">Имя</p>
                <span className="auth__error">{errors.name}</span>
                <input placeholder="" className={`auth__input ${errors.name && "auth__input_invalid"}`} required id="name" name="name" type="text" defaultValue={values.name || ''} onChange={handleChange} autoComplete="off" />
                <p className="auth__name">Email</p>
                <span className="auth__error">{errors.email}</span>
                <input placeholder="" className={`auth__input ${errors.email && "auth__input_invalid"}`} required id="email" name="email" type="email" defaultValue={values.email || ''} onChange={handleChange} autoComplete="off" />
                <p className="auth__name">Пароль</p>
                <span className="auth__error">{errors.password}</span>
                <input placeholder="" className={`auth__input ${errors.password && "auth__input_invalid"}`} required id="password" name="password" type="password" defaultValue={values.password || ''} onChange={handleChange} minLength="3" autoComplete="off" />
                <button type="submit" className={`auth__button ${!valid && "auth__button_disable"}`} disabled={!valid}>Зарегистрироваться</button>
            </form>
            <div className="auth__sign">
                <p className="auth__question">Уже зарегистрированы?</p>
                <Link to="signin" className="auth__signup">Войти</Link>
            </div>
        </div>
    )
}

export default Register;