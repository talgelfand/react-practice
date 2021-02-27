import React from "react";

function User(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.email}</h3>
      <p>{props.phone}</p>
    </div>
  );
}

export default User;
