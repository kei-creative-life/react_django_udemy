import React, { useState, useEffect } from "react";
// import axios from "axios";

const ApiFetch = () => {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [clicked, setClicked] = useState(false);

  const handlerClicked = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    // ①axiosパターン
    // axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
    //   setPosts(response.data);
    // });

    // ②fetchパターン
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, [clicked]);

  return (
    <>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      ></input>
      <button type="button" onClick={handlerClicked}>
        Get Post
      </button>
      {posts.title}
    </>
  );
};

export default ApiFetch;
