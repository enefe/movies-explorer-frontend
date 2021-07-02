import React from 'react';
import './SearchForm.css';

import icon from '../../images/icon.svg';
import search from '../../images/search.svg';

function SearchForm(props) {
    return (
        <div className="search-form">
            <img className="search-form__image" src={icon} alt="Поиск" />
            <input placeholder="Фильм" className="search-form__input" required id="movie" name="movie" type="text" value='' />
            <button className="search-form__button">
                <img className="search-form__search" src={search} alt="Поиск" />
            </button>
        </div>
    )
}

export default SearchForm;
