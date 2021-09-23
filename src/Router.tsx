import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import MainContainer from "./containers/MainContainer";
import PostsContainer from "./containers/PostsContainer";
import ShowContainer from "./containers/ShowContainer";
import WriteContainer from "./containers/WriteContainer";
import LoginContainer from "./containers/LoginContainer";
import SignupContainer from "./containers/SignupContainer";
import Path from "./path/Path";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainContainer}></Route>
        <Route path="/posts" component={PostsContainer}></Route>
        <Route path="/posts/:page" component={PostsContainer}></Route>
        <Route path="/show/:postId" component={ShowContainer}></Route>
        <Route path="/write" component={WriteContainer}></Route>
        <Route path="/login" component={LoginContainer}></Route>
        <Route path="/signup" component={SignupContainer}></Route>
        <Route path="/path/:postId" component={Path}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
