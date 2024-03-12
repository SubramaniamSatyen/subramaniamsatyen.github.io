import PostTimeline from '../components/Timeline';
import { POSTS } from '../constants';

import '../App.css';

function Projects({ dimensions }) {
  return (
    <div className="App application">
      <h1 className='leftAlign title'>Research Projects</h1>
      {<PostTimeline posts={POSTS.filter(post => post.category === "research" && !post.hidden)} dimensions={dimensions} />}
      
      <h1 className='leftAlign title'>Club Projects: </h1>
      {<PostTimeline posts={POSTS.filter(post => post.category === "club" && !post.hidden)} dimensions={dimensions} />}

      <h1 className='leftAlign title'>Other Projects: </h1>
      {<PostTimeline posts={POSTS.filter(post => post.category === "other" && !post.hidden)} dimensions={dimensions} />}

    </div>
  );
}

export default Projects;
