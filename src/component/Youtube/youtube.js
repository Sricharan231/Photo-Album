import React from 'react';
import YouTube from 'react-youtube';

function VideoBackground() {
  const videos = [
    {
      videoId: 'ogGrPgLusPI',
      topic: 'Wedding',
      description: 'Description for Video 1',
    },
    {
      videoId: 'ogGrPgLusPI',
      topic: 'Birthday',
      description: 'Description for Video 2',
    },
    {
      videoId: 'oDBkp7M2hnA',
      topic: 'Anniversary',
      description: 'Description for Video 3',
    },
    // Add more video objects as needed
  ];

  const opts = {
    height: '390',
    width: '100%', // Make the video player responsive by setting width to 100%
    playerVars: {
      controls: 1,
    },
  };

  return (
    <div className="bg-gray-100 p-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <YouTube videoId={video.videoId} opts={opts} className="w-full" />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold">{video.topic}</h2>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoBackground;
