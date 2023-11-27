import { Chip } from '@mui/material';
import { ColorButton } from '../components/ColorButton';
import PostBody from '../components/PostBody';
import PostHeader from '../components/PostHeader';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import { INCLUDE_IMAGE_WIDTH } from '../constants';

import ScAI from '../images/ScAI_Logo.png';
import SRI from '../images/SRI_Logo.png';
import Cloud from '../images/HackCloud.png';
import ACMCloud from '../images/ACMCloud.png';
import StackSchool from '../images/StackSchool.png';
import HackFam from '../images/HackFam.png';
import Calc from '../images/Calculator.png';

import '../App.css';

function Projects({ dimensions }) {
  return (
    <div className="App application">
      <h1 className='leftAlign'>Research Projects: </h1>
      <div className="postEntry">
        <PostHeader 
          id='ucla-scalable-analytics-institute' 
          text='UCLA Scalable Analytics Institute'
        />
        <PostBody
          blurb="UCLA's Scalable Analytics Institute is focused on addressing the continuing growth of data and the demand for smart 
          analytics to mine that data by solving the three-pronged challenge created by the exploding size of big data, the 
          growing complexity of big data, and the increased sophistication of analytics that can be used to extract patterns
           and trends from the data."
          accomplishments={['Evaluated efficacy of large language models in computation scenarios by sourcing college-level scientific problems',
                            'Extracted keyword and equations for model training, and computational questions using optical recognition tools',
                            'Summarize accuracy of NLP model in paper by classifying incorrect predictions into 10 error categories']}
          skills={['Python', 'Shell', 'NLP']}
          links={[{'link': 'https://drive.google.com/file/d/1p2c0Z70m9Td4RDMVzSrBRpAb2kBcJ4Hc/view?usp=sharing', 'text': 'Read Paper'},
                  {'link': 'https://github.com/mandyyyyii/scibench/tree/main', 'text': 'Benchmark Repo'}]}
          showLogo={dimensions.width > INCLUDE_IMAGE_WIDTH}
          logo={ScAI}
          logoWidth='200'
        />  
      </div>
      <div className="postEntry">
        <PostHeader 
          id='ucla-sensing-and-robotics' 
          text='UCLA Sensing and Robotics for Infrastructure'
        />
        <PostBody
          blurb="UCLA's Sensing and Robotics for Infrastructure Lab's goal is to better understand and quantify the condition and
          remaining useful life of civil and mechanical infrastructure systems through the intelligent use of sensors and data.
          The lab visualizes this data in an accessible manner to enhance the process of maintaining and improving our infrastructure."
          accomplishments={['Created CI/CD process to deploy a fast and filterable React dashboard to demystify road quality data using AWS Elastic Beanstalk',
                            'Deployed an Express.js API to perform calculations on data before passing to dashboard service',
                            'Configured visualization tool with SSL and custom domain using GoDaddy and AWS Route 53',
                            'Architected hosting for 3D point cloud LiDAR street visualizations using AWS S3']}
          skills={['React', 'Express.js', 'AWS S3', 'AWS EC2', 'AWS Elastic Beanstalk', 'AWS Route 53']}
          links={[{'link': 'https://site.hspa.info/', 'text': 'HSPA Site'},
                  {'link': 'https://drive.google.com/file/d/1vva4XtuSWtrcsaBBjzvu_F2UR0Y6hVsX/view?usp=sharing', 'text': 'SRI Certificate'},
                  {'link': 'https://sri-lab.seas.ucla.edu/', 'text': 'SRI Lab Site'}]}
          showLogo={dimensions.width > INCLUDE_IMAGE_WIDTH}
          logo={SRI}
          logoWidth='200'
        />  
      </div>
      <h1 className='leftAlign'>Club Projects: </h1>
      <div className="postEntry">
        <PostHeader 
          id='hackcloud' 
          text='ACM Hack - HackCloud'
        />
        <PostBody
          blurb="ACM Hack's HackCloud is a weekly, two hour long workshop series exploring the field of cloud computing, the modern 
          backbone for designing and deploying highly scalable, reliable, and available software services. For UCLA ACM's first time 
          ever, ACM Hack dived into cloud fundamentals and best practices, tying the concepts into practical hands-on demos with Amazon 
          Web Services. Topics discussed include the following: <li>VM Computing|Serverless Services|DevOps|Continuous Integration and Continuous Deployment|Machine Learning<li>"
          skills={['React', 'AWS S3', 'AWS EC2', 'AWS Lambda', 'Docker', 'AWS Code Deploy', 'AWS Code Pipeline']}
          links={[{'link': 'https://github.com/uclaacm/hack-curriculum/tree/main/HackCloud', 'text': 'HackCloud Repo'},
                  {'link': 'https://youtube.com/playlist?list=PLPO7_kXilXFYP3nE3MfFmMg2BU9R4cKUu&si=9UvMDZ-xwLnKn8Do', 'text': 'Workshop Recordings'},
                  {'link': 'https://hack.uclaacm.com/archive#fall-2022-hackschool', 'text': 'ACM Hack Site'}]}
          showLogo={dimensions.width > INCLUDE_IMAGE_WIDTH}
          logo={Cloud}
          logoWidth='300'
        />
      </div>
      <div className="postEntry">
        <PostHeader 
          id='hackfam' 
          text='ACM Hack - HackFam'
        />
        <PostBody
          blurb="ACM Hack's HackFam is a mentorship program hosted by ACM Hack's officer team. Each Hack Family is led by two
          fam heads and manages 15 to 20 students, offering social, academic, and career building advice and events
          throughout the course of the quarter. Under my leadership, students participated in a year long full stack mobile development
          project using React Native and Expo for a cross platform UI, and firebase for persistent storage of images and user data."
          skills={['React', 'React Native', 'Firebase']}
          links={[{'link': 'https://hack.uclaacm.com/', 'text': 'ACM Hack Site'}]}
          showLogo={dimensions.width > INCLUDE_IMAGE_WIDTH}
          logo={HackFam}
          logoWidth='400'
        />  
      </div>
      <div className="postEntry">
        <PostHeader 
          id='distributed-systems' 
          text='ACM Cloud and Distributed Systems Initiative'
        />
        <PostBody
          blurb="ACM Cloud aims to providing resources to build a strong intuition of the architectural foundations of the modern
          cloud environment through project-based hands-on experience. ACM Cloud comprises of a weekly workshop series covering
          distributed system fundamentals and two hours worth of work time for our group distributed file system project."
          skills={['Python', 'Distributed Systems', 'Docker', 'Docker Compose']}
          links={[{'link': 'https://drive.google.com/drive/folders/1r2vc0GFLmUMr-iOZwwccKKrJfkeXe3B4?usp=drive_link', 'text': 'ACM Cloud Slides'},
                  {'link': 'https://github.com/SubramaniamSatyen/RPCDemo', 'text': 'RPC Demo'},
                  {'link': 'https://docs.google.com/document/d/1lz-736htMtZeV3krSLNeRRzxQcI3H0fHn87OdWKZwGI/edit?usp=sharing', 'text': 'Project Spec'}]}
          showLogo={dimensions.width > INCLUDE_IMAGE_WIDTH}
          logo={ACMCloud}
          logoWidth='300'
        />  
      </div>
      <div className="postEntry">
        <PostHeader 
          id='stackschool' 
          text='ACM Hack - StackSchool'
        />
        <PostBody
          blurb="ACM StackSchool is a fullstack workshop series aiming to teach students to use the MERN tech stack. Over the course of seven weeks, we constructed a MERN 
          social media application. To build a strong intutition for the tech stack, the ACM Hack officer team designed a four chapter textbook covering the essentials."
          skills={['React', 'Express.js', 'MongoDB']}
          links={[{'link': 'https://github.com/uclaacm/hack-curriculum/tree/main/stackschool', 'text': 'Textbook'},
                  {'link': 'https://github.com/SubramaniamSatyen/WinterLearningStackschool', 'text': 'MERN Demo Repo'},
                  {'link': 'https://github.com/SubramaniamSatyen/Stackschool_2023_Cat_Server', 'text': 'REST API Demo Repo'}]}
          showLogo={dimensions.width > INCLUDE_IMAGE_WIDTH}
          logo={StackSchool}
          logoWidth='300'
        />  
      </div>
      <h1 className='leftAlign'>Other Projects: </h1>
      <div className="postEntry">
        <PostHeader 
          id='voice-activated-calculator' 
          text='Voice Activated Calculator'
        />
        <PostBody
          blurb="To showcase a strong understanding of using sensors to observe and analyze experimental results, we made use of an Arduino Nano
          to process speech data, construct a coherent internal representation of the digits spoken, and visualize the sum."
          skills={['Tensorflow', 'Python', 'Arduino', 'Pyfirmata']}
          links={[{'link': 'https://docs.google.com/presentation/d/1KfZw5EOzLQJrUtPOuc-XcVbb35R4j-Fn6mUgvgD-LCw/edit?usp=sharing', 'text': 'Slide Showcase'}]}
          showLogo={dimensions.width > INCLUDE_IMAGE_WIDTH}
          logo={Calc}
          logoWidth='300'
        />  
      </div>
      <div className="postEntry">
        <PostHeader 
          id='reactwithme' 
          text='HackSpace 2022: ReactWithMe'
        />
        <PostBody
          blurb="A mobile app created with a team of four UCLA students during the course of a quarter: ReactWithMe. Our app allows users to 
          add timestamped reactions when watching a video, then share those reactions so friends can see you react in real time as they
          watch the same content. The app was created using firebase for persistent storage and React Native for our UI."
          skills={['React Native', 'Firebase']}
          links={[{'link': 'https://github.com/SubramaniamSatyen/HackSpace2022', 'text': 'GitHub Repo'}]}
        />  
      </div>
      <div className="postEntry">
        <PostHeader 
          id='class-projects' 
          text='Class Projects'
        />
        <PostBody
          blurb="Below are links to my work for UCLA's undergraduate computer science classes: <li>CS 111 - Operating Systems: Assignments cover a range of 
          reimplementing unix commands, optimizing at the OS level, and working with various system calls.|CS 35L - Software Construction: Assignments 
          cover a range of programming frameworks and languages (Python, Lisp, React, etc.) and culminate in designing a three tiered web application.|
          CS 33 - Computer Architecture: Assignments cover code tracing through x86-64 machine language code, thread level parallelism, synchronization, 
          and virtual memory.|CS 32 - Introduction to Computer Science II: Assignments test sorting, recursion, time complexity, polymorphism, and 
          advanced data structures.|CS 31 - Introduction to Computer Science I: Assignments test control flow, arrays, pointers, and classes.<li>"
          skills={['C++', "C", "Python", "React", "Lisp", "MongoDB"]}
          links={[{'link': "https://github.com/SubramaniamSatyen/CS111", 'text': "CS 111 Repo"},
                  {'link': "https://github.com/SubramaniamSatyen/CS35L", 'text': "CS 35L Repo"},
                  {'link': "https://github.com/hiimvincent/bruin-rides", 'text': "CS 35L Project Repo"},
                  {'link': "https://github.com/SubramaniamSatyen/CS33", 'text': "CS 33 Repo"},
                  {'link': "https://github.com/SubramaniamSatyen/CS32", 'text': "CS 32 Repo"},
                  {'link': "https://github.com/SubramaniamSatyen/CS31", 'text': "CS 31 Repo"}]}
        />
      </div>
    </div>
  );
}

export default Projects;
