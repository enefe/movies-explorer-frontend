import React from 'react';
import './Portfolio.css';

import site from '../../images/site.svg';

function Portfolio(props) {

    return (
        <section className="portfolio">
            <h3 className="portfolio__name">Портфолио</h3>
            <a href="https://enefe.github.io/russian-travel/index.html" className="portfolio__link">
                <p className="portfolio__site">Статичный сайт</p>
                <img className="portfolio__image" src={site} alt="Сайт" />
            </a>
            <a href="https://enefe.github.io/russian-travel/index.html" className="portfolio__link">
                <p className="portfolio__site">Адаптивный сайт</p>
                <img className="portfolio__image" src={site} alt="Сайт" />
            </a>
            <a href="https://enefe.nomoredomains.monster/signin" className="portfolio__link">
                <p className="portfolio__site">Одностраничное приложение</p>
                <img className="portfolio__image" src={site} alt="Сайт" />
            </a>
        </section>
    )
}

export default Portfolio;