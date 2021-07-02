import React from 'react';
import { Link } from 'react-router-dom';

import './PageNotFound.css';

function PageNotFound () {
  return (
    <div className="not-found">
        <p className="not-found__err">404</p>
        <h3 className="not-found__title">Страница не найдена</h3>
        <Link className="not-found__button" to="/">Назад</Link>
    </div>
  )
}

export default PageNotFound; 