import React from "react";
import PropTypes from "prop-types";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <img
          src={
            !imageUrl
              ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <ul className="list-group list-group-flush text-muted">
          <li className="list-group-item text-muted"><h6>Author : </h6><small>{author?author:"Unkown"}</small></li>
          <li className="list-group-item text-muted"><h6>Source : </h6><small>{source}</small></li>
          <li className="list-group-item text-muted"><small>{new Date(date).toGMTString()}</small></li>
        </ul>
        <div className="card-body">
          <a rel="noreferrer" href={newsUrl} target="_blank" className="card-link">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
