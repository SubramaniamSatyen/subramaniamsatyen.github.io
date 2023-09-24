import PNNL from '../images/PNNL_Logo.png';
import LAHD from '../images/LAHD_Logo.png';
import Bond from '../images/Bond_Logo.png'

import Chip from '@mui/material/Chip';
import { ColorButton } from '../components/ColorButton';

import '../App.css';

function Experience() {
  return (
    <div className="App application">
      <h1 className='leftAlign'>Work Experience: </h1>
      <div className="postEntry">
        <h2 id='pnnl'><a href='#pnnl'>Pacific Northwest National Laboratory - Software Engineering Intern</a></h2>
        <div className='row'>
          <div>
            <p className='paragraphBlock'>
              Pacific Northwest National Laboratory (PNNL) is a leading center for scientific discovery in data analytics and for
               technological innovation in sustainable energy and national security. PNNL is operated by Battelle and operates out of Richland,
               Washington.
            </p>
            <p className='paragraphBlock'>
              <h3>Accomplishments:</h3>
              <ul className='accomplishments'>
                <li>
                  Produced Python unit tests for Pyspark codebase and integrate into Atlassian Bamboo CI/CD
                </li>
                <li>
                  Integrated automatic semantic versioning of custom python package code into ETL pipeline
                </li>
                <li>
                  Migrated development scale pipeline to AWS Glue and AWS EMR, with AWS Step Functions and Apache Oozie respectively for orchestration management, to evaluate viability as an alternative to Databricks pipeline
                </li>
              </ul>
            </p>
            <p className='paragraphBlock'>
              <h3>Skills:</h3>
            </p>
            <div>
              <Chip label="Python" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
              <Chip label="AWS S3" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
              <Chip label="AWS EC2" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
              <Chip label="AWS Glue" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
              <Chip label="AWS EMR" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
              <Chip label="Databricks" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
              <Chip label="Pyspark" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
            </div>
          </div>
          <div className='logo' >
            <img className='logoImage' alt='PNNL Logo' src={PNNL} width='200' height='200'/>
          </div>
        </div>
      </div>
      <div className="postEntry">
        <h2 id='lahd'><a href='#lahd'>Los Angeles Housing Department - Student Worker</a></h2>
        <div className='row'>
          <div>
            <p className='paragraphBlock'>
              The Los Angeles Housing Department (LAHD) is concerned with managing public ownership documentation and enforcing compliance 
              with statewide fees. LAHD's billing team manages both the internal and external facing billing websites, as well as processing
              payment from in-person and mail sources.
            </p>
            <p className='paragraphBlock'>
              <h3>Accomplishments:</h3>
              <ul className='accomplishments'>
                <li>
                  Reduced billing portal load time by 90% by parallelizing SQL stored procedures and .NET API endpoints
                </li>
                <li>
                  Interfaced with Paymentus, CyberSource, and Elavon payment gateway APIs to facilitate customer payment
                </li>
                <li>
                  Developed API to streamline process of adding invoice entries to Microsoft SQL Server database and secured endpoints with bearer authentication token
                </li>
              </ul>
            </p>
            <p className='paragraphBlock'>
              <h3>Skills:</h3>
            </p>
            <div>
              <Chip label="SQL" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
              <Chip label="ASP.NET" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
              <Chip label="C#" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
              <Chip label="JavaScript" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
            </div>
          </div>
          <div className='logo' >
            <img className='logoImage' alt='LAHD Logo' src={LAHD} height='100'/>
          </div>
        </div>
      </div>
      <div className="postEntry">
        <h2 id='bond-intelligence'><a href='#bond-intelligence'>Bond Intelligence - Software Engineering Intern</a></h2>
        <div className='row'>
          <div>
            <p className='paragraphBlock'>
              Bond Intelligence is a startup in the University of Washington's CoMotion accelerator. Bond Intelligence provides data
              aggregation solutions and comprehensive suite of AI algorithms for bond pricing, trade workflow automation, 
              pre-trade signals and market surveillance.
            </p>
            <p className='paragraphBlock'>
              <h3>Accomplishments:</h3>
              <ul className='accomplishments'>
                <li>
                  Predicted bond price with mean absolute error of less than 5 cents with TensorFlow deep learning regression and forecasting models
                </li>
                <li>
                  Classified bond rating and risk with TensorFlow Boosted Trees models
                </li>
                <li>
                  Generated recommendations for user-specific preferences on Looker using Sci-kit-Learn agglomerative clustering model for grouping and Google Forms and BigQuery to persist user interests
                </li>
                <li>
                  Aggregated access to previously developed microservices within Looker by constructing React extension
                </li>
                <li>
                Assembled RESTful quant API service on Google Cloud Run to query BigQuery data, fetch calculated values from API, and visualize content with JavaScript on Looker dashboard
                </li>
              </ul>
            </p>
            <p className='paragraphBlock'>
              <h3>Skills:</h3>
            </p>
            <div>
              <Chip label="Tensorflow" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
              <Chip label="SciKit Learn" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
              <Chip label="React" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
              <Chip label="Typescript" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
              <Chip label="Looker" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
              <Chip label="GCP BigQuery" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
              <Chip label="GCP App Engine" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
            </div>
          </div>
          <div className='logo' >
            <img className='logoImage' alt='Bond Logo' src={Bond} height='90'/>
          </div>
        </div>
      </div>
      <h1 className='leftAlign'>Teaching Experience: </h1>
      <div className="postEntry">
        <h2 id='wyzant'><a href='#wyzant'>Wyzant Tutoring - C++ Fundamentals</a></h2>
        <div className='row'>
          <div>
            <p className='paragraphBlock'>
              Tutored C++ fundamentals one on one virtually over Zoom. Tutoring involved multiple hourly sessions and was divided into lecture and
              practice. Preparation involved creating google slides, code examples, and practice questions and projects.
            </p>
            <p className='paragraphBlock'>
              <h3>Skills:</h3>
            </p>
            <div>
              <Chip label="C++" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
            </div>
            <p className='paragraphBlock'>
              <h3>Resources:</h3>
            </p>
            <a className="link" href="https://github.com/SubramaniamSatyen/C-Tutoring" target="_blank" rel="noreferrer"><ColorButton>Code Examples</ColorButton></a>
            <a className="link" href="https://drive.google.com/drive/folders/1GFDiLcw0kYhzz-oqBZ3PTXw3i8utoxOz?usp=drive_link" target="_blank" rel="noreferrer"><ColorButton>Slides</ColorButton></a>
          </div>
        </div>
      </div>
      <div className="postEntry">
        <h2 id='learning-assistant'><a href='#learning-assistant'>UCLA Learning Assistant</a></h2>
        <div className='row'>
          <div>
            <p className='paragraphBlock'>
              Acted as a Learning Assistant for the undergraduate core computer science classes <b>CS 31: Introduction to Computer Science I</b>
               and <b>CS32: Introduction to Computer Science II</b>. Prepared practice and lead weekly two hour long discussion sections, as well
               as career building workshops throughout quarter. Course curriculum covered fundamental topics like data structures, time complexity,
               object oriented design, and polymorphism.
            </p>
            <p className='paragraphBlock'>
              <h3>Skills:</h3>
            </p>
            <div>
              <Chip label="C++" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
            </div>
            <p className='paragraphBlock'>
              <h3>Resources:</h3>
            </p>
            <a className="link" href="https://web.cs.ucla.edu/classes/spring1d/cs31/syllabus.html" target="_blank" rel="noreferrer"><ColorButton>CS 31 Syllabus</ColorButton></a>
            <a className="link" href="https://web.cs.ucla.edu/classes/spring1d/cs32/syllabus.html" target="_blank" rel="noreferrer"><ColorButton>CS 32 Syllabus</ColorButton></a>
            <a className="link" href="https://github.com/SubramaniamSatyen/CS32_LA" target="_blank" rel="noreferrer"><ColorButton>CS 32 Practice Repo</ColorButton></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
