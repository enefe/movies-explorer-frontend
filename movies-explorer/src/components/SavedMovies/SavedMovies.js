import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
/* import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList'; */
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function SavedMovies(props) {

    const onDeleteSavedMovie = (movie) => {
        /* debugger; */
        console.log(props.filterMovies);
        if (props.filterSavedMovies.some((c) => c._id === movie._id)) {
            props.onMovieDelete(movie);
        }
    }

    return (
        <div className="content">
            <SearchForm short={props.short} onShortMovies={props.onShortMovies} onSearchMovie={props.onSearchMovie} setValue={props.setValue} />
            <FilterCheckbox onShortMovies={props.onShortMovies} />
            {props.preloader
                ? <Preloader />
                : <MoviesCardList pathSavedMovie={true} filterMovies={props.filterSavedMovies} onMovieDelete={onDeleteSavedMovie} />
            }
            <Footer />
        </div>
    )
}

export default SavedMovies;

