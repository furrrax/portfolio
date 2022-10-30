import React from 'react';

import sidebarHome from '../img/icons/sidebar/icon-sidebar-home.svg';
import sidebarAbout from '../img/icons/sidebar/icon-sidebar-about.svg';
import sidebarWork from '../img/icons/sidebar/icon-sidebar-work.svg';
import sidebarContact from '../img/icons/sidebar/icon-sidebar-contact.svg';

import '../css/sidebar.css';

const Sidebar = () => {

    return (
        <aside className='sidebar'>
            <ul className="sidebar__list">
                <li className="sidebar__item">
                    <a href className="sidebar__link">
                        <img src={sidebarHome} alt="sidebar icon" className="sidebar__pic" />
                    </a>
                </li>
                <li className="sidebar__item active">
                    <a href className="sidebar__link">
                        <img src={sidebarAbout} alt="sidebar icon" className="sidebar__pic" />
                    </a>
                </li>
                <li className="sidebar__item">
                    <a href className="sidebar__link">
                        <img src={sidebarWork} alt="sidebar icon" className="sidebar__pic" />
                    </a>
                </li>
                <li className="sidebar__item">
                    <a href className="sidebar__link">
                        <img src={sidebarContact} alt="sidebar icon" className="sidebar__pic" />
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar;