import React from 'react';

import Header from '../components/Header';
import bg1 from '../img/main__bg1.webp';
import bg2 from '../img/main__bg2.webp';

import '../css/main.css';

const Main = () => {

    return (
        <section className="main">
            <Header />
            <div className="main__desc">
                <h1 className="main__desc__title">
                    Front-end разработчик<br />
                    Виталий Вязовой
                </h1>
                <div className="main__desc__btns">
                    <a href className="main__desc__btn btn">Скачать резюме</a>
                </div>
            </div>
            <img src={bg1} className="main__bg1" alt="bg pic" />
            <img src={bg2}  className="main__bg2" alt="bg pic" />
        </section>
    )
}

export default Main;