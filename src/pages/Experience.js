import PNNL from '../images/PNNL_Logo.png';
import LAHD from '../images/LAHD_Logo.png';
import Bond from '../images/Bond_Logo.png'

import PostHeader from '../components/PostHeader';
import {INCLUDE_IMAGE_WIDTH} from '../constants'

import '../App.css';
import PostBody from '../components/PostBody';

function Experience({ dimensions }) {
  return (
    <div className="App application">
      <h1 className='leftAlign'>Work Experience: </h1>
      <div className="postEntry">
        <PostHeader 
          id='pnnl' 
          text='Pacific Northwest National Laboratory - Software Engineering Intern'
        />
        <PostBody
          blurb="Pacific Northwest National Laboratory (PNNL) is a leading center for scientific discovery in data analytics and for
          technological innovation in sustainable energy and national security. PNNL is operated by Battelle and operates out of Richland,
          Washington."
          accomplishments={
            ['Produced Python unit tests for Pyspark codebase and integrate into Atlassian Bamboo CI/CD',
            'Integrated automatic semantic versioning of custom python package code into ETL pipeline',
            'Migrated development scale pipeline to AWS Glue and AWS EMR, with AWS Step Functions and Apache Oozie respectively for orchestration management, to evaluate viability as an alternative to Databricks pipeline']
          }
          skills={['Python', 'AWS S3', 'AWS EC2', 'AWS Glue', 'AWS EMR', 'Databricks', 'Pyspark']}
          showLogo={dimensions.width > INCLUDE_IMAGE_WIDTH}
          logo={PNNL}
          logoAlt='PNNL Logo'
          logoWidth='200'
          logoHeight='200'
        />
      </div>
      <div className="postEntry">
        <PostHeader 
          id='lahd' 
          text='Los Angeles Housing Department - Student Worker'
        />
        <PostBody
          blurb="The Los Angeles Housing Department (LAHD) is concerned with managing public ownership documentation and enforcing compliance 
          with statewide fees. LAHD's billing team manages both the internal and external facing billing websites, as well as processing
          payment from in-person and mail sources."
          accomplishments={
            ['Reduced billing portal load time by 90% by parallelizing SQL stored procedures and .NET API endpoints',
            'Interfaced with Paymentus, CyberSource, and Elavon payment gateway APIs to facilitate customer payment',
            'Developed API to streamline process of adding invoice entries to Microsoft SQL Server database and secured endpoints with bearer authentication token']
          }
          skills={['SQL', 'ASP.NET', 'C#', 'JavaScript']}
          showLogo={dimensions.width > INCLUDE_IMAGE_WIDTH}
          logo={LAHD}
          logoAlt='LAHD Logo'
          logoHeight='100'
        />
      </div>
      <div className="postEntry">
        <PostHeader 
          id='bond-intelligence' 
          text='Bond Intelligence - Software Engineering Intern'
        />
        <PostBody
          blurb="Bond Intelligence is a startup in the University of Washington's CoMotion accelerator. Bond Intelligence provides data
          aggregation solutions and comprehensive suite of AI algorithms for bond pricing, trade workflow automation, 
          pre-trade signals and market surveillance."
          accomplishments={
            ['Predicted bond price with mean absolute error of less than 5 cents with TensorFlow deep learning regression and forecasting models',
            'Classified bond rating and risk with TensorFlow Boosted Trees models',
            'Generated recommendations for user-specific preferences on Looker using Sci-kit-Learn agglomerative clustering model for grouping and Google Forms and BigQuery to persist user interests',
            'Aggregated access to previously developed microservices within Looker by constructing React extension',
            'Assembled RESTful quant API service on Google Cloud Run to query BigQuery data, fetch calculated values from API, and visualize content with JavaScript on Looker dashboard']
          }
          skills={['Tensorflow', 'SciKit Learn', 'React', 'Typescript', 'Looker', 'GCP BigQuery', 'GCP App Engine']}
          showLogo={dimensions.width > INCLUDE_IMAGE_WIDTH}
          logo={Bond}
          logoAlt='Bond Intelligence Logo'
          logoHeight='90'
        />
      </div>
      <h1 className='leftAlign'>Teaching Experience: </h1>
      <div className="postEntry">
        <PostHeader 
          id='wyzant' 
          text='Wyzant Tutoring - C++ Fundamentals'
        />
        <PostBody
          blurb="Tutored C++ fundamentals one on one virtually over Zoom. Tutoring involved multiple hourly sessions and was divided into lecture and
          practice. Preparation involved creating google slides, code examples, and practice questions and projects."
          skills={['C++']}
          links={[{'link': 'https://github.com/SubramaniamSatyen/C-Tutoring', 'text': 'Code Examples'},
                  {'link': 'https://drive.google.com/drive/folders/1GFDiLcw0kYhzz-oqBZ3PTXw3i8utoxOz?usp=drive_link', 'text': 'Slides'}]}
        />  
      </div>
      <div className="postEntry">
        <PostHeader 
          id='learning-assistant' 
          text='UCLA Learning Assistant'
        />
        <PostBody
          blurb="Acted as a Learning Assistant for the undergraduate core computer science classes CS 31: Introduction to Computer Science I
          and CS32: Introduction to Computer Science II. Prepared practice and lead weekly two hour long discussion sections, as well
          as career building workshops throughout quarter. Course curriculum covered fundamental topics like data structures, time complexity,
          object oriented design, and polymorphism."
          skills={['C++']}
          links={[{'link': 'https://web.cs.ucla.edu/classes/spring1d/cs31/syllabus.html', 'text': 'CS 31 Syllabus'},
                  {'link': 'https://web.cs.ucla.edu/classes/spring1d/cs32/syllabus.html', 'text': 'CS 32 Syllabus'},
                  {'link': 'https://github.com/SubramaniamSatyen/CS32_LA', 'text': 'CS 32 Practice Repo'}]}
        />  
      </div>
    </div>
  );
}

export default Experience;
