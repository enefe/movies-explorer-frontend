import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

function MoviesCardList(props) {
    const [visible, setVisible] = React.useState(6);

    const showMoreMovies = () => {
        setVisible((movie) => movie + 6);
    };

    const buttonVisible = ( `${visible < props.filterMovies.length ? 'movies-card-list__button' : 'movies-card-list__not-button'}`);

    return (
        <section className="movies-card-list">
            <div className="movies-card-list__cards">
                {
                    props.filterMovies.slice(0, visible).map((item) => {
                        return (
                            <MoviesCard movie={item} key={item._id} /* onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} */ />
                        )
                    })
                } 
            </div>
            <button onClick={showMoreMovies} className={buttonVisible}>Ещё</button>
        </section>
    )
};

export default MoviesCardList;