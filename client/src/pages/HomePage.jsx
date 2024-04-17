import React from "react";
import Home from "../components/Home/Home";
import Menu from "../components/Menu/Menu";
import CategoryList from "../components/CategoryList/CategoryList";

const HomePage = () => {
  return (
    <>
      <div className="main-wrapper">
        <div className="left-container">
          <Home />{" "}
        </div>
        <div className="right-container">
          <CategoryList />
          <Menu />
        </div>
      </div>
    </>
  );
};

export default HomePage;
