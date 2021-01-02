import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="ui secondary menu">
        <h1>Welcome Bloggers</h1>
        <div className="right menu">
          <Link className="item" to="/">
            Home
          </Link>
          <Link className="item" to="/blogs">
            Blogs
          </Link>
          <Link className="item" to="/blogs/posts">
            Posts
          </Link>
          <a className="item" href="/">
            Contact Us
          </a>
        </div>
      </div>
      <img
        className="menu-image"
        src="https://miro.medium.com/max/4518/1*UQmdUO1qDG-k508SYNsCSw.png"
        alt="home-img"
      />
    </div>
  );
};

export default Home;
