import { useLocation } from 'react-router-dom'
import LinkIcon from '@mui/icons-material/Link';

import '../App.css';

import React from 'react'

function PostHeader({ id, text }) {
    const location = useLocation();

    return (
        <h2 id={id} onClick={() => {navigator.clipboard.writeText(window.location.origin + location.pathname + '#' + id)}}>
            <a href={'#' + id} >{text}<LinkIcon className='linkIcon'/></a>
        </h2>
    );
}

export default PostHeader;