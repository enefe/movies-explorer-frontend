import React from 'react';

import './FilterCheckbox.css';

function FilterCheckbox(props) {
    
    
    const filterDuration = () => {    
        props.onShortMovies();
    }

    return (
        <div className="filter-checkbox">
            <label className="filter-checkbox__checkbox">
                <input onClick={filterDuration} className="filter-checkbox__input"
/*                     onClick={props.onShortMovies}
                    className={`${ props.short ? 'filter-checkbox__input': ''}`}  */
                    type="checkbox" 
                    id="checkbox" 
                    name="checkbox" />
                <div className="filter-checkbox__div"></div>
            </label>
            <h2 className="filter-checkbox__name">Короткометражки</h2>
        </div>
        
    )
}

export default FilterCheckbox;