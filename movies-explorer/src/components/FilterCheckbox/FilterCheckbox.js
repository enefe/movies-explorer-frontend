import React from 'react';

import './FilterCheckbox.css';

function FilterCheckbox(props) {
    return (
        <div className="filter-checkbox">
            <label className="filter-checkbox__checkbox">
                <input className="filter-checkbox__input" type="checkbox" id="checkbox" name="checkbox" />
                <div className="filter-checkbox__div"></div>
            </label>
            <h2 className="filter-checkbox__name">Короткометражки</h2>
        </div>
        
    )
}

export default FilterCheckbox;