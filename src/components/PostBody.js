import Chip from '@mui/material/Chip';
import { ColorButton } from './ColorButton';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import '../App.css';

import React from 'react'

function PostBody({ blurb, accomplishments, skills, showLogo, logo, logoAlt, logoWidth, logoHeight, links }) {
    return (
        <div className='row'>
          <div>
            <p className='paragraphBlock'>
              {blurb}
            </p>
            {accomplishments && accomplishments.length > 0 ? 
            <div>
                <h3>Accomplishments:</h3>
                <ul className='accomplishments paragraphBlock'>
                    {accomplishments.map((acc) => (<li>{acc}</li>))}
                </ul>
            </div>
            : null}
            {skills && skills.length > 0 ? 
            <div>
                <h3>Skills:</h3>
                <div>
                    {skills.map((skill) => <Chip 
                                    label={skill} 
                                    className="skill" 
                                    style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} 
                                />)}
                </div>
            </div>
            : null}
            {links && links.length > 0 ? 
                <div>
                    <h3>Resources:</h3>
                    {links.map((link) => <a className="link" href={link['link']} target="_blank" rel="noreferrer">
                        <ColorButton>{link['text']}&nbsp;<OpenInNewIcon/></ColorButton>
                    </a>)}
                </div>
            : null}
          </div>
          {logo && showLogo ? 
          <div className='logo' >
            <img className='logoImage' alt={logoAlt} src={logo} width={logoWidth} height={logoHeight} />
          </div>
          : null }
        </div>
    );
}

export default PostBody;