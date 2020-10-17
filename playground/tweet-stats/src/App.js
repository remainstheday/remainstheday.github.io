import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Stats from "./components/Stats";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

const URL = `https://gist.githubusercontent.com/chadwithuhc/6240db2f7b415c8bf9ec7eed6bb2d56e/raw/10f6b97e7dd9ea113e63a38e75161b5660b6d248/tweets.json`;

export default function App() {
  const [twitterData, setTwitterData] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setTwitterData(data.statuses))
      .catch((err) => console.log(err));
  }, []);

  const renderTwitterData = () => {
    return twitterData.map((tweet, index) => (
      <Card key={index} text={tweet.text} user={tweet.user} />
    ));
  };

  const renderTweetStats = () => {
    const countedSources = {};

    twitterData.map((tweet) => {
      const html = document.createElement("div");
      html.innerHTML = tweet.source;
      if (!countedSources.hasOwnProperty(html.innerText)) {
        countedSources[html.innerText] = 0;
      }
      countedSources[html.innerText]++;
    });

    const sources = Object.keys(countedSources).map((key) => ({
      title: key,
      count: countedSources[key],
    }));

    return <Stats sources={sources} />;
  };

  return (
    <div className="App container">
      <div className="jumbotron">
      {renderTweetStats()}
      </div>

      {renderTwitterData()}
    </div>
  );
}
