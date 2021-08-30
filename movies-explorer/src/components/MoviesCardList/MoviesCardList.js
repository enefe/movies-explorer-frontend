import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

function MoviesCardList(props) {
    const {
        pathSavedMovie = false,
    } = props;

    const [visible, setVisible] = React.useState(6);

    const showMoreMovies = () => {
        /* debugger; */
        setVisible((movie) => movie + 6);
    };

    const buttonVisible = ( `${visible < props.filterMovies.length ? 'movies-card-list__button' : 'movies-card-list__not-button'}`);
    
    return (
        <section className="movies-card-list">
            <div className="movies-card-list__cards">
                {
                    props.filterMovies.slice(0, visible).map((item) => {
                        
                        return (
                            <MoviesCard filterSavedMovies={props.filterSavedMovies} pathSavedMovie={pathSavedMovie} movie={item} key={item._id || item.moviedId} isSavedMovie={props.isSavedMovie} onMovieLike={props.onMovieLike} onMovieDelete={props.onMovieDelete} />
                        )
                    })
                }
            </div>
                <button onClick={showMoreMovies} className={buttonVisible}>Ещё</button>
        </section>
    )
};

export default MoviesCardList;