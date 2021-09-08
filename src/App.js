import SinglePost from "./pages/SinglePost";
import AllPosts from "./pages/AllPosts";
import Form from "./pages/Form";
import React, {useState, useEffect} from "react";
import {Route, Switch, Link} from "react-router-dom"
import "./App.css"

function App(props) {
  ////////////////////////
  // Style Objects
  ///////////////////////
  const h1 = {
    textAlign: "center",
    margin: "10px",
  }

  const button = {
    backgroundColor: "navy",
    display: "block",
    margin: "auto",
    marginBottom: "10px",
  };


  ///////////////////////////
  // State & Other Variables
  //////////////////////////

  // Our API Url
  const url = "https://blog-lofredo.herokuapp.com/blog/";

  // State to Hold the list of blog posts
  const [posts, setPosts] = useState([]);

  const nullBlog = {
    title: "",
    body: "",
  };

  // State to hold the targeted blog
  const [targetBlog, setTargetBlog] = useState(nullBlog);

  //////////////////////
  // Functions
  /////////////////////
  const getBlogs = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPosts(data);
  };

  const addBlog = async (newBlog) => {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlog),
    });
    getBlogs();
  };

  const getTargetBlog = (blog) => {
    setTargetBlog(blog)
    props.history.push("/edit")
  };

  const updateBlog = async (blog) => {
    const response = await fetch(url + blog.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });
    getBlogs();
  };

  const deleteBlog = async (blog) => {
    const response = await fetch(url + blog.id + "/", {
      method: "delete",
    });
    getBlogs()
    props.history.push("/")
  };

  /////////////////////
  // useEffects
  /////////////////////
  useEffect(() => {getBlogs()}, []);

  /////////////////////
  // returned JSX
  /////////////////////

  return (
    <div>
      <h1 style={h1}>My Blog</h1>
      <Link to="/new"><button style={button}>Create New Blog</button></Link>
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => <AllPosts {...routerProps} posts={posts}/>}
        />
        <Route
          exact
          path="/blog/:id"
          render={(routerProps) => (
            <SinglePost 
              {...routerProps} 
              posts={posts}
              edit={getTargetBlog}
              deleteBlog={deleteBlog}
            />
          )}
        />
        <Route
          exact
          path="/new"
          render={(routerProps) => (
            <Form 
              {...routerProps}
              initialBlog={nullBlog}
              handleSubmit={addBlog}
              buttonLabel="Create Blog"
            />
          )}
        />
        <Route
          exact
          path="/edit"
          render={(routerProps) => (
            <Form 
              {...routerProps}
              initialBlog={targetBlog}
              handleSubmit={updateBlog}
              buttonLabel="update blog" 
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
