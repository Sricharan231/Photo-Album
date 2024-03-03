import React from 'react';
// import './cards.css';
import Card from './cards';
import Birth from '../../assest/bdy1.jpeg'
import Mirrage from '../../assest/sadi.jpg'
import Ani from '../../assest/an1.jpg'
import Pre_wed from '../../assest/pre_wed.jpg'
function CardsApp() {
  const cards = [
    {
      imageUrl: "https://www.marthastewart.com/thmb/ZTc_zwv66SBPJ90xj7yIcEalMp0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sasha-aneesh-wedding-indian-ceremony-couple-0420-6993b9523a4c4696b7bcb62196d5d868.jpg",
      topic:"Wedding",
      description: 'Description for Card 1',
    },
    {
      imageUrl: Birth,
      topic:"Birthday",
      description: 'Description for Card 2',
    },
    {
      imageUrl: Ani,
      topic:"Anniversary",
      description: 'Description for Card 3',
    },
    {
      imageUrl: Pre_wed,
      topic:"Pre Weeding",
      description: 'Description for Card 3',
    },

  
  ];

  return (
    <>
    <div className="cards1 justify-center  gap-8 flex flex-wrap items-centre">
      {cards.map((card, index) => (
        <Card
          key={index}
          topic={card.topic}
          imageUrl={card.imageUrl}
          description={card.description}
        />
      ))}
    </div>
  
  </>
  );
}

export default CardsApp;
