import React from 'react';

const WorkSlider = () => {

    return (
        <div className="work__slider">
            <ul className="work__slider__wrap">
                <li className="work__slider__item">
                    <img src className="work__slider__pic" alt="slider pic" />
                    <div className="work__slider__title">Приложение "Loft-Taxi"</div>
                </li>
                <li className="work__slider__item">
                    <img src className="work__slider__pic" alt="slider pic" />
                    <div className="work__slider__title">Сайт Zigmus</div>
                </li>
                <li className="work__slider__item">
                    <img src className="work__slider__pic" alt="slider pic" />
                    <div className="work__slider__title">Сайт Zigmusdom</div>
                </li>
            </ul>
        </div>
    )
}

export default WorkSlider;