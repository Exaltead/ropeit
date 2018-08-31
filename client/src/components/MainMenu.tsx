import * as React from 'react';
import { Link } from 'react-router-dom';
import './MainMenu.css'

const MainMenu = () => {
    return (
        <ul>
            <li><Link to='/players'> Players </Link> </li>
            <li><Link to='/characters'> Characters </Link></li>
            <li><Link to='/notes'> Notes </Link></li>
        </ul>
    );
}

export default MainMenu;