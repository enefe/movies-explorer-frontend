import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile(props) {
    const user = React.useContext(CurrentUserContext);

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    React.useEffect(() => {
        setName(user.name || '');
        setEmail(user.email || '');
    }, [user]);

    const handelClickOut = () => {
        props.handelClickLogout();
    }

    const handelClickEdit = (e) => {
        e.preventDefault();

        props.onUpdateUser({
            name,
            email
        });
    }

    return (
        <div className="profile">
            <h2 className="profile__title">Привет, {name}!</h2>
            <div className="profile__data">
                <p className="profile__info">Имя</p>
                <input onChange={e => setName(e.target.value)} placeholder="" className="profile__input" required id="name" name="name" type="text" defaultValue={name} />
            </div>
            <div className="profile__data">
                <p className="profile__info">Email</p>
                <input onChange={e => setEmail(e.target.value)} placeholder="" className="profile__input" required id="email" name="email" type="text" defaultValue={email} />
            </div>
            <form onSubmit={handelClickEdit}>
                <button className="profile__edit" type="submit">Редактировать</button>
            </form>
            <Link to="signin"><button onClick={handelClickOut} className="profile__exit">Выйти из аккаунта</button></Link>
        </div>
    )
}

export default Profile;