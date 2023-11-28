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
          technological innovation in sustainable energy and national security. PNNL is operated by Battelle and fosters a wide breadth of 
          engineering projects - I worked as a member of the MLE and Combined Ops team under the Software Engineering Architectures (SEA) group."
          accomplishments={
            ['Constructed pipeline for processing terabyte scale data using AWS services and Databricks',
            'Produced Python unit tests for Pyspark codebase and integrated into Atlassian Bamboo CI/CD',
            'Integrated automatic semantic versioning of custom python package code into data pipeline',
            'Migrated development scale pipeline to AWS Glue and AWS EMR, with AWS Step Functions and Apache Oozie respectively for orchestration management',
            'Conducted AWS Lambda performance analysis through the AWS CLI and refactored function to utilize AWS S3 Select functionality',
            'Explored DataHub data catalog, aggregating schema lineage for cross platform data transformations along ETL pipeline']
          }
          skills={['Python', 'AWS S3', 'AWS EC2', 'AWS Lambda', 'AWS Glue', 'AWS EMR', 'Databricks', 'Pyspark', 'DataHub']}
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
            'Securely interfaced with Paymentus, CyberSource, and Elavon payment gateway APIs to atomically facilitate customer payment to OLTP database',
            'Leveraged C# to efficiently query Microsoft SQL Server database and balance payment across credit and debit fees on a shared invoice',
            'Refactored and unified logic for automatic approval of property exemptions across internal billing system and customer portal by way of unified API',
            'Developed API to streamline process of adding invoice entries to Microsoft SQL Server database and secured endpoints with bearer authentication token']
          }
          skills={['SQL', 'ASP.NET', 'C#', 'JavaScript', 'Shell']}
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
            'Generated recommendations for user-specific preferences on Looker using SciKit Learn agglomerative clustering model for grouping and Google Forms and BigQuery to persist user interests',
            'Aggregated access to developed microservices within Looker by constructing React extension',
            'Assembled RESTful quant API service on Google Cloud Run to query BigQuery data, fetch calculated values from API, and visualize content with JavaScript on Looker dashboard',
            'Developed internal SciKit Learn and TensorFlow machine learning teaching resources and documentation']
          }
          skills={['Tensorflow', 'SciKit Learn', 'React', 'Typescript', 'Looker', 'GCP BigQuery', 'GCP App Engine']}
          links={[{'link': 'https://github.com/SubramaniamSatyen/BondMLWorkshops', 'text': 'ML Documentation'}]}
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
          practice, with monthly projects to demonstrate retention of skills. Preparation for lessons involved creating google slides, code examples, 
          and practice questions and project template code."
          skills={['C++', 'Data Structures', 'Algorithms', 'OOP']}
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
          skills={['C++', 'Data Structures', 'Algorithms', 'OOP']}
          links={[{'link': 'https://web.cs.ucla.edu/classes/spring1d/cs31/syllabus.html', 'text': 'CS 31 Syllabus'},
                  {'link': 'https://web.cs.ucla.edu/classes/spring1d/cs32/syllabus.html', 'text': 'CS 32 Syllabus'},
                  {'link': 'https://github.com/SubramaniamSatyen/CS32_LA', 'text': 'CS 32 Practice Repo'}]}
        />  
      </div>
    </div>
  );
}

export default Experience;
