import Chip from '@mui/material/Chip';
import { ColorButton } from './ColorButton';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import '../App.css';

import React from 'react'

function format(text){
    if (text != undefined){
        return text.split("<li>").map((val, i) => i % 2 == 0 ? val : <ul>{val.split("|").map((item) => <li>{item}</li>)}</ul>);
    }
    return "";
}
function PostBody({ blurb, accomplishments, skills, showLogo, logo, noStyle, logoAlt, logoWidth, logoHeight, links }) {
    return (
        <div className='row'>
          <div>
            <p className='paragraphBlock'>
              {format(blurb)}
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
                                    style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400, boxShadow: '0 3px 3px rgb(0 0 0 / 0.2)'}} 
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
            <img className={typeof(noStyle) !== 'undefined' && noStyle != null ? "" : 'logoImage'} alt={logoAlt} src={logo} width={logoWidth} height={logoHeight} />
          </div>
          : null }
        </div>
    );
}

export default PostBody;