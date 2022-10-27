import React from 'react';

const Menu = () => {

    return (
        <ul className='menu'>
            <li className='menu__item'>
                <a href className="menu__link">
                    <img src className="menu__icon" alt="menu icon" />
                    <div className="menu__text">Главная</div>
                </a>
            </li>
            <li className='menu__item'>
                <a href className="menu__link">
                    <img src className="menu__icon" alt="menu icon" />
                    <div className="menu__text">Обо мне</div>
                </a>
            </li>
            <li className='menu__item'>
                <a href className="menu__link">
                    <img src className="menu__icon" alt="menu icon" />
                    <div className="menu__text">Мои работы</div>
                </a>
            </li>
            <li className='menu__item'>
                <a href className="menu__link">
                    <img src className="menu__icon" alt="menu icon" />
                    <div className="menu__text">Связаться</div>
                </a>
            </li>
        </ul>
    )
}

export default Menu;