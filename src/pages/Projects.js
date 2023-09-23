import { Chip } from '@mui/material';
import { ColorButton } from '../components/ColorButton';

import ScAI from '../images/ScAI_Logo.png'
import SRI from '../images/SRI_Logo.png'

import '../App.css';

function Projects() {
  return (
    <div className="App application">
      <h1 className='leftAlign'>Research Projects: </h1>
      <div className="postEntry">
        <h2>UCLA Scalable Analytics Institute</h2>
        <div className='row'>
          <div>
            <p className='paragraphBlock'>
              UCLA's Scalable Analytics Institute is focused on addressing the continuing growth of data and the demand for smart 
              analytics to mine that data by solving the three-pronged challenge created by the exploding size of big data, the 
              growing complexity of big data, and the increased sophistication of analytics that can be used to extract patterns
               and trends from the data.
            </p>
            <p className='paragraphBlock'>
              <h3>Accomplishments:</h3>
              <ul className='accomplishments'>
                <li>
                  Evaluated efficacy of large language models in computation scenarios by sourcing college-level scientific problems
                </li>
                <li>
                  Summarize accuracy of NLP model in paper by classifying incorrect predictions into 10 error categories
                </li>
              </ul>
            </p>
            <p className='paragraphBlock'>
              <h3>Skills:</h3>
            </p>
            <div>
              <Chip label="Python" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
              <Chip label="NLP" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
            </div>
            <p className='paragraphBlock'>
              <h3>Resources:</h3>
            </p>
            <a className="link" href="https://drive.google.com/file/d/1p2c0Z70m9Td4RDMVzSrBRpAb2kBcJ4Hc/view?usp=sharing" target="_blank" rel="noreferrer"><ColorButton>Read Paper</ColorButton></a>
          </div>
          <div className='logo' >
            <img alt='ScAI Logo' className='logoImage' src={ScAI} width='200'/>
          </div>
        </div>
      </div>
      <div className="postEntry">
        <h2>UCLA Sensing and Robotics for Infrastructure</h2>
        <div className='row'>
          <div>
            <p className='paragraphBlock'>
              UCLA's Sensing and Robotics for Infrastructure Lab's goal is to better understand and quantify the condition and
               remaining useful life of civil and mechanical infrastructure systems through the intelligent use of sensors and data.
               The lab visualizes this data in an accessible manner to enhance the process of maintaining and improving our infrastructure.
            </p>
            <p className='paragraphBlock'>
              <h3>Accomplishments:</h3>
              <ul className='accomplishments'>
                <li>
                  Created CI/CD process to deploy a fast and filterable React dashboard to demystify road quality data using AWS Elastic Beanstalk
                </li>
                <li>
                  Deployed an Express.js API to perform calculations on data before passing to dashboard service
                </li>
                <li>
                  Configured visualization tool with SSL and custom domain using GoDaddy and AWS Route 53
                </li>
                <li>
                  Architected hosting for 3D point cloud LiDAR street visualizations using AWS S3
                </li>
              </ul>
            </p>
            <p className='paragraphBlock'>
              <h3>Skills:</h3>
            </p>
            <div>
              <Chip label="React" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
              <Chip label="Express.js" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
              <Chip label="AWS S3" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
              <Chip label="AWS EC2" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
              <Chip label="AWS Elastic Beanstalk" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
              <Chip label="AWS Route 53" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
            </div>
            <p className='paragraphBlock'>
              <h3>Resources:</h3>
            </p>
            <a className="link" href="https://site.hspa.info/" target="_blank" rel="noreferrer"><ColorButton>View Site</ColorButton></a>
          </div>
          <div className='logo' >
            <img alt='SRI Logo' src={SRI} width='200'/>
          </div>
        </div>
      </div>
      <h1 className='leftAlign'>Club Projects: </h1>
      <div className="postEntry">
        <h2>ACM Hack - HackCloud</h2>
        <div className='row'>
          <div>
            <p className='paragraphBlock'>
              ACM Hack's HackCloud is a quarter long workshop series exploring the field of cloud computing, the modern backbone for 
              designing and deploying highly scalable, reliable, and available software services. For UCLA ACM's first time ever, ACM Hack 
              dived into cloud fundamentals and best practices, tying the concepts into practical hands-on demos with Amazon Web Services.
            </p>
            <p className='paragraphBlock'>
              <h3>Skills:</h3>
            </p>
            <div>
              <Chip label="React" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
              <Chip label="AWS S3" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
              <Chip label="AWS EC2" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
              <Chip label="AWS Lambda" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
              <Chip label="Docker" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
              <Chip label="AWS Route 53" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
            </div>
            <p className='paragraphBlock'>
              <h3>Resources:</h3>
            </p>
            <a className="link" href="https://github.com/uclaacm/hack-curriculum/tree/main/HackCloud" target="_blank" rel="noreferrer"><ColorButton>HackCloud repo</ColorButton></a>
            <a className="link" href="https://hack.uclaacm.com/archive#fall-2022-hackschool" target="_blank" rel="noreferrer"><ColorButton>ACM Hack Site</ColorButton></a>
          </div>
        </div>
      </div>
      <div className="postEntry">
        <h2>ACM Hack - HackFam</h2>
        <div className='row'>
          <div>
            <p className='paragraphBlock'>
              ACM Hack's HackCloud is a quarter long workshop series exploring the field of cloud computing, the modern backbone for 
              designing and deploying highly scalable, reliable, and available software services. For UCLA ACM's first time ever, ACM Hack 
              dived into cloud fundamentals and best practices, tying the concepts into practical hands-on demos with Amazon Web Services.
            </p>
            <p className='paragraphBlock'>
              <h3>Skills:</h3>
            </p>
            <div>
              <Chip label="React" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
            </div>
            <p className='paragraphBlock'>
              <h3>Resources:</h3>
            </p>
            <a className="link" href="https://hack.uclaacm.com/" target="_blank" rel="noreferrer"><ColorButton>ACM Hack Site</ColorButton></a>
          </div>
        </div>
      </div>
      <div className="postEntry">
        <h2>ACM Cloud and Distributed Systems Initiative</h2>
        <div className='row'>
          <div>
            <p className='paragraphBlock'>
              ACM Cloud aims to providing resources to build a strong intuition of the architectural foundations of the modern
               cloud environment through project-based hands-on experience. ACM Cloud comprises of a weekly workshop series covering
               distributed system fundamentals and two hours worth of work time for our group distributed file system project.
            </p>
            <p className='paragraphBlock'>
              <h3>Skills:</h3>
            </p>
            <div>
              <Chip label="Distributed Systems" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
              <Chip label="Docker" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
              <Chip label="Docker Compose" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
            </div>
            <p className='paragraphBlock'>
              <h3>Resources:</h3>
            </p>
            <a className="link" href="https://drive.google.com/drive/folders/1r2vc0GFLmUMr-iOZwwccKKrJfkeXe3B4?usp=drive_link" target="_blank" rel="noreferrer"><ColorButton>ACM Cloud Slides</ColorButton></a>
            <a className="link" href="https://github.com/SubramaniamSatyen/RPCDemo" target="_blank" rel="noreferrer"><ColorButton>RPC Demo</ColorButton></a>
            <a className="link" href="https://docs.google.com/document/d/1lz-736htMtZeV3krSLNeRRzxQcI3H0fHn87OdWKZwGI/edit?usp=sharing" target="_blank" rel="noreferrer"><ColorButton>Project Spec</ColorButton></a>
          </div>
        </div>
      </div>
      <h1 className='leftAlign'>Other Projects: </h1>
      <div className="postEntry">
        <h2>Voice Activated Calculator</h2>
        <div className='row'>
          <div>
            <p className='paragraphBlock'>
              To showcase a strong understanding of using sensors to observe and analyze experimental results, we made use of an Arduino Nano
               to process speech data, construct a coherent internal representation of the digits spoken, and visualize the sum.
            </p>
            <p className='paragraphBlock'>
              <h3>Skills:</h3>
            </p>
            <div>
              <Chip label="Tensorflow" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
              <Chip label="Python" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
              <Chip label="Arduino" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
              <Chip label="Pyfirmata" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
            </div>
            <p className='paragraphBlock'>
              <h3>Resources:</h3>
            </p>
            <a className="link" href="https://docs.google.com/presentation/d/1KfZw5EOzLQJrUtPOuc-XcVbb35R4j-Fn6mUgvgD-LCw/edit?usp=sharing" target="_blank" rel="noreferrer"><ColorButton>Slide Showcase</ColorButton></a>
          </div>
        </div>
      </div>
      <div className="postEntry">
        <h2>HackSpace 2022: ReactWithMe</h2>
        <div className='row'>
          <div>
            <p className='paragraphBlock'>
              An mobile app created with a team of four UCLA students during the course of a quarter: ReactWithMe. Our app allows users to 
              add timestamped reactions when watching a video, then share those reactions so friends can see you react in real time as they
              watch the same content. The app was created using firebase for persistent storage and React Native for our UI.
            </p>
            <p className='paragraphBlock'>
              <h3>Skills:</h3>
            </p>
            <div>
              <Chip label="React Native" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
              <Chip label="Firebase" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
            </div>
            <p className='paragraphBlock'>
              <h3>Resources:</h3>
            </p>
            <a className="link" href="https://github.com/SubramaniamSatyen/HackSpace2022" target="_blank" rel="noreferrer"><ColorButton>GitHub Repo</ColorButton></a>
          </div>
        </div>
      </div>
      <div className="postEntry">
        <h2>Class Projects</h2>
        <div className='row'>
          <div>
            <p className='paragraphBlock'>
              Below are links to my work for UCLA's core computer science classes:
              <ul>
                <li>
                  CS 35L - Software Construction: Assignments cover a range of programming frameworks and languages (Python, Lisp, React, etc.)
                  and culminate in designing a three tiered web application.
                </li>
                <li>
                  CS 33 - Computer Architecture: Assignments cover code tracing through x86-64 machine language code, thread level parallelism,
                  synchronization, and virtual memory.
                </li>
                <li>
                  CS 32 - Introduction to Computer Science II: Assignments test sorting, recursion, time complexity, polymorphism, and advanced data structures. 
                </li>
                <li>
                  CS 31 - Introduction to Computer Science I: Assignments test control flow, arrays, pointers, and classes. 
                </li>
              </ul>
            </p>
            <p className='paragraphBlock'>
              <h3>Skills:</h3>
            </p>
            <div>
              <Chip label="C++" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
              <Chip label="C" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
              <Chip label="Python" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
              <Chip label="React" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
              <Chip label="Lisp" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
              <Chip label="MongoDB" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
            </div>
            <p className='paragraphBlock'>
              <h3>Resources:</h3>
            </p>
            <a className="link" href="https://github.com/SubramaniamSatyen/CS35L" target="_blank" rel="noreferrer"><ColorButton>CS 35L Repo</ColorButton></a>
            <a className="link" href="https://github.com/hiimvincent/bruin-rides" target="_blank" rel="noreferrer"><ColorButton>CS 35L Project Repo</ColorButton></a>
            <a className="link" href="https://github.com/SubramaniamSatyen/CS33" target="_blank" rel="noreferrer"><ColorButton>CS 33 Repo</ColorButton></a>
            <a className="link" href="https://github.com/SubramaniamSatyen/CS32" target="_blank" rel="noreferrer"><ColorButton>CS 32 Repo</ColorButton></a>
            <a className="link" href="https://github.com/SubramaniamSatyen/CS31" target="_blank" rel="noreferrer"><ColorButton>CS 31 Repo</ColorButton></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
