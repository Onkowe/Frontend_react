import React from "react";
import { SideNav, TopNav } from "../components";
import "./styles/Instagram.css";

const Instagram = () => {
  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">Instagram</div>
        </div>
      </main>
    </>
  );
};

export default Instagram;
