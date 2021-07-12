import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './MoviesCard.css';

function MoviesCard(props) { 
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
                            <button className="movies-card__like movies-card__like_active" type="button"></button>
                        </Route>
                        <Route exact path="/saved-movies">
                            <button className="movies-card__like_delete" type="button"></button>
                        </Route>
                    </Switch>
                </div>
            </div>

        
    )
}

export default MoviesCard;