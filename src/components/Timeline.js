import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
import Post from './Post';
import { Parallax } from 'react-scroll-parallax';

import { MOBILE_THRESHOLD, PRESENT_DATE, MONTH_NAMES } from '../constants';

function sortByDate(a, b){
  if (a.end == b.end){
    return (a.start > b.start ? -1 : 1);
  }

  return (a.end > b.end ? -1 : 1);
}

export default function PostTimeline({ posts, dimensions }) {
  return (
    <div>
      {dimensions.width > MOBILE_THRESHOLD ? 
      (<Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: '0 0 170px',
            paddingLeft: '3.5vw',
          },
        }}
      >
        {posts.sort(sortByDate).map(post => 
          <TimelineItem>
            <TimelineOppositeContent>
              <div className='timelineTime'>
              {typeof(post.start) != undefined && typeof(post.end) != undefined 
              ?  (MONTH_NAMES[new Date(post.start).getMonth()] + " " + new Date(post.start).getFullYear() + " - " +
                  (post.end === PRESENT_DATE ? "Present" : MONTH_NAMES[new Date(post.end).getMonth()] + " " + new Date(post.end).getFullYear()))  
              : ""}
              </div>
              <div className='timelineLocation'>
                {post.location}
              </div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined"/>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Parallax scale={[0.95, 1, 'easeOutQuad']}>
                <Post postDetails={post} dimensions={dimensions} />
              </Parallax>
            </TimelineContent>
          </TimelineItem>
        )}
      </Timeline>)
    : 
    (posts.sort(sortByDate).map(post => <Post postDetails={post} dimensions={dimensions} />))}
    </div>
  );
}