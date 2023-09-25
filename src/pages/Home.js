import '../App.css';

import headshot from '../images/headshot_close.png';
import { ColorButton, HighlightButton } from '../components/ColorButton';

function Home({ dimensions }) {
  return (
    <div className="App application">
      <div className="rowTwo">
        <div className='columnTwo leftAlign heroText'>
          <h1>Hello, I'm Satyen Subramaniam!</h1>
          <p className='textBlock'>
            I'm interested in <span className='highlight'>&nbsp;Software Engineering</span>,
            <span className='highlight'>&nbsp;Cloud Computing</span>, and <span className='highlight'>&nbsp;Machine Learning</span>!
            Click around to learn more about my interests, experience, and projects and feel free to reach out via LinkedIn or email.
          </p>
          <center>
            <a className="link" href="https://drive.google.com/file/d/1c9BaaAhC59ew1dPcnq-N9GcRrPAWNLnQ/view?usp=sharing" target="_blank" rel="noreferrer"><HighlightButton>Resume</HighlightButton></a>
            <a className="link" href="https://www.linkedin.com/in/satyen-sub" target="_blank" rel="noreferrer"><ColorButton>Connect With ME!</ColorButton></a>
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
      </div>
    </div>
  );
}

export default Home;
