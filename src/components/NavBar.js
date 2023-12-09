import { Link } from "react-router-dom";
import { MOBILE_THRESHOLD } from '../constants'

import '../App.css';
import '../css/navbar.css'

import React from 'react'
import DropMenu from "./DropMenu";
import SearchIcon from '@mui/icons-material/Search';

const PAGE_MAPPING = {
    'About': '/',
    'Experience': '/experience',
    'Projects': '/projects',
    'Awards': '/awards',
    'Search': '/search'
}

function NavBar({dimensions}) {
    return (
        <div>
            <ul className="nav-menu">
                <div>
                    {dimensions.width > MOBILE_THRESHOLD ? 
                    <li className='nav-header' key="site-name">
                        <Link to="/">Satyen Subramaniam</Link>
                    </li>   
                    : null }
                </div>
                {dimensions.width > MOBILE_THRESHOLD ? 
                <div>
                    {Object.entries(PAGE_MAPPING).map(([key, value]) => 
                        key === "Search" ? <Link to={value} key={value}><SearchIcon className='nav-search'/></Link>
                        : <Link to={value} key={value}><li className='nav-item'>{key}</li></Link>)
                    }
                </div> : 
                <DropMenu mapping={PAGE_MAPPING}></DropMenu>}
            </ul>
        </div>
    );
}

export default NavBar;