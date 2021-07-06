import React from 'react';
import './AboutMe.css';
import stud from "../../images/stud.jpg";

function AboutMe(props) {

    return (
        <section className="about-me">
            <h2 className="about__title">Студент</h2>
            <img className="about-me__image" src={stud} alt="Студент" />
            <h2 className="about-me__name">Виталий</h2>
            <h3 className="about-me__caption">Фронтенд-разработчик, 30 лет</h3>
            <p className="about-me__about">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <div className="about-me__socials">
                <a className="about-me__social" href="https://www.facebook.com/">Facebook</a>
                <a className="about-me__social" href="https://github.com/">Github</a>
            </div>
        </section>
    )
}

export default AboutMe;