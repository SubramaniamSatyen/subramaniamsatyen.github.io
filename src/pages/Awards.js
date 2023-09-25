import { Chip } from '@mui/material';

import '../App.css';

function Awards() {
  return (
    <div className="App application">
      <h1 className='leftAlign'>Awards</h1>
      <div className="postEntry">
        <h2>AWS Solutions Architect SAA-C02</h2>
      </div>
      <div className="postEntry">
        <h2>UCLA Hack on Hill - Best in Education</h2>
      </div>
      <div className="postEntry">
        <h2>Upsilon Pi Epsilon (Computer Science Honor Society)</h2>
      </div>
      <div className="postEntry">
        <h2>Eta Kappa Nu (Electrical Engineering Honor Society)</h2>
      </div>
      <div className="postEntry">
        <h2>Tau Beta Pi (Engineering Honor Society)</h2>
      </div>
      <h1 className='leftAlign'>Skills</h1>
      <div className="postEntry paddingTop">
        <Chip label="Python" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
        <Chip label="Tensorflow" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
        <Chip label="SciKit Learn" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
        <Chip label="NLP" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
        <Chip label="AWS S3" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
        <Chip label="AWS EC2" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
        <Chip label="AWS Glue" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
        <Chip label="AWS EMR" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
        <Chip label="AWS Elastic Beanstalk" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
        <Chip label="AWS Route 53" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
        <Chip label="AWS Lambda" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
        <Chip label="Looker" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
        <Chip label="GCP BigQuery" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
        <Chip label="GCP App Engine" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
        <Chip label="Docker" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
        <Chip label="Docker Compose" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
        <Chip label="Distributed Systems" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
        <Chip label="Arduino" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
        <Chip label="Databricks" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
        <Chip label="Pyspark" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
        <Chip label="C++" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
        <Chip label="C" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
        <Chip label="React" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
        <Chip label="Express.js" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} /> 
        <Chip label="React Native" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
        <Chip label="Typescript" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
        <Chip label="JavaScript" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
        <Chip label="Firebase" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
        <Chip label="SQL" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
        <Chip label="ASP.NET" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
        <Chip label="Lisp" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
        <Chip label="MongoDB" className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400}} />
      </div>
    </div>
  );
}

export default Awards;
