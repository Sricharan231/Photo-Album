import React from 'react';
import './cards.css';


const Card = ({ imageUrl, description, topic }) => {
  return (
    <div className="card  items-center">
      <div className='text-2xl Bold text-white'>{topic}</div>
      <img src={imageUrl} alt="Card" className="card-image " />
      {/* <div className="card-description text-white text-overlay "><p>{description}</p></div> */}
   
     
    </div>
  );
}

export default Card;
