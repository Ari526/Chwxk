import React from 'react';
import './card.css';

const Card = (props) => {
  return (
    <div className='card'>
      {props.icon && (
        <div className="card-icon">
          <img src={props.icon} alt="Icon" />
        </div>
      )}
      <div className="card-heading">
        {props.heading}
      </div>
      {props.description && (
        <div className="card-description">
          {props.description}
        </div>
      )}
      {props.children}
    </div>
  );
}

export default Card;
