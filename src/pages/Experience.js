import '../App.css';
import PostTimeline from '../components/Timeline';

import { POSTS } from '../constants';

function Experience({ dimensions }) {
  return (
    <div className="App application">
      <h1 className='leftAlign title'>Work Experience</h1>
      <PostTimeline posts={POSTS.filter(post => post.category === "experience" && !post.hidden)} dimensions={dimensions}/>
      <h1 className='leftAlign title'>Teaching Experience: </h1>
      <PostTimeline posts={POSTS.filter(post => post.category === "teach" && !post.hidden)} dimensions={dimensions}/>
    </div>
  );
}

export default Experience;
