import { Chip } from '@mui/material';
import PostBody from '../components/PostBody';
import PostHeader from '../components/PostHeader';

import AWS from '../images/AWS.png';
import PB from '../images/PlannedBruin.jpg';

import {INCLUDE_IMAGE_WIDTH} from '../constants';

import '../App.css';

function Awards({ dimensions }) {
  const platforms = ["AWS S3", "AWS EC2", "AWS Lambda", "AWS Glue", "AWS EMR",  "AWS Elastic Beanstalk", "AWS Route 53", "AWS Lambda", "DataHub",
                    "Looker", "GCP BigQuery", "GCP Cloud Run", "GCP App Engine", "Databricks", "Firebase", "MongoDB"]
  const frameworks_tools = ["Docker", "Docker Compose", "TensorFlow", "SciKit Learn", "PyTorch", "Pyspark", "Apache Spark", 
                            "Linux", "Arduino", "ASP.NET", "Express.js"]
  const concepts = ["Data Structures", "Algorithms", "OOP", "Cloud Computing", "Distributed Systems", "Machine Learning", "AI", "NLP"]
  const languages = ["Python", "C++", "C", "C#", "JavaScript", "React", "React Native", "TypeScript",  "SQL", "Lisp"]  

  return (
    <div className="App application">
      <h1 className='leftAlign title'>Awards</h1>
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
          noStyle={false}
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
      <h1 className='leftAlign title'>Skills</h1>
      <div className="postEntry">
        <PostHeader 
          id='platforms' 
          text='Platforms'
        />
        <div className='skillList'>
          {platforms.map((name) => <Chip label={name} className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400, boxShadow: '0 3px 3px rgb(0 0 0 / 0.2)'}} />)}
        </div>
      </div>
      <div className="postEntry">
        <PostHeader 
          id='frameworks' 
          text='Frameworks and Tools'
        />
        <div className='skillList'>
          {frameworks_tools.map((name) => <Chip label={name} className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400, boxShadow: '0 3px 3px rgb(0 0 0 / 0.2)'}} />)}
        </div>
      </div>
      <div className="postEntry">
        <PostHeader 
          id='concepts' 
          text='Concepts'
        />
        <div className='skillList'>
          {concepts.map((name) => <Chip label={name} className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400, boxShadow: '0 3px 3px rgb(0 0 0 / 0.2)'}} />)}
        </div>
      </div>
      <div className="postEntry">
        <PostHeader 
          id='languages' 
          text='Languages'
        />
        <div className='skillList'>
          {languages.map((name) => <Chip label={name} className="skill" style={{backgroundColor:'var(--dark-secondary)', fontSize: '1em', color: 'var(--background-highlight)', fontWeight: 400, boxShadow: '0 3px 3px rgb(0 0 0 / 0.2)'}} />)}
        </div>
      </div>
    </div>
  );
}

export default Awards;
