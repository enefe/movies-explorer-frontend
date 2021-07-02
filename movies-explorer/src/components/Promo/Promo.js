import React from 'react';
import './Promo.css';
import promo from '../../images/promo.svg';

function Promo(props) {

    return (
        <section className="promo">
            <h1 className="promo__name">Учебный проект студента факультета Веб&#8209;разработки.</h1>
            <img className="promo__image" src={promo} alt="Промо" />
        </section>
    )
}

export default Promo;