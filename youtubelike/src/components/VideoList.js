import React from "react";
import VideoItem from "./VideoItem";

/* 
const VideoList = props => {
  return <div>{props.videos.length}</div>;
}; 
*/

const VideoList = ({ videos, _onVideoSelect }) => {
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        __onVideoSelect={_onVideoSelect}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;

/* 
Things to remember

- In "const VideoList = ({ videos, _onVideoSelect })", 
  videos and _onVideoSelect props are passed from App component through 
  VideoList Component like so <VideoList _onVideoSelect={this.onVideoSelect} videos={this.state.videos} />

- Here __onVideoSelect is a prop that can be named anything since it is inside a Component. 
- Also, __onVideoSelect and video props are used to send _onVideoSelect and video values 
  that are brought from App component.

*/
