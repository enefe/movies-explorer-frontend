import React from 'react';
import './SearchForm.css';

import icon from '../../images/icon.svg';
import search from '../../images/search.svg';

function SearchForm(props) {
/*     const handleSubmit = (e) => {
        e.preventDefault();
        props.setValue(e.target.value);
    } */

/*     const handleChange = (e) => {
        props.setValue(e.target.value);
    } */

    return (
        <form /* onSubmit={handleSubmit} */ className="search-form">
            <img className="search-form__image" src={icon} alt="Поиск" />
            <input onChange={(e) => props.setValue(e.target.value)} /* onChange={handleChange} */ placeholder="Фильм" className="search-form__input" required id="movie" name="movie" type="text" defaultValue='' />
            <button type="submit" className="search-form__button">
                <img className="search-form__search" src={search} alt="Поиск" />
            </button>
        </form>
    )
}

export default SearchForm;
