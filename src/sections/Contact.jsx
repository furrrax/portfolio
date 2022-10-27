import React from 'react';

const Contact = () => {

    return (
        <section className="contact">
            <div className="contact__wrap">
                <div className="contact__contacts contacts">
                    <div className="contacts__desc">
                        <h5 className="contacts__desc__title">Связаться</h5>
                        <div className="contacts__desc__text">
                            С удовольствием пообщаюсь с Вами. Смело звоните, пишите мне на почту и в мессенджеры. Следите за мной в социальных сетях или просто заполните форму обратной связи.
                        </div>
                    </div>
                    <ul className="contacts__list">
                        <li className="contacts__item">
                            <a href className="contacts__item__link">
                                <img src className="contacts__item__pic" alt="contacts pic" />
                                <div className="contacts__item__text">cjuiceone@gmail.com</div>
                            </a>
                            <a href className="contacts__item__link">
                                <img src className="contacts__item__pic" alt="contacts pic" />
                                <div className="contacts__item__text">@FURRRAX</div>
                            </a>
                        </li>
                    </ul>
                </div>
                <form className="contact__form form">
                    <h5 className="form__title">Написать мне</h5>
                    <label className='form__label'>
                        Имя:
                        <input className='form__label__input' type="text" name="name" />
                    </label>
                    <label className='form__label'>
                        Email:
                        <input className='form__label__input' type="email" name="email" />
                    </label>
                    <label className='form__label'>
                        Сообщение:
                        <input className='form__label__input' type="textarea" name="comment" />
                    </label>
                    <button className="form__submit">Отправить</button>
                </form>
            </div>
            <img src className="contacts__bg" alt="contacts bg pic" />
        </section>
    )
}

export default Contact;