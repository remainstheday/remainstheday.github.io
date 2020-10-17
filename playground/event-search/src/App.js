import React, { useEffect, useState } from "react";
import UserCard from "./components/UserCard";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const URL = `https://gist.githubusercontent.com/chadwithuhc/6240db2f7b415c8bf9ec7eed6bb2d56e/raw/10f6b97e7dd9ea113e63a38e75161b5660b6d248/tweets.json`;

function App() {
  const [tweetData, setTweetData] = useState([]);
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setTweetData(data.statuses)
        setCardData(data.statuses)
      })
  }, []);

  const handleInputChange = (event) => {
    const filteredCards = tweetData.filter((tweet) =>
      tweet.user.description.includes(event.target.value)
    );
    return event.target.value === ""
      ? setCardData(tweetData)
      : setCardData(filteredCards);
  };

  const renderUsers = () => {
    return cardData.map((tweet, index) => {
      return <UserCard user={tweet.user} />;
    });
  };

  return (
    <div className="App container">
      <input type="text" onChange={handleInputChange} />
      <div className="card-grid">{renderUsers()}</div>
    </div>
  );
}

export default App;
