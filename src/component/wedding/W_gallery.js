import React, { useState } from 'react';
import '../Gallery/gallery.css'

function WGallery() {
  const imageUrls = [
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (index) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const prevImage = () => {
    setSelectedImage((prevIndex) => (prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setSelectedImage((prevIndex) => (prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
      <div className="-m-1 flex flex-wrap md:-m-2">
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
              src={imageUrl}
              onClick={() => openImage(index)}
            />
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-75" onClick={closeImage}></div>
          <div className="relative max-w-screen-lg">
            <img
              alt="gallery"
              className="block max-h-screen mx-auto rounded-lg object-cover object-center"
              src={imageUrls[selectedImage]}
            />
            <button
              className="absolute top-1/2 -mt-6 left-4 text-white font-bold text-xl"
              onClick={prevImage}
            >
              &lt;
            </button>
            <button
              className="absolute top-1/2 -mt-6 right-4 text-white font-bold text-xl"
              onClick={nextImage}
            >
              &gt;
            </button>
            <button
              className="absolute top-2 right-2 text-white text-lg"
              onClick={closeImage}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default WGallery;