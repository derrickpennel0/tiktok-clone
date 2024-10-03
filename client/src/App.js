import React, { useEffect, useState } from "react";
import "./App.css";
import VideoComponent from "./components/videocomponent";
import { API_SERVER } from "./config/config";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  // useEffect(() => {}, []);
  const fetchData = async () => {
    try {
      await axios
        .get(API_SERVER + "/tiktok/videos")
        .then((res) => {
          console.log({ res, key: "here" });
          if (res.data.length > 0) {
            setData(res.data); // Update the state with the received data
          }
        })
        .catch((err) => {
          console.error(err, "error in axios fetching");
        });
    } catch (err) {
      console.error(err, "error here");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // setTimeout(() => {
  //   fetchData();
  // }, 1000);
  // on page load

  // useEffect(() => {
  //   try {
  //     axios
  //       .post(API_SERVER + "/tiktok/videos")
  //       .then((res) => {
  //         console.log({ res });
  //         if (res.data.length > 0) {
  //           setData(res.data); // Update the state with the received data
  //         }
  //       })
  //       .catch((err) => {
  //         console.error(err, "error in axios fetching");
  //       });
  //   } catch (err) {
  //     console.error(err, "error here");
  //   }
  // }, []); //

  return (
    <div className="app">
      {/* video  */}
      <div className="app_vids">
        {data.map((i) => {
          return (
            <VideoComponent
              key={i?._id}
              url={i?.url}
              channel={i?.channel}
              description={i?.description}
              song={i?.song}
              likes={i?.likes}
              messages={i?.messages}
              shares={i?.shares}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
