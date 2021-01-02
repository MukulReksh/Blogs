import React from "react";
import Home from "./Components/Home";
import Blogscard from "./Components/Blogscard";
import Posts from "./Components/Posts";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blogs" component={Blogscard} />
        <Route exact path="/blogs/posts" component={Posts} />
      </Switch>
    );
  }
}

export default App;
