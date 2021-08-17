import React from 'react';

import '../MoviesCardList/MoviesCardList.css';
import SavesMoviesCard from '../SavedMoviesCard/SavedMoviesCard';

function SavedMoviesCardList(props) {
    return (
        <section className="movies-card-list">
            <div className="movies-card-list__cards">
                {
                    props.filterSavedMovies.map((item) => {
                        return (
                            <SavesMoviesCard savedMovie={item} key={item._id} onMovieDelete={props.onMovieDelete} />
                        )
                    })
                }
            </div>
        </section>
    )
};

export default SavedMoviesCardList;