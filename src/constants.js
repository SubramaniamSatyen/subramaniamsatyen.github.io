import PNNL from './images/PNNL_Logo.png';
import LAHD from './images/LAHD_Logo.jpg';
import BOND from './images/Bond_Logo.jpg';
import ScAI from './images/ScAI_Logo.png';
import SRI from './images/SRI_Lab.png';
import Cloud from './images/HackCloud.png';
import ACMCloud from './images/ACMCloud.png';
import StackSchool from './images/StackSchool.png';
import HackFam from './images/HackFam.png';
import Calc from './images/Calculator.png';
import ProjectQuest from './images/Project_Quest.png';

export const INCLUDE_IMAGE_WIDTH = 1000
export const MOBILE_THRESHOLD = 800

export const RESUME_LINK = "https://drive.google.com/file/d/1TSpoFFq_fPkMvNWccngjbUsnVKA4IFm6/view?usp=sharing"
export const LINKED_IN_LINK = "https://www.linkedin.com/in/satyen-sub"

export const POSTS = [{

    // Experience Posts
    'category': 'experience',
    'id': 'pnnl', 
    'hidden': false,
    'title': 'Pacific Northwest National Laboratory - Software Engineering Intern',
    'start': 1685602800000,
    'end': 9999999999999, 
    'location': 'Seattle, Washington',
    'blurb': 'Pacific Northwest National Laboratory (PNNL) is a leading center for scientific discovery in data analytics and for technological innovation in sustainable energy and national security. PNNL is operated by Battelle and fosters a wide breadth of engineering projects - I worked as a member of the MLE and Combined Ops team under the Software Engineering Architectures (SEA) group.',
    'accomplishments': ['Constructed pipeline for processing terabyte scale data using AWS services and Databricks',
              'Produced Python unit tests for Pyspark codebase and integrated into Atlassian Bamboo CI/CD',
              'Integrated automatic semantic versioning of custom python package code into data pipeline',
              'Migrated development scale pipeline to AWS Glue and AWS EMR, with AWS Step Functions and Apache Oozie respectively for orchestration management',
              'Conducted AWS Lambda performance analysis through the AWS CLI and refactored function to utilize AWS S3 Select functionality',
              'Explored DataHub data catalog, aggregating schema lineage for cross platform data transformations along ETL pipeline'],
    'skills': ['Python', 'AWS S3', 'AWS EC2', 'AWS Lambda', 'AWS Glue', 'AWS EMR', 'Databricks', 'Pyspark', 'DataHub'],
    'logo': PNNL,
    'logoAlt': 'PNNL Logo',
    'logoWidth': '200',
    'logoHeight': '200'
  }, {
    'category': 'experience',
    'id':'lahd', 
    'hidden': false,
    'title':'Los Angeles Housing Department - Student Worker',
    'location': 'Los Angeles, California',
    'start': 1638345600000,
    'end': 1693551600000,
    'blurb':"The Los Angeles Housing Department (LAHD) is concerned with managing public ownership documentation and enforcing compliance with statewide fees. LAHD's billing team manages both the internal and external facing billing websites, as well as processing payment from in-person and mail sources.",
    'accomplishments': ['Reduced billing portal load time by 90% by parallelizing SQL stored procedures and .NET API endpoints',
            'Securely interfaced with Paymentus, CyberSource, and Elavon payment gateway APIs to atomically facilitate customer payment to OLTP database',
            'Leveraged C# to efficiently query Microsoft SQL Server database and balance payment across credit and debit fees on a shared invoice',
            'Refactored and unified logic for automatic approval of property exemptions across internal billing system and customer portal by way of unified API',
            'Developed API to streamline process of adding invoice entries to Microsoft SQL Server database and secured endpoints with bearer authentication token'],
    'skills': ['SQL', 'ASP.NET', 'C#', 'JavaScript', 'Shell'],
    'logo': LAHD,
    'logoAlt':'LAHD Logo',
    'logoWidth':'200'
  }, {
    'category': 'experience',
    'id': 'bond-intelligence',
    'hidden': false,
    'title': 'Bond Intelligence - Software Engineering Intern',
    'location': 'Seattle, Washington',
    'start': 1598943600000,
    'end': 1669881600000,
    'blurb': "Bond Intelligence is a startup in the University of Washington's CoMotion accelerator. Bond Intelligence provides data aggregation solutions and comprehensive suite of AI algorithms for bond pricing, trade workflow automation, pre-trade signals and market surveillance.",
    'accomplishments': ['Predicted bond price with mean absolute error of less than 5 cents with TensorFlow deep learning regression and forecasting models',
            'Classified bond rating and risk with TensorFlow Boosted Trees models',
            'Generated recommendations for user-specific preferences on Looker using SciKit Learn agglomerative clustering model for grouping and Google Forms and BigQuery to persist user interests',
            'Aggregated access to developed microservices within Looker by constructing React extension',
            'Assembled RESTful quant API service on Google Cloud Run to query BigQuery data, fetch calculated values from API, and visualize content with JavaScript on Looker dashboard',
            'Developed internal SciKit Learn and TensorFlow machine learning teaching resources and documentation'],
    'skills': ['Tensorflow', 'SciKit Learn', 'React', 'Typescript', 'Looker', 'GCP BigQuery', 'GCP App Engine'],
    'links': [{'link': 'https://github.com/SubramaniamSatyen/BondMLWorkshops', 'text': 'ML Documentation'}],
    'logo': BOND,
    'logoAlt': 'Bond Intelligence Logo',
    'logoHeight': '200'
  },
  
  // Teaching Posts
  {
    'category': 'teach',
    'id': 'wyzant',
    'hidden': false,
    'title': 'Wyzant Tutoring - C++ Fundamentals',
    'location': 'Remote',
    'start': 1669881600000,
    'end': 9999999999999, 
    'blurb': "Tutored C++ fundamentals one on one virtually over Zoom. Tutoring involved multiple hourly sessions and was divided into lecture and practice, with monthly projects to demonstrate retention of skills. Preparation for lessons involved creating google slides, code examples, and practice questions and project template code.",
    'skills': ['C++', 'Data Structures', 'Algorithms', 'OOP'],
    'links': [{'link': 'https://github.com/SubramaniamSatyen/C-Tutoring', 'text': 'Code Examples'},
            {'link': 'https://drive.google.com/drive/folders/1GFDiLcw0kYhzz-oqBZ3PTXw3i8utoxOz?usp=drive_link', 'text': 'Slides'}]
  }, {
    'category': 'teach',
    'id': 'learning-assistant', 
    'hidden': false,
    'title': 'UCLA Learning Assistant',
    'location': 'Los Angeles, California',
    'start': 1641024000000,
    'end': 1654066800000,
    'blurb': "Acted as a Learning Assistant for the undergraduate core computer science classes CS 31: Introduction to Computer Science I and CS32: Introduction to Computer Science II. Prepared practice and lead weekly two hour long discussion sections, as well as career building workshops throughout quarter. Course curriculum covered fundamental topics like data structures, time complexity, object oriented design, and polymorphism.",
    'skills': ['C++', 'Data Structures', 'Algorithms', 'OOP'],
    'links': [{'link': 'https://web.cs.ucla.edu/classes/spring1d/cs31/syllabus.html', 'text': 'CS 31 Syllabus'},
            {'link': 'https://web.cs.ucla.edu/classes/spring1d/cs32/syllabus.html', 'text': 'CS 32 Syllabus'},
            {'link': 'https://github.com/SubramaniamSatyen/CS32_LA', 'text': 'CS 32 Practice Repo'}]
  },
  
  // Research Projects
  {
    'category': 'research',
    'id': 'ucla-sensing-and-robotics',
    'hidden': false,
    'title': 'UCLA Sensing and Robotics for Infrastructure',
    'location': 'Los Angeles, California',
    'start': 1677657600000,
    'end': 1701417600000,
    'blurb': "UCLA's Sensing and Robotics for Infrastructure Lab's goal is to better understand and quantify the condition and remaining useful life of civil and mechanical infrastructure systems through the intelligent use of sensors and data. The lab visualizes this data in an accessible manner to enhance the process of maintaining and improving our infrastructure.",
    'accomplishments': ['Created CI/CD process to deploy a fast and filterable React dashboard to demystify road quality data using AWS Elastic Beanstalk',
                            'Deployed an Express.js API to perform calculations on data before passing to dashboard service',
                            'Configured visualization tool with SSL and custom domain using GoDaddy and AWS Route 53',
                            'Architected hosting for 3D point cloud LiDAR street visualizations using AWS S3'],
    'skills': ['React', 'Express.js', 'AWS S3', 'AWS EC2', 'AWS Elastic Beanstalk', 'AWS Route 53'],
    'links': [{'link': 'https://site.hspa.info/', 'text': 'HSPA Site'},
              {'link': 'https://drive.google.com/file/d/1vva4XtuSWtrcsaBBjzvu_F2UR0Y6hVsX/view?usp=sharing', 'text': 'SRI Certificate'},
              {'link': 'https://sri-lab.seas.ucla.edu/', 'text': 'SRI Lab Site'}],
    'logo': SRI,
    'logoWidth': '250'
  }, {
    'category': 'research',
    'id': 'ucla-scalable-analytics-institute',
    'hidden': false,
    'title': 'UCLA Scalable Analytics Institute',
    'location': 'Los Angeles, California',
    'date': 'May 2023 - Sep 2023',
    'start': 1682924400000,
    'end': 9999999999999,
    'blurb': "UCLA's Scalable Analytics Institute is focused on addressing the continuing growth of data and the demand for smart analytics to mine that data by solving the three-pronged challenge created by the exploding size of big data, the growing complexity of big data, and the increased sophistication of analytics that can be used to extract patterns and trends from the data.",
    'accomplishments': ['Evaluated efficacy of large language models in computation scenarios by sourcing college-level scientific problems',
                      'Extracted keyword and equations for model training, and computational questions using optical recognition tools',
                      'Summarize accuracy of NLP model in paper by classifying incorrect predictions into 10 error categories'],
    'skills': ['Python', 'Shell', 'NLP'],
    'links': [{'link': 'https://drive.google.com/file/d/1p2c0Z70m9Td4RDMVzSrBRpAb2kBcJ4Hc/view?usp=sharing', 'text': 'Read Paper'},
            {'link': 'https://github.com/mandyyyyii/scibench/tree/main', 'text': 'Benchmark Repo'}],
    'logo': ScAI,
    'logoWidth': '200'
  },
    
  // Club Project
  {
    'category': 'club',
    'id': 'distributed-systems',
    'hidden': false,
    'title': 'ACM Cloud and Distributed Systems Initiative',
    'location': 'Los Angeles, California',
    'start': 1693551600000,
    'end': 1701417600000,
    'blurb': "ACM Cloud aims to providing resources to build a strong intuition of the architectural foundations of the modern cloud environment through project-based hands-on experience. ACM Cloud comprises of a weekly workshop series covering distributed system fundamentals and two hours worth of work time for our group distributed file system project.",
    'skills': ['Python', 'Distributed Systems', 'Docker', 'Docker Compose'],
    'links': [{'link': 'https://drive.google.com/drive/folders/1r2vc0GFLmUMr-iOZwwccKKrJfkeXe3B4?usp=drive_link', 'text': 'ACM Cloud Slides'},
            {'link': 'https://github.com/SubramaniamSatyen/RPCDemo', 'text': 'RPC Demo'},
            {'link': 'https://docs.google.com/document/d/1lz-736htMtZeV3krSLNeRRzxQcI3H0fHn87OdWKZwGI/edit?usp=sharing', 'text': 'Project Spec'}],
    'logo': ACMCloud,
    'logoWidth': '300'
  }, {
    'category': 'club',
    'id': 'hackfam',
    'hidden': false,
    'title': 'ACM Hack - HackFam',
    'location': 'Los Angeles, California',
    'start': 1693551600000,
    'end': 1701417600000,
    'blurb': "ACM Hack's HackFam is a mentorship program hosted by ACM Hack's officer team. Each Hack Family is led by two fam heads and manages 15 to 20 students, offering social, academic, and career building advice and events throughout the course of the quarter. Under my leadership, students participated in a year long full stack mobile development project using React Native and Expo for a cross platform UI, and firebase for persistent storage of images and user data.",
    'skills': ['React', 'React Native', 'Firebase'],
    'links': [{'link': 'https://hack.uclaacm.com/', 'text': 'ACM Hack Site'}],
    'logo': HackFam,
    'logoWidth': '400'
  }, {
    'category': 'club',
    'id': 'hackcloud',
    'hidden': false,
    'title': 'ACM Hack - HackCloud',
    'location': 'Los Angeles, California',
    'start': 1677657600000,
    'end': 1685602800000,
    'blurb': "ACM Hack's HackCloud is a weekly, two hour long workshop series exploring the field of cloud computing, the modern backbone for designing and deploying highly scalable, reliable, and available software services. For UCLA ACM's first time ever, ACM Hack dived into cloud fundamentals and best practices, tying the concepts into practical hands-on demos with Amazon Web Services. Topics discussed include the following: <li>VM Computing|Serverless Services|DevOps|Continuous Integration and Continuous Deployment|Machine Learning<li>",
    'skills': ['React', 'AWS S3', 'AWS EC2', 'AWS Lambda', 'Docker', 'AWS Code Deploy', 'AWS Code Pipeline'],
    'links': [{'link': 'https://github.com/uclaacm/hack-curriculum/tree/main/HackCloud', 'text': 'HackCloud Repo'},
            {'link': 'https://youtube.com/playlist?list=PLPO7_kXilXFYP3nE3MfFmMg2BU9R4cKUu&si=9UvMDZ-xwLnKn8Do', 'text': 'Workshop Recordings'},
            {'link': 'https://hack.uclaacm.com/archive#fall-2022-hackschool', 'text': 'ACM Hack Site'}],
    'logo': Cloud,
    'logoWidth': '300'
  }, {
    'category': 'club',
    'id': 'stackschool',
    'hidden': false,
    'title': 'ACM Hack - StackSchool',
    'location': 'Los Angeles, California',
    'start': 1662015600000,
    'end': 1669881600000,
    'blurb': "ACM StackSchool is a fullstack workshop series aiming to teach students to use the MERN tech stack. Over the course of seven weeks, we constructed a MERN social media application. To build a strong intutition for the tech stack, the ACM Hack officer team designed a four chapter textbook covering the essentials.",
    'skills': ['React', 'Express.js', 'MongoDB'],
    'links': [{'link': 'https://github.com/uclaacm/hack-curriculum/tree/main/stackschool', 'text': 'Textbook'},
            {'link': 'https://github.com/SubramaniamSatyen/WinterLearningStackschool', 'text': 'MERN Demo Repo'},
            {'link': 'https://github.com/SubramaniamSatyen/Stackschool_2023_Cat_Server', 'text': 'REST API Demo Repo'}],
    'logo': StackSchool,
    'logoWidth': '300'
  },
  
  // Other Projects
  {
    'category': 'other',
    'id': 'class-projects',
    'hidden': false,
    'title': 'Class Projects',
    'location': 'Los Angeles, California',
    'start': 1630479600000,
    'end': 9999999999999,
    'blurb': "Below are links to my work for UCLA's undergraduate computer science classes: <li>CS 111 - Operating Systems: Assignments cover a range of reimplementing unix commands, optimizing at the OS level, and working with various system calls.|CS 35L - Software Construction: Assignments cover a range of programming frameworks and languages (Python, Lisp, React, etc.) and culminate in designing a three tiered web application.|CS 33 - Computer Architecture: Assignments cover code tracing through x86-64 machine language code, thread level parallelism, synchronization, and virtual memory.|CS 32 - Introduction to Computer Science II: Assignments test sorting, recursion, time complexity, polymorphism, and advanced data structures.|CS 31 - Introduction to Computer Science I: Assignments test control flow, arrays, pointers, and classes.<li>",
    'skills': ['C++', "C", "Python", "React", "Lisp", "MongoDB"],
    'links': [{'link': "https://github.com/SubramaniamSatyen/CS111", 'text': "CS 111 Repo"},
            {'link': "https://github.com/SubramaniamSatyen/CS35L", 'text': "CS 35L Repo"},
            {'link': "https://github.com/hiimvincent/bruin-rides", 'text': "CS 35L Project Repo"},
            {'link': "https://github.com/SubramaniamSatyen/CS33", 'text': "CS 33 Repo"},
            {'link': "https://github.com/SubramaniamSatyen/CS32", 'text': "CS 32 Repo"},
            {'link': "https://github.com/SubramaniamSatyen/CS31", 'text': "CS 31 Repo"}],
  }, {
    'category': 'other',
    'id': 'voice-activated-calculator',
    'hidden': false,
    'title': 'Voice Activated Calculator',
    'location': 'Los Angeles, California',
    'start': 1677657600000,
    'end': 1685602800000,
    'blurb': "To showcase a strong understanding of using sensors to observe and analyze experimental results, we made use of an Arduino Nano to process speech data, construct a coherent internal representation of the digits spoken, and visualize the sum.",
    'skills': ['Tensorflow', 'Python', 'Arduino', 'Pyfirmata'],
    'links': [{'link': 'https://docs.google.com/presentation/d/1KfZw5EOzLQJrUtPOuc-XcVbb35R4j-Fn6mUgvgD-LCw/edit?usp=sharing', 'text': 'Slide Showcase'}],
    'logo': Calc,
    'logoWidth': '300'
  }, {
    'category': 'other',
    'id': 'reactwithme',
    'hidden': false,
    'title': 'HackSpace 2022: ReactWithMe',
    'location': 'Los Angeles, California',
    'start': 1646121600000,
    'end': 1654066800000,
    'blurb': "A mobile app created with a team of four UCLA students during the course of a quarter: ReactWithMe. Our app allows users to add timestamped reactions when watching a video, then share those reactions so friends can see you react in real time as they watch the same content. The app was created using firebase for persistent storage and React Native for our UI.",
    'skills': ['React Native', 'Firebase'],
    'links': [{'link': 'https://github.com/SubramaniamSatyen/HackSpace2022', 'text': 'GitHub Repo'}]
  }, {
    'category': 'other',
    'id': 'projectquest',
    'hidden': false,
    'title': 'Project Quest',
    'location': 'Bellevue, Washington',
    'start': 1598943600000,
    'end': 1622530800000,
    'blurb': "Project Quest is 3D, adventure RPG with a 16-bit art style, prominently featuring problem solving and strategy puzzles. Players begin by controlling the character of Ben, a first year TSA member, but later manage a larger party of diverse characters. After losing his Video Game Design TSA project in an accident, Ben and his friends must search through four expansive and distinct levels to find the project before it's too late! Throughout the game, players can interact with their environment to acquire coins, items, and weapons. Players can also visit the TSA shop to acquire more gear for coins. Enemies are present in each level, including mini-bosses, as well an fully-fledged final bosses.",
    'skills': ['C#'],
    'logo': ProjectQuest,
    'logoWidth': '400',
    'links': [{'link': 'https://subramaniamsatyen.itch.io/project-quest', 'text': 'Game Download'},
              {'link': 'https://drive.google.com/file/d/1Q9eihl2peHomRecCK1Em3EQCI1mR5XPf/view?usp=sharing', 'text': 'Documentation'}]

  }
]