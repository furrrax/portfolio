import React from 'react';

import iconGit from '../img/icons/socials/icon-social-github.svg';
import iconTelegram from '../img/icons/socials/icon-social-telegram.svg';
import iconLinkedin from '../img/icons/socials/icon-social-linkedin.svg';
import iconEmail from '../img/icons/socials/icon-social-email.svg';

const Socials = () => {

    return (
        <ul className='socials'>
            <li className='socials__item socials__item--github'>
                <a href className="socials__link">
                    <img src={iconGit} className="socials__icon" alt="socials icon" />
                </a>
            </li>
            <li className='socials__item socials__item--telegram'>
                <a href className="socials__link">
                    <img src={iconTelegram} className="socials__icon" alt="socials icon" />
                </a>
            </li>
            <li className='socials__item socials__item--linkedin'>
                <a href className="socials__link">
                    <img src={iconLinkedin} className="socials__icon" alt="socials icon" />
                </a>
            </li>
            <li className='socials__item socials__item--email'>
                <a href className="socials__link">
                    <img src={iconEmail} className="socials__icon" alt="socials icon" />
                </a>
            </li>
        </ul>
    )
}

export default Socials;