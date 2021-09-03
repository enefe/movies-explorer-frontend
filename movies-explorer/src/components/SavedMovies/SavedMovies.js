import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function SavedMovies(props) {

    const onDeleteSavedMovie = (movie) => {
        /* debugger; */
        if (props.savedMovies.some((c) => c._id === movie._id)) {
            props.onMovieDelete(movie);
        }
    }

    return (
        <div className="content">
            <SearchForm short={props.short} onShortMovies={props.onShortMovies} onSearchMovie={props.onSearchMovie} setValue={props.setValue} />
            <FilterCheckbox onShortMovies={props.onShortMovies} />
            {props.preloader
                ? <Preloader />
                : <MoviesCardList pathSavedMovie={true} short={props.short} filterMovies={props.filterSavedMovies} movies={props.savedMovies} onMovieDelete={onDeleteSavedMovie} />
            }
            <Footer />
        </div>
    )
}

export default SavedMovies;

