import React from 'react';

import Header from '../components/Header';

const Main = () => {

    return (
        <section className='main'>
            <Header />
            <div className='main__desc'>
                <h1 className='main__desc__title'>
                    Front-end разработчик
                    Виталий Вязовой
                </h1>
                <div className="main__desc__btn">
                    <button className='main__desc__btn__cv'>Скачать резюме</button>
                </div>
            </div>
            <img src className="main__bg1" alt="bg pic" />
            <img src className="main__bg2" alt="bg pic" />
        </section>
    )
}

export default Main;