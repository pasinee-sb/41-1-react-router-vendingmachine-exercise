import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Twix() {
  return (
    <div>
      <h1>NOM NOM NOM</h1>
      <img
        src="https://media0.giphy.com/media/ei9pMw3x3MYVhtlBla/200.webp?cid=ecf05e476b0h6i7ycgfsyt0wit6f7emjxlgyzedwm048l15r&ep=v1_gifs_search&rid=200.webp&ct=g"
        alt="Cartoon man eating lots of donuts."
      />
      <p>So tasty!</p>
      <Link exact to="/">
        Home
      </Link>
    </div>
  );
}

export default Twix;
