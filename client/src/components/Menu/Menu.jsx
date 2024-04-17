import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "./menu.scss";

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          cat ? `/api/posts/?cat=${cat}` : `/api/posts/`
        );
        if (res != null) setPosts(res.data);
        // console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    // console.log(posts);
    fetchData();
  }, [cat]);
  return (
    <div className="menu">
      {cat ? <h1>Other Post You May Like!</h1> : <h1>Most Popular</h1>}
      {posts.map((post, i) => (
        <div className="post" key={i}>
          {cat && (
            <img src={`../../public/upload/${post?.imgs}`} alt={post.title} />
          )}
          <div className="user">
            <div className="info">
              <h1>{post.title}</h1>
              <span>{post.username}</span>
            </div>
            <div className="category">
              {cat ? (
                <p>Posted {moment(post.date).fromNow()}</p>
              ) : (
                <p className={post.cat}>{post.cat}</p>
              )}
            </div>
          </div>
          <Link className="link" to={`/post/${post.id}`}>
            <button>Read More</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;
