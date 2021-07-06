import React from 'react';
import './Profile.css';

function Profile(props) {
    return (
        <div className="profile">
            <h2 className="profile__title">Привет, Виталий!</h2>
            <div className="profile__data">
                <p className="profile__info">Имя</p>
                <input placeholder="" className="profile__input" required id="name" name="name" type="text" value='Виталий' />
            </div>
            <div className="profile__data">
                <p className="profile__info">Email</p>
                <input placeholder="" className="profile__input" required id="email" name="email" type="text" value='pochta@yandex.ru' />
            </div>
            <button className="profile__edit">Редактировать</button>
            <button className="profile__exit">Выйти из аккаунта</button>
        </div>
    )
}

export default Profile;