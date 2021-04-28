import React from "react";
import PropTypes from "prop-types";
import Layout from "../../../components/Layout";

import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import { GetPosts, DeletePost } from "../../../api/postsApi";
import PostItem from "./PostItem";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Pagination from "../../../components/Pagination";

ListPost.propTypes = {};

function ListPost(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  // const [subject, setSubject] = useState("All");
  // const [grade, setGrade] = useState("All");
  // const [address, setAddress] = useState("All");
  const [listpost, setListpost] = useState([]);

  // // const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(10);

  useEffect(() => {
    GetPosts(dispatch);
  }, []);

  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    setListpost(posts);
  }, [posts]);

  //  // Get current tutors
  //  const indexOfLastPost = currentPage * postsPerPage;
  //  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  //  const currentTutors = listpost.slice(indexOfFirstPost, indexOfLastPost);
  //  // Change page
  //  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  //  const checkfilter = (subject, grade, address, post) => {
  //   let checka = false;
  //   let checkb = false;
  //   let checkc = false;
  //   if (subject == "All") checka = true;
  //   else checka = post.subject === subject;
  //   if (grade == "All") checkb = true;
  //   else checkb = post.grade === grade;
  //   if (address == "All") checkc = true;
  //   else checkc = post.address.toLowerCase().includes(address.toLowerCase());
  //   return checka && checkb && checkc;
  // };

  // const handlefillter = (e) => {
  //   console.log(subject, grade, address);

  //   const listfillter = posts.filter((tutor) =>
  //     checkfilter(subject, grade, address, tutor)
  //   );
  //   console.log(listfillter);
  //   setListpost(listfillter);
  // };

  // const handlePostEditClick = (post) => {
  //   console.log("Edit: ", post);
  //   const editPostUrl = `/listpostedit/${post.id}`;
  //   history.push(editPostUrl);
  // };

  const handlePostViewClick = (post) => {
    console.log("View: ", post);
    const viewPostUrl = `/postview/${post.id}`;
    history.push(viewPostUrl);
  };

  const handlePostRemoveClick = async (post) => {
    console.log("delete: ", post);
    await DeletePost(dispatch, post);
  };

  return (
    <>
      <Layout>
        <ToastContainer />
        <h1 className="text-center">List Post</h1>
        <section className="content">
          {/* Default box */}
          <table className="table table-striped projects">
            <thead>
              <tr>
                <th style={{ width: "10%" }}>ID</th>
                <th style={{ width: "30%" }}>Title</th>
                <th style={{ width: "10%" }}>Grade</th>
                <th style={{ width: "10%" }}>Subject</th>
                <th style={{ width: "10%" }}>Price</th>
                <th style={{ width: "10%" }}>Address</th>
                <th style={{ width: "20%" }} className="text-center">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {listpost.map((post) => (
                <PostItem
                  post={post}
                  onRemoveClick={handlePostRemoveClick}
                  // onEditClick={handlePostEditClick}
                  onViewClick={handlePostViewClick}
                />
              ))}
            </tbody>
          </table>

          {/* /.card */}
        </section>
      </Layout>
    </>
  );
}

export default ListPost;

// {currentTutors.map((post) => (
//   <div key={post.id}>
//     <PostItem
//       post={post}
//       onRemoveClick={handlePostRemoveClick}
//       onEditClick={handlePostEditClick}
//       onViewClick={handlePostViewClick}
//     />
//   </div>
// ))}
{
  /* <Pagination
postsPerPage={postsPerPage}
totalPosts={listpost.length}
paginate={paginate}
 />  */
}
