import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

import '../MoviesCardList/MoviesCardList.css';

function SavedMoviesCardList(props) {
    return (
        <section className="movies-card-list">
            <div className="movies-card-list__cards">
                {
                    props.filterMovies.map((item) => {
                        return (
                            <MoviesCard movie={item} key={item._id} onMovieLike={props.onMovieLike} onMovieDelete={props.onMovieDelete} />
                        )
                    })
                }
            </div>
        </section>
    )
};

export default SavedMoviesCardList;