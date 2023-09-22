import { Link } from "react-router-dom";

import '../App.css';
import '../css/navbar.css'

import React from 'react'

function NavBar() {
    return (
        <div>
            <ul class="nav-menu">
                <div>
                    <li className='nav-header'>
                        <Link to="/">Satyen Subramaniam</Link>
                    </li>   
                </div>
                <div>
                    <li className='nav-item'>
                        <Link to="/">About</Link>
                    </li>   
                    <li className='nav-item'>
                        <Link to="/experience">Experience</Link>
                    </li>                
                    <li className='nav-item'>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/awards">Awards</Link>
                    </li>
                </div>
            </ul>
        </div>
    );
}

export default NavBar;