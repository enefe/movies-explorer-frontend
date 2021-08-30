import React from 'react';
import './SearchForm.css';

import icon from '../../images/icon.svg';
import searchImg from '../../images/search.svg';

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
/*     const [search, setSearch] = React.useState('');

    function handleInput() {
        return (e) => setSearch(e.target.value);
    }

    function handleSearchMovie(e) {
        e.preventDefault();

        props.onSearchMovie(search);
    }

    function handleClick() {
        return (e) => handleSearchMovie(e);
    }

    React.useEffect(() => {
            props.onSearchMovie(search);
    }, [props.short]); */


    return (
        <form onSubmit={handleSubmit} className="search-form">
            <img className="search-form__image" src={icon} alt="Поиск" />
            <input ref={inputEl} /* onInput={handleInput} */ placeholder="Фильм" className="search-form__input" id="movie" name="movie" type="text" defaultValue='' />
            {validate}
            <button type="submit" /* type="button" onClick={handleClick} */ className="search-form__button">
                <img className="search-form__search" src={searchImg} alt="Поиск" />
            </button>
        </form>
    )
}

export default SearchForm;
