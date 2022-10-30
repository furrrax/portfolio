import React from 'react';

import Form from '../components/Form';

import contactBg from '../img/contact-bg.svg';
import iconMail from '../img/icons/icon-mail.svg';
import iconTelegram from '../img/icons/icon-telegram.svg';
import '../css/contact.css';

const Contact = () => {

    return (
        <section className="contact">
            <div className="contact__inner">
                <div className="contact__wrap">
                    <div className="contact__contacts contacts">
                        <div className="contacts__desc">
                            <h5 className="contacts__desc__title">Связаться</h5>
                            <div className="contacts__desc__text">
                                Смело звоните, пишите мне на почту и в мессенджеры. Следите за мной в социальных сетях или просто заполните форму обратной связи.
                            </div>
                        </div>
                        <ul className="contacts__list">
                            <li className="contacts__item">
                                <a href="mailto:cjuiceone@gmail.com" className="contacts__item__link">
                                    <div className="contacts__item__img">
                                        <img src={iconMail} className="contacts__item__pic" alt="contacts pic" />
                                    </div>
                                    <div className="contacts__item__text">cjuiceone@gmail.com</div>
                                </a>
                            </li>
                            <li className="contacts__item">
                                <a href className="contacts__item__link">
                                    <div className="contacts__item__img">
                                        <img src={iconTelegram} className="contacts__item__pic" alt="contacts pic" />
                                    </div>
                                    <div className="contacts__item__text">@FURRRAX</div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <Form />
                </div>
            </div>
            <img src={contactBg} className="contacts__bg" alt="contacts bg pic" />
        </section>
    )
}

export default Contact;