import React from "react";
import PropTypes from "prop-types";
import Layout from "../../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { GetPosts } from "../../../api/postsApi";
import { useEffect } from "react";

InforPost.propTypes = {};

function InforPost(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { postId } = useParams();

  useEffect(() => {
    GetPosts(dispatch);
  }, []);

  const editedPost = useSelector((state) => {
    const foundPost = state.posts.posts.find((x) => x.id === +postId);
    // console.log({ posts: state.posts, postId, foundPost });
    return foundPost;
  });

  const v = useSelector((state) => state.posts.posts);
  if (v.length == 0) return null;
  // console.log({ postId, editedPost });
  const postview = editedPost;
  console.log("vieeeepost", postview);

  return (
    <>
      <Layout>
        {postview.title}----
        {postview.idcustomer}-------
        {postview.subject}------
        {postview.grade} {postview.address}----------
        {postview.price}---------
        {postview.phonenumber}--------------
      </Layout>
    </>
  );
}

export default InforPost;
