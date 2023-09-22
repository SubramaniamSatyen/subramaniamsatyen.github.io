import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

import '../App.css';
import '../css/footer.css'

import React from 'react'

function Footer() {
    return (
        <div className="footer">
            <span className="links">
                <a className="link" href="https://www.linkedin.com/in/satyen-sub" target="_blank" rel="noreferrer"><LinkedInIcon fontSize="large"/></a>
                <a className="link" href="https://github.com/subramaniamsatyen" target="_blank" rel="noreferrer"><GitHubIcon fontSize="large"/></a>
                <a className="link" href="mailto: satyensubramaniam@gmail.com" target="_blank" rel="noreferrer"><EmailIcon fontSize="large"/></a>
            </span>
            <span className="copyright">
                © 2023 Satyen Subramaniam
            </span>
        </div>
    );
}

export default Footer;