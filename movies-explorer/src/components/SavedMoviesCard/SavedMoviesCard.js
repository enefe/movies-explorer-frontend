import React from 'react';

import '../MoviesCard/MoviesCard.css';

function SavesMoviesCard(props) {

    const onMovieDelete = () => {
        props.onMovieDelete(props.savedMovie);
    }

    return (
            <div className="movies-card">
                <img className="movies-card__image" src={`https://api.nomoreparties.co${props.savedMovie.image.url}`} alt="Картинка" />
                <div className="movies-card__container">
                    <div className="movies-card__movie">
                        <h2 className="movies-card__name">{props.savedMovie.nameRU}</h2>
                        <p className="movies-card__duration">{props.savedMovie.duration}</p>
                    </div>
                    <button onClick={onMovieDelete} className="movies-card__like_delete" type="button"></button>
                </div>
            </div>
    )
}

export default SavesMoviesCard;