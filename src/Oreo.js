import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Oreo() {
  return (
    <div>
      <h1>SO REFRESHING</h1>
      <img
        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2E4ZHFrbWd3ZGhmcXVneDJodHllMTEzaDlsNWFxOTlsenMzNHA3aCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qNpqSmKO4bn68/giphy.gif"
        alt="Oreo"
      />
      <Link exact to="/">
        Home
      </Link>
    </div>
  );
}

export default Oreo;
