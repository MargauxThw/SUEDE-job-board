import React from 'react';

function Card(props) {
    return (
      <div className="card">
        <div className="card-header">
          <img src={props.logo} className="company-logo" alt="Company logo" />
        </div>
        
        <p className="closing-date">Applications close: {props.date}</p>
        <h2 className="job-title">{props.title}</h2>
        <p className="level">{props.level} level</p>
        <p className="description">{props.description}</p>
        <a
            className="link btn"
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
          >Go to the listing</a>
      </div>
      
    );
  }

  export default Card;