import React from 'react';
import { Route } from 'react-router-dom';

import './MoviesCard.css';

function MoviesCard(props) {
    const [isLiked, setIsLiked] = React.useState(false);

/*     const onMovieLike = () => {
        props.onMovieLike(props.movie);
        setIsLiked(!isLiked);
    } */

    const onMovieDelete = () => {
        /* debugger; */
        props.onMovieDelete(props.movie);
    }

/*     const onSavedMovie = () => {
        props.isSavedMovie(props.movie);
    } */

    /* const newMovie = props.filterSavedMovies. */

    const onClickLike = () => {
        /* debugger; */
        if (isLiked === false) {
            props.onMovieLike(props.movie);
            setIsLiked(!isLiked);
        } else {
            /* props.onMovieDelete(props.filterSavedMovies); */
            props.filterSavedMovies.forEach((movie) => {
                    props.onMovieDelete(movie);
                }
            );
            setIsLiked(!isLiked);
        }
    } 

    const cardLikeButtonClassName = ( `movies-card__like ${isLiked ? 'movies-card__like_active' : 'movies-card__like'}`);

    return (
            <div className="movies-card">
                <Route exact path="/movies">
                    <img className="movies-card__image" src={`https://api.nomoreparties.co${props.movie.image.url}`} alt="Картинка" />
                </Route>
                <Route exact path="/saved-movies">
                    <img className="movies-card__image" src={props.movie.image} alt="Картинка" />
                </Route>
                <div className="movies-card__container">
                    <div className="movies-card__movie">
                        <h2 className="movies-card__name">{props.movie.nameRU}</h2>
                        <p className="movies-card__duration">{props.movie.duration}</p>
                    </div>
                    { 
                        props.pathSavedMovie 
                        ? (
                            <button onClick={onMovieDelete} className="movies-card__like_delete" type="button"></button>
                        ) : (
                            <button /* onClick={onSavedMovie ? onMovieLike : onMovieDelete} */ onClick={onClickLike} className={cardLikeButtonClassName} type="button"></button>
                        )
                    }    
                </div>
            </div>
    )
}

export default MoviesCard;