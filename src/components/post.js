import React from "react"
import {Link} from "react-router-dom"

const Post = ({ post }) => {
  //////////////////
  // Style Objects
  //////////////////
  const div = {
    textAlign: "center",
    border: "3px solid blue",
    margin: "10px auto",
    width: "80%",
    backgroundColor: "#DDDDDD",
  };
  return (
    <div style={div}>
      <Link to={`/blog/${post.id}`}>
        <h1>{post.title}</h1>
      </Link>
      <h2>{post.body}</h2>
    </div>
  );
};

export default Post