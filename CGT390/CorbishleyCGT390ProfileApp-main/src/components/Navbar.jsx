import React from 'react';
import style from '../styles/navBar.module.css';
import {Link} from 'react-router-dom';

const Navbar = ({switchMode, darkMode}) => {
    return (
        <div className={`${style["navBarDiv"]} ${darkMode ? style["darkMode"] : ""}`}>
            <ul className={style["list"]}>
                <li className={style["listItem"]}><Link to="/">Home</Link></li>
                <li className={style["listItem"]}><Link to="/add-profile">Add Profile</Link></li>
                <li className={style["listItem"]}><Link to="/about">About</Link></li>
            </ul>
            
            <button className={`${style["button"]} ${darkMode ? style["darkMode"] : ""}`} onClick={switchMode}>Switch Mode</button>
        </div>
    );
};
export default Navbar;

