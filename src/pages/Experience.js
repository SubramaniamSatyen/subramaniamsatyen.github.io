import '../App.css';

function Experience() {
  return (
    <div className="App application">
      <h1 className='leftAlign'>Work Experience: </h1>
      <div className="postEntry">
        <h2>Pacific Northwest National Laboratory - Software Engineering Intern</h2>
        <p className='paragraphBlock'>Pacific Northwest National Laboratory (PNNL) is ...
        </p>
        <p className='paragraphBlock'>Starting as an intern during the summer, I've since continued to work part time while completing my undergraduate
           degree. </p>
      </div>
      <div className="postEntry">
        <h2>Los Angeles Housing Department - Student Worker</h2>
      </div>
      <div className="postEntry">
        <h2>Bond Intelligence - Software Engineering Intern</h2>
      </div>
      <h1 className='leftAlign'>Teaching Experience: </h1>
      <div className="postEntry">
        <h2>Wyzant Tutoring - C++ Fundamentals</h2>
      </div>
      <div className="postEntry">
        <h2>UCLA Learning Assistant </h2>
      </div>
    </div>
  );
}

export default Experience;
