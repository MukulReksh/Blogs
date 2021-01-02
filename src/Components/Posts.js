import React from "react";
import "./Posts.css";
import Home from "./Home";

const Posts = () => {
  return (
    <>
      <Home />
      <div className="post-page">
        <div className="post-image">
          <img
            className="post-big"
            src="https://assets-global.website-files.com/56e9debf633486e330198479/57b6723c0c7bdb62381c5e86_top-10-travel-bloggers-you-should-be-follow-danflyingsolo-danielclarke-lonelyplanet-skyscanner.jpg"
            alt="posts"
          />

          <div className="card">
            <div className="text">
              <i className="icon1 violet large like icon"></i>
              <i className="icon2 yellow large star icon"></i>
              <div className="data">
                <h2>STAY UPDATED ON THE BEST TRAVEL DEALS AND TIPS!</h2>
                <img
                  src="https://www.nomadicmatt.com/wp-content/uploads/2020/05/v7.jpg"
                  alt="photos"
                />
                <p className="text-1">
                  Hi! I'm Nomadic Matt and I'm here to help you travel more for
                  less.
                  <hr /> Sign up to get my best travel tips as well as these
                  free guides to help you plan your next trip like a pro:
                </p>
              </div>
            </div>
            <div>
              <input type="email" placeholder="enter your email id" />
              <input type="password" placeholder="password" />
            </div>
          </div>
        </div>

        <h3>Posted: 12/14/20 | December 14th, 2020</h3>
        <p>
          It is a town where one can overhear tech deals, talk of the “the China
          flu,” Instagram algorithms, and an upcoming drum circle within the
          span of a few minutes. I came here with very low expectations. I’d
          heard the stories from my friends, seen all those “influencers” on
          Instagram gushing profusely, read the articles, and spoke with other
          travelers. Tulum was an influencers paradise, which likely meant it
          wasn’t mine. But I wanted to see what all the hype was really about.
          Maybe it wouldn’t be so bad. Maybe I was just being a stubborn old
          goat. Nope. Tulum was even worse than I had imagined. A sleepy little
          town during my last visit in 2011, Tulum is now a mecca for
          jet-setting millennials, celebs, hippies, and spiritual types. It is a
          place where they come to do all the things they can do back home — but
          without the cost, in better weather, and with more international
          people around. It’s become another Bali or Goa: a relatively cheap
          retreat where most people come to drop in, drop out, stay in their
          bubble, eat açaí bowls during the day, and party all night long. Here,
          in expensive beachside boutique hotels, they eat in Miami-style
          restaurants while listening to the latest EDM music. They aren’t in
          Tulum to experience Mexico. They come here for their little bubble.
        </p>
      </div>
    </>
  );
};

export default Posts;
