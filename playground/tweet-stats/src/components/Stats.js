import React from "react";
//TODO:
// - list available tweet sources
// - show count under each source
// <a href="https://mobile.twitter.com" rel="nofollow">Twitter Web App</a>
// <a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>
// <a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>



export default function Stats(props) {
  
  const renderSources = () => {
    return props.sources.map(source => {
      return (
        <div>
          <h3>{source.title}</h3>
          <p>{source.count}</p>
        </div>
      )
    })
  }
  return (
    <div>
      <p>{renderSources()}</p>
    </div>
  );
}
