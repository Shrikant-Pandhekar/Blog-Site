import React, { useContext, useEffect, useState } from "react";
import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";
import "react-quill/dist/quill.snow.css";
import "highlight.js/styles/atom-one-dark.css";

const SinglePost = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  // console.log(id);
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/posts/${id}`);
        if (res != null) setPost(res.data[0]);
        // console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/posts/${id}`);
      navigate("/");
      // console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(post);

  return (
    <div className="signpost">
      <div className="content">
        <img src={`../../public/upload/${post?.imgs}`} alt={post.title} />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="userImage" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/writepost?edit=${id}`} state={post}>
                <img src={Edit} alt="Edit Post" />
              </Link>
              <img src={Delete} onClick={handleDelete} alt="Edit Post" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <div className="ql-snow">
          <div
            className="ql-editor"
            dangerouslySetInnerHTML={{ __html: post.desc }}
          />
        </div>
      </div>
      <Menu cat={post.cat} />
    </div>
  );
};

export default SinglePost;
