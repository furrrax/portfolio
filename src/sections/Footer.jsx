import React from 'react';

import Menu from '../components/Menu';
import Socials from '../components/Socials';

import footerBg1 from '../img/footer-bg1.svg';
import footerBg2 from '../img/footer-bg2.webp';

import '../css/footer.css';

const Footer = () => {

    return (
        <footer className="footer">
            <Menu />
            <Socials />
            <div className="footer__creator">
                <div className="footer__creator__text">
                    Личная страница Front-end разработчика
                </div>
                &nbsp;
                <a href="mailto:cjuiceone@gmail.com" className="footer__creator__link">Виталия Вязового</a>
            </div>
            <img src={footerBg1} className="footer__bg1" alt="footer bg pic" />
            <img src={footerBg2} className="footer__bg2" alt="footer bg pic" />
        </footer>
    )
}

export default Footer;