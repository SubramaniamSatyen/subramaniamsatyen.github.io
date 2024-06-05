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
import LastStand from './images/LastStand.png'
import ACMCloudAWS from './images/ACM_Cloud_AWS.png';
import HOTH from './images/HOTH.png';
import LearnPy from './images/learn_py.png'

export const INCLUDE_IMAGE_WIDTH = 1000
export const MOBILE_THRESHOLD = 800
export const PRESENT_DATE = 9999999999999;

export const RESUME_LINK = "https://drive.google.com/file/d/1BfXFiMnPF7VpCIMMbOhfo1BfuP_9UndP/view?usp=drive_link"
export const LINKED_IN_LINK = "https://www.linkedin.com/in/satyen-sub"

export const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

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
    'accomplishments': [
      'Constructed pipeline for processing terabyte scale data using AWS services and Databricks',
      'Produced Python unit tests for Pyspark codebase and integrated into Atlassian Bamboo CI/CD',
      'Integrated automatic semantic versioning of custom python package code into data pipeline',
      'Migrated development scale pipeline to AWS Glue and AWS EMR, with AWS Step Functions and Apache Oozie respectively for orchestration management',
      'Conducted AWS Lambda performance analysis through the AWS CLI and refactored function to utilize AWS S3 Select functionality',
      'Explored DataHub data catalog, aggregating schema lineage for cross platform data transformations along ETL pipeline',
      'Architected daily summary of data processing pipeline using CloudWatch metrics and AWS SNS subscriptions'
    ],
    'skills': {
      'platforms': ['AWS S3', 'AWS EC2', 'AWS Lambda', 'AWS CloudWatch', 'AWS SQS', 'AWS SNS', 'AWS Glue', 'AWS EMR', 'Databricks', 'DataHub'],
      'languages': ['Python', 'Scala'],
      'concepts': [],
      'frameworks': ['Pyspark', 'Apache Spark']
    },
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
    'skills': {
      'platforms': [],
      'languages': ['SQL', 'C#', 'JavaScript', 'HTML', 'CSS', 'Shell'],
      'concepts': [],
      'frameworks': ['ASP.NET', 'MS SQL Server']
    },
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
    'skills': {
      'platforms': ['Looker', 'GCP BigQuery', 'GCP App Engine', 'GCP Cloud Run'],
      'languages': ['TypeScript', 'JavaScript', 'Python'],
      'concepts': [],
      'frameworks': ['Tensorflow', 'SciKit Learn', 'React']
    },
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
    'skills': {
      'platforms': [],
      'languages': ['C++'],
      'concepts': ['Data Structures', 'Algorithms', 'OOP'],
      'frameworks': []
    },
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
    'end': 1717311600000,
    'blurb': "UCLA's Sensing and Robotics for Infrastructure Lab's goal is to better understand and quantify the condition and remaining useful life of civil and mechanical infrastructure systems through the intelligent use of sensors and data. The lab visualizes this data in an accessible manner to enhance the process of maintaining and improving our infrastructure.",
    'accomplishments': ['Created CI/CD process to deploy a fast and filterable React dashboard to demystify road quality data using AWS Elastic Beanstalk',
                            'Deployed an Express.js API to perform calculations on data before passing to dashboard service',
                            'Configured visualization tool with SSL and custom domain using GoDaddy and AWS Route 53',
                            'Architected hosting for 3D point cloud LiDAR street visualizations using AWS S3'],
    'skills': {
      'platforms': ['AWS S3', 'AWS EC2', 'AWS Elastic Beanstalk', 'AWS Route 53', 'AWS CodePipeline', 'AWS CodeBuild'],
      'languages': ['JavaScript', 'Python'],
      'concepts': [],
      'frameworks': ['React', 'Express.js']
    },
    'links': [{'link': 'https://site.hspa.info/', 'text': 'HSPA Site'},
              {'link': 'https://drive.google.com/file/d/1vva4XtuSWtrcsaBBjzvu_F2UR0Y6hVsX/view?usp=sharing', 'text': 'SRI Certificate'},
              {'link': 'https://drive.google.com/file/d/12m4ArOOtq8slDleYijpyr-QqguYE3U-i/view?usp=drive_link', 'text': 'City of LA Certificate'},
              {'link': 'https://sri-lab.seas.ucla.edu/', 'text': 'SRI Lab Site'}],
    'logo': SRI,
    'logoWidth': '250'
  }, {
    'category': 'research',
    'id': 'ucla-scalable-analytics-institute',
    'hidden': false,
    'title': 'UCLA Scalable Analytics Institute',
    'location': 'Los Angeles, California',
    'start': 1682924400000,
    'end': 1717311600000,
    'blurb': "UCLA's Scalable Analytics Institute is focused on addressing the continuing growth of data and the demand for smart analytics to mine that data by solving the three-pronged challenge created by the exploding size of big data, the growing complexity of big data, and the increased sophistication of analytics that can be used to extract patterns and trends from the data.",
    'accomplishments': ['Evaluated efficacy of large language models in computation scenarios by sourcing college-level scientific problems',
                      'Extracted keyword and equations for model training, and computational questions using optical recognition tools',
                      'Summarize accuracy of NLP model in paper by classifying incorrect predictions into 10 error categories'],
    'skills': {
      'platforms': [],
      'languages': ['Python', 'Shell'],
      'concepts': ['NLP'],
      'frameworks': ['Open AI']
    },
    'links': [{'link': 'https://drive.google.com/file/d/1p2c0Z70m9Td4RDMVzSrBRpAb2kBcJ4Hc/view?usp=sharing', 'text': 'Read Paper'},
            {'link': 'https://github.com/mandyyyyii/scibench/tree/main', 'text': 'Benchmark Repo'}],
    'logo': ScAI,
    'logoWidth': '200'
  },
    
  // Club Project
  {
    'category': 'club',
    'id': 'learn-py',
    'hidden': false,
    'title': 'ACM Hack: Learn.py',
    'location': 'Los Angeles, California',
    'start': 1709337600000,
    'end': 1717311600000,
    'blurb': <div>Learn.py dives deep into two common use cases for Python: OpenCV and web scraping, aiming to provide students with a 
      fully functioning project after attending each session. Under the topic of OpenCV, I introduced participants to the fundamentals of computer
      vision, before designing a flexible CLI tool to transform photos into art with OpenCV.
    </div>,
    'skills': {
      'platforms': [],
      'languages': ['Python'],
      'concepts': [],
      'frameworks': ['OpenCV', 'SciKit Learn', 'TensorFlow']
    },
    'links': [{'link': 'https://github.com/uclaacm/learn.py-24/tree/main', 'text': 'Learn.py Repo'},
            {'link': 'https://docs.google.com/presentation/d/1_0k0E2MFRdN7fAwwIF3nqAq3M0N6kd25J1XH1Hk6khc/edit?usp=sharing', 'text': 'Slides'},
            {'link': 'https://www.youtube.com/watch?si=idJpNTGsFumaRhEm&v=4agiduxmhRA&feature=youtu.be', 'text': 'Workshop Recording'}],
    'logo': LearnPy,
    'logoWidth': '300'
  }, {
    'category': 'club',
    'id': 'hoth-xi',
    'hidden': false,
    'title': 'Hack on the Hill XI',
    'location': 'Los Angeles, California',
    'start': 1704153600000,
    'end': 1709337600000,
    'blurb': <div>Directed Hack on the Hill XI - ACM UCLA's 11th iteration of their beginner friendly 12-hour hackathon. 
      Responsibilites included securing funding and sponsorships, securing a venue, coordinating food and prizes, organizing marketing
      efforts, communicating with faculty guests and keynote speaker, leading judging process, and facilitating mentorship.</div>,
    'skills': {
      'platforms': ['Firebase'],
      'languages': [],
      'concepts': [],
      'frameworks': ['React', 'Gatsby']
    },
    'links': [{'link': 'https://hoth.uclaacm.com/', 'text': 'HOTH Website'},
            {'link': 'https://hoth-xi.devpost.com/', 'text': 'Dev Post'},
            {'link': 'https://hoth.uclaacm.com/workshops', 'text': 'Workshops'}],
    'logo': HOTH,
    'logoWidth': '300'
  }, {
    'category': 'club',
    'id': 'aws-workshop',
    'hidden': false,
    'title': 'ACM Cloud - AWS Workshop Series',
    'location': 'Los Angeles, California',
    'start': 1704153600000,
    'end': 1709337600000,
    'blurb': <div>Directed ACM Cloud's debut of its winter quarter flagship AWS workshop series. Over the course of the quarter,
       learn essential theory for working with cloud provides and leverage AWS's free tier to create and deploy a full
        stack web application. Topics covered included the following
      <ul>
        <li>Introduction to AWS</li>
        <li>Management and Scaling with Elastic Beanstalk</li>
        <li>Continuous Integration and Deployment</li>
        <li>Databases and Serverless</li>
        <li>Infrastructure as Code</li>
      </ul>
    </div>,
    'skills': {
      'platforms': ['AWS Lambda', 'AWS DynamoDB', 'AWS API Gateway', 'AWS EC2', 'AWS Elastic Beanstalk', 'AWS CodeBuild', 'AWS CodePipeline', 'AWS ECR'],
      'languages': [],
      'concepts': [],
      'frameworks': ['Docker']
    },
    'links': [{'link': 'https://github.com/uclaacm/acmcloud-aws-w24', 'text': 'ACM Cloud Demo'},
            {'link': 'https://youtube.com/playlist?list=PLPO7_kXilXFbM5ICaiu6qow05bfg_Itz_&si=-ViOz33ol3GwPPpL', 'text': 'Recordings'}],
    'logo': ACMCloudAWS,
    'logoWidth': '330'
  }, {
    'category': 'club',
    'id': 'distributed-systems',
    'hidden': false,
    'title': 'ACM Cloud Initiative - Distributed Systems Project',
    'location': 'Los Angeles, California',
    'start': 1693551600000,
    'end': 1701417600000,
    'blurb': "Created ACM Cloud, aiming to providing resources to build a strong intuition of the architectural foundations of the modern cloud environment through project-based hands-on experience. ACM Cloud comprises of a weekly workshop series covering distributed system fundamentals and two hours worth of work time for our group distributed file system project.",
    'skills': {
      'platforms': [],
      'languages': ['Python'],
      'concepts': ['Distributed Systems'],
      'frameworks': ['Docker', 'Docker Compose']
    },
    'links': [{'link': 'https://drive.google.com/drive/folders/1dITUtF0luR9hXQsZr2zhybNsq2i0g_qM?usp=drive_link', 'text': 'ACM Cloud Slides'},
            {'link': 'https://github.com/SubramaniamSatyen/RPCDemo', 'text': 'RPC Demo'},
            {'link': 'https://docs.google.com/document/d/1lz-736htMtZeV3krSLNeRRzxQcI3H0fHn87OdWKZwGI/edit?usp=sharing', 'text': 'Project Spec'}],
    'logo': ACMCloud,
    'logoWidth': '300'
  }, {
    'category': 'club',
    'id': 'hackfam',
    'hidden': true,
    'title': 'ACM Hack - HackFam',
    'location': 'Los Angeles, California',
    'start': 1693551600000,
    'end': 1701417600000,
    'blurb': "ACM Hack's HackFam is a mentorship program hosted by ACM Hack's officer team. Each Hack Family is led by two fam heads and manages 15 to 20 students, offering social, academic, and career building advice and events throughout the course of the quarter. Under my leadership, students participated in a year long full stack mobile development project using React Native and Expo for a cross platform UI, and firebase for persistent storage of images and user data.",
    'skills': {
      'platforms': ['Firebase'],
      'languages': ['JavaScript'],
      'concepts': [],
      'frameworks': ['React Native']
    },
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
    'blurb':  <div>ACM Hack's HackCloud is a weekly, two hour long workshop series exploring the field of cloud computing, the modern 
              backbone for designing and deploying highly scalable, reliable, and available software services. For UCLA ACM's first time
              ever, ACM Hack dived into cloud fundamentals and best practices, tying the concepts into practical hands-on demos with 
              Amazon Web Services. Topics discussed include the following: 
                <ul>
                  <li>VM Computing</li>
                  <li>Serverless Services</li>
                  <li>DevOps</li>
                  <li>Continuous Integration and Continuous Deployment</li>
                  <li>Machine Learning</li>
                </ul>
              </div>,
    'skills': {
      'platforms': ['AWS S3', 'AWS EC2', 'AWS Lambda', 'AWS CodeDeploy', 'AWS CodePipeline', 'AWS CodeBuild'],
      'languages': ['JavaScript'],
      'concepts': [],
      'frameworks': ['React', 'Docker']
    },
    'links': [{'link': 'https://github.com/uclaacm/hack-curriculum/tree/main/archive/hackcloud', 'text': 'HackCloud Repo'},
            {'link': 'https://youtube.com/playlist?list=PLPO7_kXilXFYP3nE3MfFmMg2BU9R4cKUu&si=9UvMDZ-xwLnKn8Do', 'text': 'Workshop Recordings'},
            {'link': 'https://hack.uclaacm.com', 'text': 'ACM Hack Site'}],
    'logo': Cloud,
    'logoWidth': '300'
  }, {
    'category': 'club',
    'id': 'stackschool',
    'hidden': true,
    'title': 'ACM Hack - StackSchool',
    'location': 'Los Angeles, California',
    'start': 1662015600000,
    'end': 1669881600000,
    'blurb': "ACM StackSchool is a fullstack workshop series aiming to teach students to use the MERN tech stack. Over the course of seven weeks, we constructed a MERN social media application. To build a strong intutition for the tech stack, the ACM Hack officer team designed a four chapter textbook covering the essentials.",
    'skills': {
      'platforms': ['MongoDB'],
      'languages': ['JavaScript'],
      'concepts': [],
      'frameworks': ['React', 'Express.js']
    },
    'links': [{'link': 'https://github.com/uclaacm/hack-curriculum/tree/main/stackschool', 'text': 'Textbook Repo'},
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
    'blurb':  <div>Below are links to my work for UCLA's undergraduate computer science classes: 
                <ul>
                  <li>CS M148 - Data Science: Projects consist of leveraging Python and SciKit Learn to clean data and train models across sample datasets.</li>
                  <li>CS 131 - Programming Languages: Projects consist of building an interpreter for a new programming language (Brewin), adding all core language features.</li>
                  <li>CS 118 - Network Fundamentals: Projects include creating a web server, a reverse proxy, and implementing reliability and congestion control over UDP.</li>
                  <li>CS 111 - Operating Systems: Assignments cover a range of reimplementing unix commands, optimizing at the OS level, and working with various system calls.</li>
                  <li>CS 35L - Software Construction: Assignments cover a range of programming frameworks and languages (Python, Lisp, React, etc.) and culminate in designing a three tiered web application.</li>
                  <li>CS 33 - Computer Architecture: Assignments cover code tracing through x86-64 machine language code, thread level parallelism, synchronization, and virtual memory.</li>
                  <li>CS 32 - Introduction to Computer Science II: Assignments test sorting, recursion, time complexity, polymorphism, and advanced data structures.</li>
                  <li>CS 31 - Introduction to Computer Science I: Assignments test control flow, arrays, pointers, and classes.</li>
                </ul>
              </div>,
    'skills': {
      'platforms': ['MongoDB'],
      'languages': ['C++', 'C', 'Python', 'Lisp'],
      'concepts': [],
      'frameworks': ['React', 'Express.js']
    },
    'links': [{'link': "https://github.com/SubramaniamSatyen/CSM148", 'text': "CS M148 Repo"},
            {'link': "https://github.com/SubramaniamSatyen/CS131", 'text': "CS 131 Repo"},
            {'link': "https://github.com/SubramaniamSatyen/CS118-Project1", 'text': "CS 118 Project 1"},
            {'link': "https://github.com/SubramaniamSatyen/CS118-Project2", 'text': "CS 118 Project 2"},
            {'link': "https://github.com/SubramaniamSatyen/CS111", 'text': "CS 111 Repo"},
            {'link': "https://github.com/SubramaniamSatyen/CS35L", 'text': "CS 35L Repo"},
            {'link': "https://github.com/hiimvincent/bruin-rides", 'text': "CS 35L Project Repo"},
            {'link': "https://github.com/SubramaniamSatyen/CS33", 'text': "CS 33 Repo"},
            {'link': "https://github.com/SubramaniamSatyen/CS32", 'text': "CS 32 Repo"},
            {'link': "https://github.com/SubramaniamSatyen/CS31", 'text': "CS 31 Repo"}],
  }, {
    'category': 'other',
    'id': 'laststand',
    'hidden': false,
    'title': 'Last Stand',
    'location': 'Los Angeles, California',
    'start': 1709337600000,
    'end': 1717311600000,
    'blurb': "Last Stand is a 3D Survival FPS game created for an E96 Game Design course alongside two other students. Last Stand follows the story of a prisoner fighting off an unending army of evil robots to surive as long as possible. Featuring a fully interactable, low poly environment and NPCs leveraging Llama models for unique interactions, Last Stand offers a unique and engaging experience with every playthrough.",
    'skills': {
      'platforms': ['Unity'],
      'languages': ['C#'],
      'concepts': ['NLP']
    },
    'logo': LastStand,
    'logoWidth': '350',
    'links': [{'link': 'https://subramaniamsatyen.itch.io/last-stand', 'text': 'Play Game'}]
  }, {
    'category': 'other',
    'id': 'voice-activated-calculator',
    'hidden': false,
    'title': 'Voice Activated Calculator',
    'location': 'Los Angeles, California',
    'start': 1677657600000,
    'end': 1685602800000,
    'blurb': "To showcase a strong understanding of using sensors to observe and analyze experimental results, we made use of an Arduino Nano to process speech data, construct a coherent internal representation of the digits spoken, and visualize the sum.",
    'skills': {
      'platforms': ['Arduino'],
      'languages': ['Python'],
      'concepts': [],
      'frameworks': ['Tensorflow', 'Pyfirmata']
    },
    'links': [{'link': 'https://docs.google.com/presentation/d/1KfZw5EOzLQJrUtPOuc-XcVbb35R4j-Fn6mUgvgD-LCw/edit?usp=sharing', 'text': 'Slide Showcase'}],
    'logo': Calc,
    'logoWidth': '300'
  }, {
    'category': 'other',
    'id': 'reactwithme',
    'hidden': true,
    'title': 'HackSpace 2022: ReactWithMe',
    'location': 'Los Angeles, California',
    'start': 1646121600000,
    'end': 1654066800000,
    'blurb': "A mobile app created with a team of four UCLA students during the course of a quarter: ReactWithMe. Our app allows users to add timestamped reactions when watching a video, then share those reactions so friends can see you react in real time as they watch the same content. The app was created using firebase for persistent storage and React Native for our UI.",
    'skills': {
      'platforms': ['Firebase'],
      'languages': ['JavaScript'],
      'concepts': [],
      'frameworks': ['React Native']
    },
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
    'skills': {
      'platforms': ['Unity'],
      'languages': ['C#'],
      'concepts': [],
      'frameworks': []
    },
    'logo': ProjectQuest,
    'logoWidth': '400',
    'links': [{'link': 'https://subramaniamsatyen.itch.io/project-quest', 'text': 'Game Download'},
              {'link': 'https://drive.google.com/file/d/1Q9eihl2peHomRecCK1Em3EQCI1mR5XPf/view?usp=sharing', 'text': 'Documentation'}]
  }
]