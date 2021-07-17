import React from 'react';

import './FilterCheckbox.css';

function FilterCheckbox(props) {
    const [filter, setFilter] = React.useState([]);

/*     const filterDuration = () => {
        const filter = [];
        props.filterMovies.map((item) => {
            if (item.duration <= 40 ) {
                filter.push(item);
            }
        })
        return filter;
    } */
    
    const filterDuration = () => {    
        const filteredMovie = props.filterMovies.filter(item => item.duration <= 40);
        setFilter(filteredMovie);
    }

    return (
        <div className="filter-checkbox">
            <label className="filter-checkbox__checkbox">
                <input onClick={filterDuration} className="filter-checkbox__input" type="checkbox" id="checkbox" name="checkbox" />
                <div className="filter-checkbox__div"></div>
            </label>
            <h2 className="filter-checkbox__name">Короткометражки</h2>
        </div>
        
    )
}

export default FilterCheckbox;