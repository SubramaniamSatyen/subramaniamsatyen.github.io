import '../App.css';

import headshot from '../images/headshot.jpg';

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
        </div>
        <div className='columnTwo rightAlign'>
          <img
            className='headshot'
            src={headshot}
            width={dimensions.width * 35 / 100}
            height= {dimensions.height * 50 / 100}
            alt="Headshot of Satyen"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
