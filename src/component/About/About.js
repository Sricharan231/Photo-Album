import React from 'react';
import { FiHome } from 'react-icons/fi';
import CardList from './CardList/cardlist';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import cardImage from '../../assest/about.jpg';

const bgImage = "https://riss-photography.com/wp-content/uploads/2023/05/Wendys-Secret-Garden-Pre-Wedding-10-650x385.jpg";
// const cardImage = "https://placekitten.com/300/200";

function AboutUsPage() {
  return (
    <div>
      <Navbar/>
      <div className="bg-cover bg-center h-80 relative" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className='absolute inset-0 flex items-center justify-center'>
          <a href="/" className="flex gap-2 bg-transparent hover:scale-125 text-red-500 hover:text-white rounded-full transition duration-300">
            <FiHome size={24} />  <p>  Home ⮞ About</p>
          </a>
        </div>
      </div>
      <div className="bg-black bg-opacity-60 h-screen grid grid-cols-1 md:grid-cols-2 gap-2 items-center text-white">
        <div className='text-center md:w-1/1 p-2 md:p-4 mx-auto'> {/* Center the container */}
          <h1 className="text-4xl font-bold mb-2 md:mb-4">About Us</h1>
          <p className="text-lg max-w-lg"> {/* Increase the max width */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla, elit at
            egestas consequat.In enim veniam ullamco laboris enim voluptate ad proident officia ad. Ullamco eu sint magna aute eu pariatur sunt. Enim aliquip pariatur aute do magna ut nulla minim id officia nulla. Ut officia velit eu irure aliquip consequat non officia sunt excepteur. Irure dolore Lorem ullamco deserunt mollit.
          </p>
          <button className="bg-transparent border border-red-500 text-red-500 py-2 px-2 md:px-4 rounded-full mt-2 md:mt-4 hover:bg-red-500 hover:text-white hover:border-transparent transition duration-300 inline-block">
            Learn More
          </button>
        </div>
        <div className="text-center md:ml-2 p-2 md:p-4 relative">
  <div className="w-full md:w-80 bg-cover bg-center rounded-lg overflow-hidden mx-auto group">
    <div className="perspective-3d">
      <img
        src={cardImage}
        alt="Card Image"
        className="w-full h-full object-cover animate-spin transform transition-transform group-hover:rotate-x-6 rounded-lg shadow-lg animate-tiltAnimation"
      />
    </div>
  </div>
</div>



      </div>
      {/* <CardList/> */}
      <Footer/>
    </div>
  );
  
}

export default AboutUsPage;