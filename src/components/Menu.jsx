import React from 'react';

import iconHome from '../img/icons/icon-menu-home.svg';
import iconAbout from '../img/icons/icon-menu-about.svg';
import iconWork from '../img/icons/icon-menu-work.svg';
import iconContact from '../img/icons/icon-menu-contact.svg';

const Menu = () => {

    return (
        <ul className='menu'>
            <li className='menu__item'>
                <a href className="menu__link">
                    <img src={iconHome} className="menu__icon" alt="menu icon" />
                    <div className="menu__text">Главная</div>
                </a>
            </li>
            <li className='menu__item'>
                <a href className="menu__link">
                    <img src={iconAbout} className="menu__icon" alt="menu icon" />
                    <div className="menu__text">Обо мне</div>
                </a>
            </li>
            <li className='menu__item'>
                <a href className="menu__link">
                    <img src={iconWork} className="menu__icon" alt="menu icon" />
                    <div className="menu__text">Мои работы</div>
                </a>
            </li>
            <li className='menu__item'>
                <a href className="menu__link">
                    <img src={iconContact} className="menu__icon" alt="menu icon" />
                    <div className="menu__text">Связаться</div>
                </a>
            </li>
        </ul>
    )
}

export default Menu;