import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies(props) {
    return (
        <div className="content">
            <SearchForm />
            <FilterCheckbox />
            <MoviesCardList />
            <Footer />
        </div>
    )
}

export default SavedMovies;

