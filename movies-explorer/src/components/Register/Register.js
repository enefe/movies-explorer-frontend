import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

import './Register.css';

function Register(props) {
    const [state, setState] = React.useState({name: '', email: '', password: ''});

    function handleChange (e) {
        const {name, value} = e.target;
        setState(state => ({...state, [name]: value}));
    }

    function handleSubmit (e) {
        e.preventDefault();
        props.onRegister(state.name, state.email, state.password);
    } 

    return (
        <div className="auth">
            <div className="auth__container">
                <Link to="/"><img className="auth__image" src={logo} alt="Логотип" /></Link>
                <h2 className="auth__title">Добро пожаловать!</h2>
            </div>
            <form onSubmit={handleSubmit} className="auth__form">
                <p className="auth__name">Имя</p>
                <input placeholder="" className="auth__input" required id="name" name="name" type="text" defaultValue={state.name} onChange={handleChange} />
                <p className="auth__name">Email</p>
                <input placeholder="" className="auth__input" required id="email" name="email" type="text" defaultValue={state.email} onChange={handleChange} />
                <p className="auth__name">Пароль</p>
                <input placeholder="" className="auth__input" required id="password" name="password" type="password" defaultValue={state.password} onChange={handleChange} />
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