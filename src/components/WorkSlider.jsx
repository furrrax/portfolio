import React from 'react';

import workSlide1 from '../img/work/loft-taxi-app.webp';

const WorkSlider = () => {

    return (
        <div className="work__slider">
            <h5 className='work__title'>
                Мои работы
            </h5>
            <ul className="work__slider__list">
                <li className="work__slider__item">
                    <a href="#" className="work__slider__link">
                        <div className="work__slider__img">
                            <img src={workSlide1} className="work__slider__pic" alt="slider pic" />
                        </div>
                        <div className="work__slider__title">Приложение "Loft-Taxi"</div>
                    </a>
                </li>
                <li className="work__slider__item active">
                    <a href="#" className="work__slider__link">
                        <div className="work__slider__img">
                            <img src={workSlide1} className="work__slider__pic" alt="slider pic" />
                        </div>
                        <div className="work__slider__title">Сайт Zigmus</div>
                    </a>
                </li>
                <li className="work__slider__item">
                    <a href="#" className="work__slider__link">
                        <div className="work__slider__img">
                            <img src={workSlide1} className="work__slider__pic" alt="slider pic" />
                        </div>
                        <div className="work__slider__title">Сайт Zigmusdom</div>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default WorkSlider;