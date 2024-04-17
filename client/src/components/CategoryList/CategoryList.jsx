import React from "react";
import "./categoryList.scss";
import { Link } from "react-router-dom";

const CategoryList = () => {
  return (
    <div className="categoryList-wrapper">
      <h2>Categories</h2>
      <ul className="list">
        <Link className="link" to="/?cat=art">
          {" "}
          <li className="list-item art">Art</li>
        </Link>
        <Link className="link" to="/?cat=science">
          <li className="list-item science">Science</li>
        </Link>
        <Link className="link" to="/?cat=technology">
          <li className="list-item technology">Technology</li>
        </Link>
        <Link className="link" to="/?cat=cinema">
          <li className="list-item cinema">Cinema</li>
        </Link>
        <Link className="link" to="/?cat=design">
          <li className="list-item design">Design</li>
        </Link>
        <Link className="link" to="/?cat=food">
          <li className="list-item food">Food</li>
        </Link>
      </ul>
    </div>
  );
};

export default CategoryList;
