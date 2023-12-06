import PostBody from './PostBody';
import PostHeader from './PostHeader';
import {INCLUDE_IMAGE_WIDTH, MOBILE_THRESHOLD} from '../constants'

import '../App.css';

import React from 'react'

function Post({ postDetails, dimensions }) {
    return (
        <div className={dimensions.width > MOBILE_THRESHOLD ? "timelinePostEntry" : "postEntry"}>
            <PostHeader 
                id={postDetails.id}
                text={postDetails.title}
            />
            <PostBody
                blurb={postDetails.blurb}
                accomplishments={postDetails.accomplishments}
                skills={postDetails.skills}
                showLogo= {dimensions.width > INCLUDE_IMAGE_WIDTH}
                logo={postDetails.logo}
                logoAlt={postDetails.logoAlt}
                logoWidth={postDetails.logoWidth}
                logoHeight={postDetails.logoHeight}
                links={postDetails.links}
            />            
        </div>
    );
}

export default Post;