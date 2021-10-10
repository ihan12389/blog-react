import React, { useEffect } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import MainContainer from "./containers/MainContainer";
import PostsContainer from "./containers/PostsContainer";
import ShowContainer from "./containers/ShowContainer";
import WriteContainer from "./containers/WriteContainer";
import LoginContainer from "./containers/LoginContainer";
import SignupContainer from "./containers/SignupContainer";
import Path from "./path/Path";

const Router = () => {
  useEffect(() => {
    console.log("Router");
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/lihano-board" exact component={MainContainer}></Route>
        <Route
          path="/lihano-board/posts/:page"
          component={PostsContainer}
        ></Route>
        <Route
          path="/lihano-board//show/:postId"
          component={ShowContainer}
        ></Route>
        <Route path="/lihano-board/write" component={WriteContainer}></Route>
        <Route path="/lihano-board/login" component={LoginContainer}></Route>
        <Route path="/lihano-board/signup" component={SignupContainer}></Route>
        <Route path="/lihano-board/path/:postId" component={Path}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
