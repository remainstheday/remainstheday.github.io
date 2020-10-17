import React from "react";

export default function Card(props) {
  return (
    <div>
      <p>{props.text}</p>
      <p>{props.user.name}</p>
    </div>
  );
}
