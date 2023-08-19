import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Lays() {
  return (
    <div>
      <h1>I'M HUNGRY</h1>
      <img src="https://media.tenor.com/9QmjqmjdzkEAAAAi/lays.gif" alt="Lays" />

      <Link exact to="/">
        Home
      </Link>
    </div>
  );
}

export default Lays;
