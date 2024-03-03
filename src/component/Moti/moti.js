import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
// import Footer from './Footer';
// import Navbar from './navbar';
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    occupation: "CEO",
    image: "https://www.efilecabinet.com/wp-content/uploads/2019/05/g2-testimonial-female.jpg",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque tellus at mi commodo dignissim.",
    rating: 4,
  },
  {
    id: 2,
    name: "Jane Smith",
    occupation: "Marketing Manager",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuXkP0pXja3Bh2nN9Cye2SmTrWkkglh3m9CQ&usqp=CAU",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque tellus at mi commodo dignissim.",
    rating: 5,
  },
  {
    id: 3,
    name: "Bob Johnson",
    occupation: "Sales Director",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCs5tCojTZEkDkgG5bQeEBhuluJk9zCVpLOg&usqp=CAU",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque tellus at mi commodo dignissim.",
    rating: 3,
  },

  {
    id: 4,
    name: " Charan",
    occupation: "Sales Director",
    image: "https://media.istockphoto.com/id/1318928248/photo/portrait-of-a-young-man.jpg?s=612x612&w=0&k=20&c=ayy0fWfzLoC20BlYXDQmle1vz0a9Qrv8ssSwE3dLpzA=",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque tellus at mi commodo dignissim.",
    rating: 3,
  },

  {
    id: 5,
    name: " Sri Charan",
    occupation: "Software Engineer",
    image: "https://media.licdn.com/dms/image/D4D03AQE4qm4lt_CM8Q/profile-displayphoto-shrink_800_800/0/1677304847352?e=1687392000&v=beta&t=ad1ZqaSFSE_ntnKwGQiA5kHhwhHqHZq05EzI0dkbOxA",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque tellus at mi commodo dignissim.",
    rating: 4,
  },
];

const Testimonial = () => {
  const [sliderSettings, setSliderSettings] = useState({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  return (
    <>

{/* <Navbar /> */}
    
    




    <div className="bg-gray-100 ">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6   lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 ">What People Say</h2>
        <div className="mt-12 hover:text-white">
          <Slider {...sliderSettings} >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className=" max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
              >
                <div className="md:flex">
                  <div className="md:flex-shrink-0 ">
                    <img
                      className="h-48 w-full object-cover md:w-48"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                  </div>
                  <div className="p-2   ">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold  ">
                      {testimonial.occupation}
                    </div>
                    <div className="mt-2">
                      <p className="text-gray-500 text-xl">{testimonial.quote}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-center w-full">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>


    {/* <Footer /> */}
    </>
  );
};

export default Testimonial;