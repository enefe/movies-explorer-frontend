import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './MoviesCard.css';

function MoviesCard(props) {
    const [isLiked, setIsLiked] = React.useState(false);

/*     const handleLikeClick = () => {
        setIsLiked(true);
    } */

    const onMovieLike = () => {
        props.onMovieLike(props.movie);
        setIsLiked(!isLiked);
    }

    const onMovieDelete = () => {
        props.onMovieDelete(props.movie);
    }
    console.log(props.movie);

    const cardLikeButtonClassName = ( `movies-card__like ${isLiked ? 'movies-card__like_active' : 'movies-card__like'}`);

    return (
            <div className="movies-card">
                <img className="movies-card__image" src={`https://api.nomoreparties.co${props.movie.image.url}`} alt="Картинка" />
                <div className="movies-card__container">
                    <div className="movies-card__movie">
                        <h2 className="movies-card__name">{props.movie.nameRU}</h2>
                        <p className="movies-card__duration">{props.movie.duration}</p>
                    </div>
                    <Switch>
                        <Route exact path="/movies">
                            <button onClick={onMovieLike} className={cardLikeButtonClassName} /* className="movies-card__like_active movies-card__like" */ type="button"></button>
                        </Route>
                        <Route exact path="/saved-movies">
                            <button onClick={onMovieDelete} className="movies-card__like_delete" type="button"></button>
                        </Route>
                    </Switch>
                </div>
            </div>
    )
}

export default MoviesCard;