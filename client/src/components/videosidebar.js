import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MessageIcon from "@mui/icons-material/Message";
import ShareIcon from "@mui/icons-material/Share";

export default function VideoSidebar({ likes, messages, shares }) {
  // introducing clickable features
  const [liked, setLiked] = useState(false);
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        right: "20px",
        color: "white",
      }}
    >
      {/* favorite icon   */}
      <div
        style={{
          textAlign: "center",
          padding: "10px",
        }}
      >
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={() => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon fontSize="large" onClick={() => setLiked(true)} />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>

      {/* message icon   */}
      <div style={{ textAlign: "center", padding: "10px" }}>
        <MessageIcon fontSize="large" />
        <p>{messages}</p>
      </div>

      {/* share icon   */}
      <div style={{ textAlign: "center", padding: "10px" }}>
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}
