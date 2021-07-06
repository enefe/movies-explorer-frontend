import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <h2 className="footer__name">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className="footer__container">
                <div className="footer__links">
                    <a className="footer__link" href="https://praktikum.yandex.ru/">Яндекс.Практикум</a>
                    <a className="footer__link" href="https://github.com/">Github</a>
                    <a className="footer__link" href="https://www.facebook.com/">Facebook</a>
                </div>
                <p className="footer__year">&copy;2021</p>
            </div>
        </footer>
    )
}

export default Footer;