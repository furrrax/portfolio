import React from 'react';

import Menu from './Menu';
import Socials from './Socials';

const Footer = () => {

    return (
        <footer className="footer">
            <Menu />
            <Socials />
            <div className="footer__creator">
                <div className="footer__creator__text">
                    Личная страница Front-end разработчика
                </div>
                <a href="mailto:cjuiceone@gmail.com" className="footer__creator__link">Виталия Вязового</a>
            </div>
        </footer>
    )
}

export default Footer;