import React from 'react';
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
                <button className="movies-card__like movies-card__like_active movies-card__like_delete" type="button"></button>
            </div>
        </div>
        <div className="movies-card">
            <img className="movies-card__image" src={two} alt="Картинка Два" />
            <div className="movies-card__container">
                <div className="movies-card__movie">
                    <h2 className="movies-card__name">33 слова о дизайне</h2>
                    <p className="movies-card__duration">1ч 42м</p>
                </div>
                <button className="movies-card__like movies-card__like_active" type="button"></button>
            </div>
        </div>
        <div className="movies-card">
            <img className="movies-card__image" src={three} alt="Картинка Три" />
            <div className="movies-card__container">
                <div className="movies-card__movie">
                    <h2 className="movies-card__name">33 слова о дизайне</h2>
                    <p className="movies-card__duration">1ч 42м</p>
                </div>
                <button className="movies-card__like movies-card__like_active" type="button"></button>
            </div>
        </div>
        <div className="movies-card">
            <img className="movies-card__image" src={four} alt="Картинка Четыре" />
            <div className="movies-card__container">
                <div className="movies-card__movie">
                    <h2 className="movies-card__name">33 слова о дизайне</h2>
                    <p className="movies-card__duration">1ч 42м</p>
                </div>
                <button className="movies-card__like movies-card__like_active" type="button"></button>
            </div>
        </div>
        <div className="movies-card">
            <img className="movies-card__image" src={five} alt="Картинка Пять" />
            <div className="movies-card__container">
                <div className="movies-card__movie">
                    <h2 className="movies-card__name">33 слова о дизайне</h2>
                    <p className="movies-card__duration">1ч 42м</p>
                </div>
                <button className="movies-card__like movies-card__like_active" type="button"></button>
            </div>
        </div>
        
        </div>

        
    )
}

export default MoviesCard;