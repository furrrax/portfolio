import {React, useState} from 'react';

import sidebarHome from '../img/icons/sidebar/icon-sidebar-home.svg';
import sidebarAbout from '../img/icons/sidebar/icon-sidebar-about.svg';
import sidebarWork from '../img/icons/sidebar/icon-sidebar-work.svg';
import sidebarContact from '../img/icons/sidebar/icon-sidebar-contact.svg';

import '../css/sidebar.css';

const Sidebar = () => {

    const menuItems = [sidebarHome, sidebarAbout, sidebarWork, sidebarContact];
    const links = ['.main', '.about', '.work', '.contact'];
    const [active, setActive] = useState('');

    const scrollHandle = (event) => {
        event.preventDefault();
        const sectionLink = event.currentTarget.getAttribute('href');
        console.log(sectionLink)
        document.querySelector(`${sectionLink}`).scrollIntoView({behavior: "smooth", block: "start"});
    }

    return (
        <aside className='sidebar'>
            <ul className="sidebar__list">
                {menuItems.map((menuItem, index) => (
                    <li 
                        key={index}
                        className={`sidebar__item ${active === menuItem && 'active'}`}
                        onClick={() => setActive(menuItem)}
                        >
                        <a href={links[index]} onClick={scrollHandle} className="sidebar__link">
                            <img src={menuItem} alt="sidebar icon" className="sidebar__pic" />
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Sidebar;