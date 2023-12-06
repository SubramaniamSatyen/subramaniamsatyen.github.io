import PostTimeline from '../components/Timeline';
import { POSTS } from '../constants';

import '../App.css';

function Projects({ dimensions }) {
  return (
    <div className="App application">
      <h1 className='leftAlign title'>Research Projects</h1>
      {<PostTimeline posts={POSTS.filter(post => post.category === "research")} dimensions={dimensions} />}
      
      <h1 className='leftAlign title'>Club Projects: </h1>
      {<PostTimeline posts={POSTS.filter(post => post.category === "club")} dimensions={dimensions} />}

      <h1 className='leftAlign title'>Other Projects: </h1>
      {<PostTimeline posts={POSTS.filter(post => post.category === "other")} dimensions={dimensions} />}

    </div>
  );
}

export default Projects;
