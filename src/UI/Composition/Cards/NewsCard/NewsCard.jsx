import React from "react";
import "./NewsCard.css";
import { FaRegComment, FaRegHeart, FaRegBookmark } from "react-icons/fa";

export default function NewsCard(props) {
  return (
    <div className="card">
      <div className="wrapper">
        <div className="header">
          <div className="date">
            <span className="day">12</span>
            <span className="month">Aug</span>
            <span className="year">2016</span>
          </div>
          <ul className="menu-content">
            <li>
              <a href="https://www.google.com">
                <FaRegBookmark />
              </a>
            </li>
            <li>
              <a href="https://www.google.com" className="fa fa-heart-o">
                <span>18</span>
                <FaRegHeart />
              </a>
            </li>
            <li>
              <a href="https://www.google.com" className="fa fa-comment-o">
                <span>3</span>
                <FaRegComment style={{ fill: `white` }} />
              </a>
            </li>
          </ul>
        </div>
        <div className="data">
          <div className="content">
            <span className="author">Jane Doe</span>
            <h1 className="title">
              <a href="https://www.google.com">
                Stranger Things: The sound of the Upside Down
              </a>
            </h1>
            <p className="text">
              The antsy bingers of Netflix will eagerly anticipate the digital
              release of the Survive soundtrack, out today.
            </p>
            <a href="https://www.google.com" className="button">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
