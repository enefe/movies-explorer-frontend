import React from 'react';
import './SearchForm.css';

import icon from '../../images/icon.svg';
import search from '../../images/search.svg';

function SearchForm(props) {
    const inputEl = React.useRef(null);

    let validate = '';

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (inputEl.current.value === '') {
            validate = <p className="search-form__validate">Нужно ввести ключевое слово</p>
        } else {
            validate = '';
            props.setValue(inputEl.current.value);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <img className="search-form__image" src={icon} alt="Поиск" />
            <input ref={inputEl} placeholder="Фильм" className="search-form__input" /* required */ id="movie" name="movie" type="text" defaultValue='' />
            {validate}
            <button type="submit" className="search-form__button">
                <img className="search-form__search" src={search} alt="Поиск" />
            </button>
        </form>
    )
}

export default SearchForm;
