import { Chip } from '@mui/material';
import PostBody from '../components/PostBody';
import PostHeader from '../components/PostHeader';

import AWS from '../images/AWS.png';
import PB from '../images/PlannedBruin.jpg';

import {INCLUDE_IMAGE_WIDTH} from '../constants';

import '../App.css';

function Awards({ dimensions }) {
  return (
    <div className="App application">
      <h1 className='leftAlign'>Awards</h1>
      <div className="postEntry">
        <PostHeader 
          id='saa-c02' 
          text='AWS Solutions Architect SAA-C02'
        />
        <PostBody
          blurb="AWS Certified Solutions Architect - Associate showcases knowledge and skills in AWS technology, across a wide range of 
          AWS services. The focus of this certification is on the design of cost and performance optimized solutions, demonstrating a 
          strong understanding of the AWS Well-Architected Framework."
          links={[{'link': 'https://drive.google.com/file/d/1X_t5qzVTFdNMWExGCYOK-L3hkmZHaeSb/view?usp=sharing', 'text': 'View Certification'}]}  
          showLogo={dimensions.width > INCLUDE_IMAGE_WIDTH}
          logo={AWS}
          logoWidth='180'
        />  
      </div>
      <div className="postEntry">
        <PostHeader 
          id='hack-on-the-hill' 
          text='UCLA Hack on the Hill 9 - Best in Education'
        />
        <PostBody
          blurb="PlannedBruin is a student-friendly enrollment planner designed to supply UCLA students with a four year class schedule,
           saving students from suffering from the common struggles surrounding enrollment restrictions, class availability, 
           confusing prerequisite requirements, and more. This application won Best in Education at UCLA's annual Hack on the Hill hackathon."
          links={[{'link': 'https://github.com/Lim-Stanley/class-plan', 'text': 'View Repo'},
                  {'link': 'https://hoth.uclaacm.com/', 'text': 'Hack on the Hill Site'}]} 
          showLogo={dimensions.width > INCLUDE_IMAGE_WIDTH}
          logo={PB}
          logoWidth='300' 
        />  
      </div>
      <div className="postEntry">
        <PostHeader 
          id='upe' 
          text='UCLA Computer Science Honor Society (UPE) - Tutoring Chair'
        />
        <PostBody
          blurb="Upsilon Pi Epsilon is the International Honor Society for the Computing and Information Disciplines. UPE aims to maximize 
          the personal and professional growth of students in the field of Computer Science. To be eligible for UPE membership, undergraduates 
          must rank in the top 1/3rd of the senior class, have at least a 3.5 GPA, and complete community service requirements."
          links={[{'link': 'https://upe.seas.ucla.edu/', 'text': 'UCLA UPE'}]}  
        />  
      </div>
      <div className="postEntry">
        <PostHeader 
          id='hkn' 
          text='UCLA Electrical Engineering Honor Society (HKN) - Member'
        />
        <PostBody
          blurb="Eta Kappa Nu is an international Honor Society for Electrical and Computer Engineering. By organizing peer-to-peer tutoring, 
          various workshops, review sessions, and career fairs, HKN wants to support and connect our engineering students with the best 
          resources to enable them to succeed in academics and to explore their career options. To be eligible for HKN membership, undergraduates 
          must rank in the top 1/3rd of the senior class, have at least a 3.5 GPA, and complete community service requirements."
          links={[{'link': 'https://hkn.ee.ucla.edu/', 'text': 'UCLA HKN'}]}  
        />  
      </div>
      <div className="postEntry">
        <PostHeader 
          id='tbp' 
          text='UCLA Engineering Honor Society (TBP) - Member'
        />
        <PostBody
          blurb="Tau Beta Pi is the national honor society representing the entire engineering profession, and the California Epsilon chapter
           has served the UCLA community since 1952. By recognizing professional achievement, as well as service, Tau Beta Pi strives to
            uphold its creed of “Integrity and Excellence in Engineering.” To be eligible for HKN membership, undergraduates must rank in the
             top 1/5rd of the senior class and complete community service requirements."
          links={[{'link': 'https://tbp.seas.ucla.edu/', 'text': 'UCLA TBP'}]}  
        />  
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
