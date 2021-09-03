import React from 'react';
import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies(props) {

    const onDeleteSavedMovie = (movie) => {
        /* debugger; */
        props.savedMovies.forEach((c) => {
            if (c._id === movie._id) {
                props.onMovieDelete(movie);
            }
        });
    }

    return (
        <div className="content">
            <SearchForm setValue={props.setValue} short={props.short} onShortMovies={props.onShortMovies} onSearchMovie={props.onSearchMovie} />
            <FilterCheckbox onShortMovies={props.onShortMovies} />
            {props.preloader 
                ? <Preloader /> 
                : <MoviesCardList filterMovies={props.filterMovies} short={props.short} movies={props.movies} filterSavedMovies={props.filterSavedMovies} isSavedMovie={props.isSavedMovie} onMovieLike={props.onMovieLike} onMovieDelete={onDeleteSavedMovie} />
            }
            <Footer />
        </div>
        
    )
}

export default Movies;