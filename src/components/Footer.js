import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { LINKED_IN_LINK, MOBILE_THRESHOLD } from '../constants';

import '../App.css';
import '../css/footer.css'

import React from 'react'

function Footer({ dimensions }) {
    return (
        <div className={dimensions.width > MOBILE_THRESHOLD ? "footer" : "mfooter"}>
            <span className={dimensions.width > MOBILE_THRESHOLD ? "links" : "mlinks"}>
                <a className="link" href={LINKED_IN_LINK} target="_blank" rel="noreferrer"><LinkedInIcon fontSize="large"/></a>
                <a className="link" href="https://github.com/subramaniamsatyen" target="_blank" rel="noreferrer"><GitHubIcon fontSize="large"/></a>
                <a className="link" href="mailto: satyensubramaniam@gmail.com" target="_blank" rel="noreferrer"><EmailIcon fontSize="large"/></a>
            </span>
            <span className={dimensions.width > MOBILE_THRESHOLD ? "copyright" : "mcopyright"}>
                © 2023 Satyen Subramaniam
            </span>
        </div>
    );
}

export default Footer;