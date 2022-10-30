import React from 'react';

import iconGit from '../img/icons/socials/icon-social-github.svg';
import iconTelegram from '../img/icons/socials/icon-social-telegram.svg';
import iconLinkedin from '../img/icons/socials/icon-social-linkedin.svg';
import iconEmail from '../img/icons/socials/icon-social-email.svg';

const Socials = () => {

    return (
        <ul className='socials'>
            <li className='socials__item socials__item--github'>
                <a href="https://github.com/furrrax" className="socials__link">
                    <img src={iconGit} className="socials__icon" alt="socials icon" />
                </a>
            </li>
            <li className='socials__item socials__item--telegram'>
                <a href="https://t.me/FURRRAX" className="socials__link">
                    <img src={iconTelegram} className="socials__icon" alt="socials icon" />
                </a>
            </li>
            <li className='socials__item socials__item--linkedin'>
                <a href="https://www.linkedin.com/in/%D0%B2%D0%B8%D1%82%D0%B0%D0%BB%D0%B8%D0%B9-%D0%B2%D1%8F%D0%B7%D0%BE%D0%B2%D0%BE%D0%B9-59b9b819a/" className="socials__link">
                    <img src={iconLinkedin} className="socials__icon" alt="socials icon" />
                </a>
            </li>
            <li className='socials__item socials__item--email'>
                <a href="mailto:cjuiceone@gmail.com" className="socials__link">
                    <img src={iconEmail} className="socials__icon" alt="socials icon" />
                </a>
            </li>
        </ul>
    )
}

export default Socials;