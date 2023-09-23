import { Link } from "react-router-dom";

import '../App.css';
import '../css/navbar.css'

import React from 'react'

function NavBar({dimensions}) {
    return (
        <div>
            <ul class="nav-menu">
                <div>
                    {dimensions.width > 640 ? 
                    <li className='nav-header'>
                        <Link to="/">Satyen Subramaniam</Link>
                    </li>   
                    : null }
                </div>
                <div>
                    <Link to="/"><li className='nav-item'>About</li></Link>
                    <Link to="/experience"><li className='nav-item'>Experience</li></Link>
                    <Link to="/projects"><li className='nav-item'>Projects</li></Link>
                    <Link to="/awards"><li className='nav-item'>Awards</li></Link>
                </div>
            </ul>
        </div>
    );
}

export default NavBar;