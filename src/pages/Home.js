import '../App.css';

import headshot from '../images/headshot_2.jpg';
import { ColorButton, HighlightButton } from '../components/ColorButton';
import { INCLUDE_IMAGE_WIDTH, LINKED_IN_LINK, RESUME_LINK } from '../constants'

function Home({ dimensions }) {
  return (
    <div className="App application">
      {dimensions.width > INCLUDE_IMAGE_WIDTH ? 
      <div className="rowTwo">
        <div className='columnTwo leftAlign heroText'>
          <h1>Hello, I'm Satyen Subramaniam!</h1>
          <p className='textBlock'>
            I'm interested in<span className='highlight'>&nbsp;Full-Stack Development</span>,
            <span className='highlight'>&nbsp;Cloud Computing</span>, and<span className='highlight'>&nbsp;Machine Learning</span>!
            Click around to learn more about my interests, experience, and projects and feel free to reach out via LinkedIn or email.
          </p>
          <center>
            <a className="link" href={RESUME_LINK} target="_blank" rel="noreferrer"><HighlightButton>Resume</HighlightButton></a>
            <a className="link" href={LINKED_IN_LINK} target="_blank" rel="noreferrer"><ColorButton>Connect With ME!</ColorButton></a>
          </center>
        </div>
        <div className='columnTwoSmall rightAlign'>
          <img
            className='headshot'
            src={headshot}
            width='350px'
            alt="Headshot of Satyen"
          ></img>
        </div>
      </div> : 
      <div className='mobileHero heroText'>
        <h1>Hello, I'm Satyen Subramaniam!</h1>
        <p className='textBlock'>
          I'm interested in <span className='highlight'>&nbsp;Software Engineering</span>,
          <span className='highlight'>&nbsp;Cloud Computing</span>, and<span className='highlight'>&nbsp;Machine Learning</span>!
          Click around to learn more about my interests, experience, and projects and feel free to reach out via LinkedIn or email.
        </p>
        <center>
          <a className="link" href={RESUME_LINK} target="_blank" rel="noreferrer"><HighlightButton>Resume</HighlightButton></a>
          <a className="link" href={LINKED_IN_LINK} target="_blank" rel="noreferrer"><ColorButton>Connect With ME!</ColorButton></a>
        </center>
      </div>
      }
    </div>
  );
}

export default Home;
