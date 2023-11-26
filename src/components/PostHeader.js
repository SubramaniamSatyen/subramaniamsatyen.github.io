import { useLocation } from 'react-router-dom'
import LinkIcon from '@mui/icons-material/Link';

import '../App.css';

import React from 'react'

function PostHeader({ id, text }) {
    const location = useLocation();

    return (
        <h2 className="postHeader" id={id} onClick={() => {navigator.clipboard.writeText(window.location.origin + location.pathname + '#' + id)}}>
            <a href={'#' + id} >{text}<div className='linkIcon'><LinkIcon/></div></a>
        </h2>
    );
}

export default PostHeader;