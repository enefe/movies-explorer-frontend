import React from 'react';
import './Techs.css';

function Techs(props) {

    return (
        <section className="techs">
            <h2 className="about__title">Технологии</h2>
            <div className="techs__container">
                <h3 className="techs__name">7 технологий</h3>
                <p className="techs__about">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className="techs__techs">
                    <li>
                        <p className="techs__tech">HTML</p>
                    </li>
                    <li>
                        <p className="techs__tech">CSS</p>
                    </li>
                    <li>
                        <p className="techs__tech">JS</p>
                    </li>
                    <li>
                        <p className="techs__tech">React</p>
                    </li>
                    <li>
                        <p className="techs__tech">Git</p>
                    </li>
                    <li>
                        <p className="techs__tech">Express.js</p>
                    </li>
                    <li>
                        <p className="techs__tech">mongoDB</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Techs;