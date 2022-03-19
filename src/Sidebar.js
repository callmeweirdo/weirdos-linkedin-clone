import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash"># </span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="./img/bestlife.jpeg" alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Weirdo Realer</h2>
        <h4>weirdo@gamil.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>who viewed you</p>
          <p className="sidebar__statNumber">1100</p>
        </div>
        <div className="sidebar__stat">
          <p>views on post</p>
          <p className="sidebar__statNumber">1010</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem(" reactjs")}
        {recentItem(" programming")}
        {recentItem(" softwareengineering")}
        {recentItem(" design")}
        {recentItem(" developer")}
      </div>
    </div>
  );
}

export default Sidebar;
