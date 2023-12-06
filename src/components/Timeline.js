import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator, { timelineSeparatorClasses } from '@mui/lab/TimelineSeparator';
import TimelineConnector, { timelineConnectorClasses } from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';

import { MOBILE_THRESHOLD } from '../constants';
import Post from './Post';

export default function PostTimeline({ posts, dimensions }) {
  return (
    <div>
      {dimensions.width > MOBILE_THRESHOLD ? 
      (<Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: '0 0 90px',
            paddingLeft: '5vw',
            fontSize: '1.1em',
            fontWeight: 100,
          },
          // [`& .${timelineConnectorClasses.root}`]: {
          //   boxShadow: "5px 5px 100px rgb(0 0 0)"
          // },
          // [`& .${timelineSeparatorClasses.root}`]: {
          //   boxShadow: "5px 5px 100px rgb(0 0 0)"
          // }
        }}
      >
        {posts.map(post => 
          <TimelineItem>
            <TimelineOppositeContent>
              {post.date}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined"/>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Post postDetails={post} dimensions={dimensions} />
            </TimelineContent>
          </TimelineItem>
        )}
      </Timeline>)
    : 
    (posts.map(post => <Post postDetails={post} dimensions={dimensions} />))}
    </div>
  );
}