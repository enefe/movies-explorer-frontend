import React from 'react';
import { Route, Switch } from 'react-router-dom';
import one from '../../images/one.png';
import two from '../../images/two.png';
import three from '../../images/three.png';
import four from '../../images/four.png';
import five from '../../images/five.png';

import './MoviesCard.css';

function MoviesCard(props) { 
    return (
        <div className="movies-card-list__cards">
        <div className="movies-card">
            <img className="movies-card__image" src={one} alt="Картинка Один" />
            <div className="movies-card__container">
                <div className="movies-card__movie">
                    <h2 className="movies-card__name">33 слова о дизайне</h2>
                    <p className="movies-card__duration">1ч 42м</p>
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
        <div className="movies-card">
            <img className="movies-card__image" src={one} alt="Картинка Один" />
            <div className="movies-card__container">
                <div className="movies-card__movie">
                    <h2 className="movies-card__name">33 слова о дизайне</h2>
                    <p className="movies-card__duration">1ч 42м</p>
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
        <div className="movies-card">
            <img className="movies-card__image" src={one} alt="Картинка Один" />
            <div className="movies-card__container">
                <div className="movies-card__movie">
                    <h2 className="movies-card__name">33 слова о дизайне</h2>
                    <p className="movies-card__duration">1ч 42м</p>
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
        <div className="movies-card">
            <img className="movies-card__image" src={one} alt="Картинка Один" />
            <div className="movies-card__container">
                <div className="movies-card__movie">
                    <h2 className="movies-card__name">33 слова о дизайне</h2>
                    <p className="movies-card__duration">1ч 42м</p>
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
        <div className="movies-card">
            <img className="movies-card__image" src={one} alt="Картинка Один" />
            <div className="movies-card__container">
                <div className="movies-card__movie">
                    <h2 className="movies-card__name">33 слова о дизайне</h2>
                    <p className="movies-card__duration">1ч 42м</p>
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
        
        </div>

        
    )
}

export default MoviesCard;