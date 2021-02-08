import React, { useState, useEffect } from "react";
import axios from "axios";

const ApiFetch = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // ①axiosパターン
    // axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
    //   setPosts(response.data);
    // });

    // ②fetchパターン
    fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export default ApiFetch;
