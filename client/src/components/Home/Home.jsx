import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import DOMPurify from "dompurify";
import "./home.scss";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/posts/${cat}`);
        if (res != null) setPosts(res.data);
        // console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };
  console.log(posts);
  return (
    <>
      <div className="home">
        {cat ? (
          <h1 className="title">{cat.split("=")[1]} Posts</h1>
        ) : (
          <h1 className="title">Recent Posts</h1>
        )}
        <div className="posts">
          {posts.length ? (
            posts.map((post) => (
              <div className="post" key={post.id}>
                <div className="img">
                  <img
                    src={`../../public/upload/${post.imgs}`}
                    alt={post.title}
                  />
                </div>
                <div className="content">
                  <h1>{post.title}</h1>
                  <p>
                    {getText(post.desc).substring(0, 150)}{" "}
                    {getText(post.desc).length >= 20 && "..."}
                  </p>
                  <Link className="link" to={`/post/${post.id}`}>
                    <button>Read More</button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <>
              <h1>No Post Yet</h1>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
