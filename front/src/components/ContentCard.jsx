import React from 'react';
import '../styles/ContentCard.css';

const ContentCard = ({ title, image, description }) => {
  return (
    <div className="content-card">
      <img src={image} alt={title} className="content-card-image" />
      <div className="content-card-info">
        <h4 className="content-card-title">{title}</h4>
        <p className="content-card-description">{description}</p>
      </div>
    </div>
  );
};

export default ContentCard;
