import React, { use } from "react";

const Posts = ({ postsPromise }) => {
  const posts = use(postsPromise);
  console.log(posts);

  return <div></div>;
};

export default Posts;
