import React from 'react';

import workSlide1 from '../img/work/loft-taxi-app.webp';
import workSlide2 from '../img/work/zigmus.webp';
import workSlide3 from '../img/work/zigmusdom.webp';
import workSlide4 from '../img/work/qubity.webp';
import workSlide5 from '../img/work/kugoo.webp';
import workSlide6 from '../img/work/ajaxarm.webp';
import workSlide7 from '../img/work/toonguru.webp';
import workSlide8 from '../img/work/miko.webp';
import workSlide9 from '../img/work/burger.webp';
import workSlide10 from '../img/work/portfolio.webp';
import workSlide11 from '../img/work/trade.webp';
import workSlide12 from '../img/work/service.webp';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";

const WorkSlider = () => {

    return (
        <div className="work__slider">
            <h5 className='work__title'>
                Мои работы
            </h5>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                loop={true}
                coverflowEffect={{
                    rotate: 40,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="work__slider__list mySwiper"
            >
                <SwiperSlide className="work__slider__item">
                    <a href="https://loft-taxi-nine.vercel.app/" target="_ blank" className="work__slider__link">
                        <div className="work__slider__img">
                            <img src={workSlide1} className="work__slider__pic" alt="slider pic" />
                        </div>
                        <div className="work__slider__title">Приложение "Loft-Taxi"</div>
                    </a>
                </SwiperSlide>
                <SwiperSlide className="work__slider__item">
                    <a href="https://zigmus.eu/" target="_ blank" className="work__slider__link">
                        <div className="work__slider__img">
                            <img src={workSlide2} className="work__slider__pic" alt="slider pic" />
                        </div>
                        <div className="work__slider__title">Платформа грузоперевозок Zigmus</div>
                    </a>
                </SwiperSlide>
                <SwiperSlide className="work__slider__item">
                    <a href="https://zigmusdom.eu/" target="_ blank" className="work__slider__link">
                        <div className="work__slider__img">
                            <img src={workSlide3} className="work__slider__pic" alt="slider pic" />
                        </div>
                        <div className="work__slider__title">Агрегатор недвижимости Zigmusdom</div>
                    </a>
                </SwiperSlide>

                <SwiperSlide className="work__slider__item">
                    <a href="https://qbty.itsapsan.by/" target="_ blank" className="work__slider__link">
                        <div className="work__slider__img">
                            <img src={workSlide4} className="work__slider__pic" alt="slider pic" />
                        </div>
                        <div className="work__slider__title">Интернет-магазин для майнеров Qubity</div>
                    </a>
                </SwiperSlide>
                <SwiperSlide className="work__slider__item">
                    <a href="http://kugo.itsapsan.by/" target="_ blank" className="work__slider__link">
                        <div className="work__slider__img">
                            <img src={workSlide5} className="work__slider__pic" alt="slider pic" />
                        </div>
                        <div className="work__slider__title">Интернет-магазин самокатов KUGOO</div>
                    </a>
                </SwiperSlide>
                <SwiperSlide className="work__slider__item">
                    <a href="http://ajaxarm.ru/" target="_ blank" className="work__slider__link">
                        <div className="work__slider__img">
                            <img src={workSlide6} className="work__slider__pic" alt="slider pic" />
                        </div>
                        <div className="work__slider__title">Оборудование для водоснабжения AjaxArm</div>
                    </a>
                </SwiperSlide>
                <SwiperSlide className="work__slider__item">
                    <a href="https://toon.guru/" target="_ blank" className="work__slider__link">
                        <div className="work__slider__img">
                            <img src={workSlide7} className="work__slider__pic" alt="slider pic" />
                        </div>
                        <div className="work__slider__title">Анимационная студия ToonGuru</div>
                    </a>
                </SwiperSlide>
                <SwiperSlide className="work__slider__item">
                    <a href="https://furrrax.github.io/testwork-miko/" target="_ blank" className="work__slider__link">
                        <div className="work__slider__img">
                            <img src={workSlide8} className="work__slider__pic" alt="slider pic" />
                        </div>
                        <div className="work__slider__title">Тестовая работа Микоцин</div>
                    </a>
                </SwiperSlide>
                <SwiperSlide className="work__slider__item">
                    <a href="https://furrrax.github.io/burger/" target="_ blank" className="work__slider__link">
                        <div className="work__slider__img">
                            <img src={workSlide9} className="work__slider__pic" alt="slider pic" />
                        </div>
                        <div className="work__slider__title">Сайт Мистер Бургер</div>
                    </a>
                </SwiperSlide>
                <SwiperSlide className="work__slider__item">
                    <a href="https://furrrax.github.io/portfolio-ls/" target="_ blank" className="work__slider__link">
                        <div className="work__slider__img">
                            <img src={workSlide10} className="work__slider__pic" alt="slider pic" />
                        </div>
                        <div className="work__slider__title">Сайт Портфолио</div>
                    </a>
                </SwiperSlide>
                <SwiperSlide className="work__slider__item">
                    <a href="https://furrrax.github.io/form-trade/" target="_ blank" className="work__slider__link">
                        <div className="work__slider__img">
                            <img src={workSlide11} className="work__slider__pic" alt="slider pic" />
                        </div>
                        <div className="work__slider__title">Тестовая работа Форма входа</div>
                    </a>
                </SwiperSlide>
                <SwiperSlide className="work__slider__item">
                    <a href="https://furrrax.github.io/Service/" target="_ blank" className="work__slider__link">
                        <div className="work__slider__img">
                            <img src={workSlide12} className="work__slider__pic" alt="slider pic" />
                        </div>
                        <div className="work__slider__title">Таблица для заказа услуг</div>
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default WorkSlider;