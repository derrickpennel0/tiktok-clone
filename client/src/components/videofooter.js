import React from "react";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Ticker from "react-ticker";
import "../App.css";

function VideoFooter({ channel, description, song }) {
  return (
    <div
      style={{
        position: "relative",
        color: "white",
        display: "flex",
        bottom: "150px",
        marginLeft: "40px",
      }}
    >
      <div style={{ flex: 1 }}>
        <h3 style={{ paddingBottom: "20px" }}>@{channel}</h3>
        <p style={{ paddingBottom: "20px", textOverflow: "ellipsis" }}>{description}</p>

        {/* icon and ticker  */}
        <div className="video_ticker">
          <MusicNoteIcon
            style={{
              fontSize: "25px",
              position: "absolute",
              // background: "white",
            }}
          />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p
                  style={{
                    // fontSize: "13px",
                    whiteSpace: "nowrap",
                    paddingTop: "2px",
                  }}
                >
                  {song}
                </p>
              </>
            )}
          </Ticker>{" "}
        </div>
      </div>

      <img
        className="videoFooter_record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;
