import React from 'react';
import './AboutProject.css';

function AboutProject(props) {

    return (
        <section className="about">
            <h2 className="about__title">О проекте</h2>
            <div className="about__stages">
                <h3 className="about__name">Дипломный проект включал 5 этапов</h3>
                <p className="about__about">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </div>
            <div className="about__weeks">    
                <h3 className="about__name">На выполнение диплома ушло 5 недель</h3>
                <p className="about__about">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            <div className="about__container">
                <h4 className="about__one-week">1 неделя</h4>
                <h4 className="about__four-weeks">4 недели</h4>
                <p className="about__caption">Back-end</p>
                <p className="about__caption">Front-end</p>
            </div>
        </section>
    )
}

export default AboutProject;