import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";

export default function YoutubeSearch() {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    let res = await axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: "20",
        key: "AIzaSyAEP8xlcIe13yZWNEMOcbfy9jSrzHM0O_w",
        type: "video",
        q: query,
      },
    });
    if (res && res.data.items.length > 0) {
      let raw = res.data.items;
      if (raw && raw.length > 0) {
        setVideos(raw);
      }
    }
  };
  return (
    <div className="youtube-search-container">
      <div className="yt-search">
        <div className="div">
          <input
            type="text"
            placeholder="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <button
            onClick={() => {
              handleSearch();
            }}
          >
            Search
          </button>
        </div>
        {videos &&
          videos.length > 0 &&
          videos.map((item) => {
            return (
              <div className="yt-result" key={item.id.videoId}>
                <div className="left">
                  <iframe
                    width="887"
                    height="499"
                    src={`https://www.youtube.com/embed/${item.id.videoId}`}
                    title={item.snippet.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="right">
                  <div className="title">{item.snippet.title}</div>
                  <div className="createAt">
                    create At:{item.snippet.publishedAt}
                  </div>
                  <div className="author">
                    Author: {item.snippet.channelTitle}
                  </div>
                  <div className="description">{item.snippet.description}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
