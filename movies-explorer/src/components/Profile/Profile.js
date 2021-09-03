/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useFormValidation from "../../utils/useFormValidation";

function Profile(props) {
    const user = React.useContext(CurrentUserContext);
/* 
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    React.useEffect(() => {
        setName(user.name || '');
        setEmail(user.email || '');
    }, [user]);

    const handelClickOut = () => {
        props.handelClickLogout();
    }

    const handelSubmit = (e) => {
        e.preventDefault();

        props.onUpdateUser({
            name,
            email
        });
    } */

    const { values, errors, valid, handleChange } = useFormValidation({ email: user.email, name: user.name });

    const [isValues, setisValues] = React.useState(false);

    function checkValues() {
        /* debugger; */
        if (user.email === values.email && user.name === values.name) {
            setisValues(false);
        } else {
            setisValues(true);
        }
    }

    React.useEffect(() => {
        checkValues();
    }, [handleChange]);

    function handleSubmit(evt) {
        evt.preventDefault();
        props.onUpdateUser(values);
    }

    const handelClickOut = () => {
        props.handelClickLogout();
    }

    return (
        <div className="profile">
            <h2 className="profile__title">Привет, {props.userData.name}!</h2>
            <form className="profile__form" onSubmit={handleSubmit}>
                <span className="profile__error">{errors.name}</span>
                <div className="profile__data">
                    <p className="profile__info">Имя</p>
                    <input onChange={handleChange} placeholder="" className={`profile__input ${errors.name && "profile__input_invalid"}`} required id="name" name="name" type="text" defaultValue={values.name || ''} minLength="3" />
                </div>
                <span className="profile__error">{errors.email}</span>
                <div className="profile__data">
                    <p className="profile__info">Email</p>
                    <input onChange={handleChange} placeholder="" className={`profile__input ${errors.email && "profile__input_invalid"}`} required id="email" name="email" type="email" defaultValue={values.email || ''} />
                </div>
                <button onClick={props.onInfoTooltip} className={valid && isValues ? "profile__edit" : "profile__edit profile__edit_disable"} disabled={!valid && !isValues} type="submit">Редактировать</button>
            </form>
            <Link to="signin"><button onClick={handelClickOut} className="profile__exit">Выйти из аккаунта</button></Link>
        </div>
    )
}

export default Profile;