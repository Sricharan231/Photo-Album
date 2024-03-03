import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Slideshow.css';
// import '../../assest';
import slide1 from '../../assest/slide2.jpg';
import slide3 from '../../assest/slide3.jpg'; 
import slide2 from '../../assest/slide1.JPG';
import slide4 from '../../assest/slide5.jpg'

const slImage = [
  {
    url: slide2,
    // url: "https://images.hindustantimes.com/img/2021/04/14/1600x900/418b4818-9b54-11eb-8496-de88c478b6f1_1618374163620.jpg",
    caption: 'First Slide',
  },
  {
    url: slide1,
    caption: "Second Slide",
  },
  {
    url: slide3,
    caption: "Third Slide",
  },
  
  {
    url: slide4,
    caption: "Second Slide",
  },
  // {
  //   url: slide3,
  //   caption: "Third Slide",
  // },
];

const Slideshow = () => {
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '600px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
  };

  // const spanStyle = {
  //   padding: '20px',
  //   fontSize: '30px',
  //   background: 'transparent',
  //   color: 'white',
  // };

  return (
    <div className="slide">
      {/* <h1 id='sshead'>SAMPLE</h1> */}
      <Slide className="slid">
        {slImage.map((image, index) => (
          <div key={index}>
            <div
              style={{
                ...divStyle,
                backgroundImage: `url(${image.url})`,
              }}
            >
              {/* <span style={spanStyle}>{image.caption}</span> */}
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;