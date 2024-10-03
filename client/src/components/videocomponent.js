import React from "react";
import VideoFooter from "./videofooter";
import VideoSidebar from "./videosidebar";

function VideoComponent({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
  // key,
}) {
  const videoRef = React.useRef(null);
  const [playing, setPlaying] = React.useState(false);

  const handleVideoClick = () => {
    // if video is already playing, stop or pause it
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    }
    // if video is not playing, play it
    else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div
      // key={key}
      className="video"
      style={{
        width: "90%",
        height: "100%",
        position: "relative",
        scrollSnapAlign: "start",
      }}
    >
      <video
        loop
        ref={videoRef}
        onClick={handleVideoClick}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        src={url}
        frameBorder="0"
        allowFullScreen
      ></video>

      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default VideoComponent;
