import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

function MoviesCardList(props) {
    return (
        <section className="movies-card-list">
            {/*  <div className="movies-card-list__cards"></div> */}
            <MoviesCard />
            <button className="movies-card-list__button">Ещё</button>
        </section>
    )
}

export default MoviesCardList;