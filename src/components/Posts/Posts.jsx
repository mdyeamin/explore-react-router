import React, { use } from "react";
import Post from "../Post/Post";

const Posts = ({ postsPromise }) => {
  const posts = use(postsPromise);
  

  return <div>
    <h3>All Posts here</h3>
    {
      posts.map(post=><Post key={post.id} post={post}/>)
    }
  </div>;
};

export default Posts;
