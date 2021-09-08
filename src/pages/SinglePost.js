import React from "react"
import {Link} from "react-router-dom"

const SinglePost = ({ posts, match, edit, deleteBlog }) => {
    const id = parseInt(match.params.id)
    const post = posts.find((post) => post.id === id)
    
    ////////////////////
    // Styles
    ///////////////////
    const div = {
        textAlign: "center",
        border: "3px solid indigo",
        width: "80%",
        margin: "30px auto",
    };

    const button = {
        backgroundColor: "navy",
        margin: "auto",
        border: "3px solid goldenrod",
        marginRight: "10px",
      };

    return (
        <div style={div}>
            <h1>{post.title}</h1>
            <h2>{post.body}</h2>
            <button style={button} onClick={(event) => edit(post)}>Edit</button>
            <button style={button} onClick={(event) => deleteBlog(post)}>Delete</button>
            <Link to="/">
                <button style={button}>Go Back</button>
            </Link>
        </div>
    )
};

export default SinglePost