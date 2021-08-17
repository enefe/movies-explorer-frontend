import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies(props) {
    return (
        <div className="content">
            <SearchForm setValue={props.setValue} />
            <FilterCheckbox />
            <SavedMoviesCardList filterSavedMovies={props.filterSavedMovies} onMovieDelete={props.onMovieDelete} />
            <Footer />
        </div>
    )
}

export default SavedMovies;

