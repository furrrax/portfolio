import React from 'react';

import iconHome from '../img/icons/icon-menu-home.svg';
import iconAbout from '../img/icons/icon-menu-about.svg';
import iconWork from '../img/icons/icon-menu-work.svg';
import iconContact from '../img/icons/icon-menu-contact.svg';

const Menu = () => {

    const menuPics = [iconHome, iconAbout, iconWork, iconContact];
    const links = ['.main', '.about', '.work', '.contact'];
    const menuText = ['Главная', 'Обо мне', 'Мои работы', 'Связаться'];

    const scrollHandle = (event) => {
        event.preventDefault();
        const sectionLink = event.currentTarget.getAttribute('href');
        document.querySelector(`${sectionLink}`).scrollIntoView({behavior: "smooth", block: "start"});
    }

    return (
        <ul className='menu'>
            {menuPics.map((menuPic, index) => (
                <li className='menu__item'>
                    <a href={links[index]} onClick={scrollHandle} className="menu__link">
                        <img src={menuPic} className="menu__icon" alt="menu icon" />
                        <div className="menu__text">{menuText[index]}</div>
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Menu;