import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div style={{display:'none'}}>loading.....</div>;
  }

    const link = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
      <div className='ui segment'>
        <div className="ui embed">
          <iframe src={link} />
        </div>
        <div className='ui segment'>
        <h4 className='ui header'>{video.snippet.title}</h4>
        <p className='ui description'>{video.snippet.description}</p>
        </div>
      </div>

    );
};

export default VideoDetail;
