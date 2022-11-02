import React from 'react';

import aboutBg1 from '../img/about-bg1.svg';
import aboutBg2 from '../img/about-bg2.svg';

import '../css/about.css';

const About = () => {

    return (
        <section className="about">
            <div className='about__desc'>
                <h5 className='about__desc__title'>
                    Обо мне
                </h5>
                <div className='about__desc__text'>
                    Привет! Меня зовут Виталий.
                    Я занимаюсь Fron-end разработкой в общей сложности около 2х лет.
                    Привет! Меня зовут Виталий.
                    Я занимаюсь Fron-end разработкой в общей сложности около 2х лет.
                    Привет! Меня зовут Виталий.
                    Я занимаюсь Fron-end разработкой в общей сложности около 2[] лет.
                </div>
                <img src={aboutBg1} className="about__bg1" alt="bg pic" />
                <img src={aboutBg2} className="about__bg2" alt="bg pic" />
            </div>
        </section>
    )
}

export default About;