import React from "react";

const UserCard = ({ user }) => (
  <div className="card">
    <div className="card-body">
      <p>{user.description}</p>
      <p>{user.name}</p>
    </div>
  </div>
);

export default UserCard;
