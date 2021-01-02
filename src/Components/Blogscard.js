import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.css";
import Home from "./Home";

class Blogscard extends React.Component {
  state = { cards: [] };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => this.setState({ cards: data }));
  }

  render() {
    return (
      <>
        <Home />
        <div className="posts">
          {this.state.cards.map((detail) => (
            <div className="ui card" key={detail.id}>
              <div className="image">
                <img
                  src="https://s29081.pcdn.co/wp-content/uploads/2019/03/big-dream-boatman-coron-island-hopping-tour-expedition-3154.jpg.optimal.jpg"
                  alt={detail.title}
                />
              </div>
              <h3>{detail.title}</h3>

              <img
                className="ui avatar image"
                src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"
                alt={detail.title}
              />
              <span>By Mukul Reksh</span>
              <div className="content">
                <i className="comment icon"></i>3 comments
                <span className="right floated">
                  <Link to="blogs/posts">
                    <button className="ui red button">View details</button>
                  </Link>
                </span>
              </div>
              <div class="extra content">
                <div class="ui large transparent left icon input">
                  <i class="heart outline icon"></i>
                  <input type="text" placeholder="Add Comment..." />
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Blogscard;
