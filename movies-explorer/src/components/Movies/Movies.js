import React from 'react';
import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies(props) {
    return (
        <div className="content">
            <SearchForm />
            <FilterCheckbox />
            <Preloader />
            <MoviesCardList />
            <Footer />
        </div>
        
    )
}

export default Movies;