import React, { useEffect } from "react";
import { Redirect, useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducers";
import { PostsActions } from "../actions/posts";

const Path = (props: any) => {
  /* REDUX */
  const postsState = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch();
  /* MAKE HISTORY */
  const history = useHistory();

  useEffect(() => {
    // RESET POSTS LIST
    dispatch(PostsActions.read());
    // CHECK postsState
    console.log(postsState);
    // MOVE POST PAGE
    setTimeout(() => {
      history.push(`/show/${props.match.params.postId}`);
    }, 1000);
  }, []);

  return <>Loading...</>;
};

export default Path;
