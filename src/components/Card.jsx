import React from "react";

const Card = ({ cardNum, image, title, desc, tag, date }) => (
  <div className="card-grid-space">
    <div className="num">{cardNum ? cardNum : "1"}</div>
    <a
      className="card"
      href="#"
      style={{ "--bg-img": `url(data:image/jpg;base64,${image})` }}
    >
      <div>
        <h1>{title ? title : "HTML Syntax"}</h1>
        <p>
          {desc
            ? desc
            : "The syntax of a language is how it works. How to actually write it. Learn HTML syntax…"}
        </p>
        <div className="date">{date ? date : "14 Oct 2017"}</div>
        <div className="tags">
          <div className="tag">{tag}</div>
        </div>
      </div>
    </a>
  </div>
);

export default Card;
