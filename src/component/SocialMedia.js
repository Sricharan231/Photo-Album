import React from 'react';
import {
  FaFacebook,

  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaWhatsapp,
} from 'react-icons/fa';

const SocialMediaIcons = () => {
  const socialMediaItems = [
    { name: 'Facebook', icon: <FaFacebook />, color: 'blue', link: 'https://www.facebook.com' },
    { name: 'Instagram', icon: <FaInstagram className="instagram-icon" />, link: 'https://www.instagram.com' },
    { name: 'YouTube', icon: <FaYoutube />, color: 'red', link: 'https://www.youtube.com' },
    { name: 'Email', icon: <FaEnvelope />, color: 'red', link: 'mailto:youremail@example.com' },
    { name: 'WhatsApp', icon: <FaWhatsapp />, color: 'light green', link: 'https://api.whatsapp.com/send?phone=9631074496' },
  ];

  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 p-4">
      {socialMediaItems.map((item, index) => (
        <div
          key={index}
          className={`relative group cursor-pointer transition-transform ease-in-out duration-300 transform hover:scale-110`}
        >
          <a
            href={item.link} // Add the link to the social media platform
            target="_blank" // Open link in a new tab
            rel="noopener noreferrer" // Recommended for security reasons
            className={`text-2xl text-${item.color}-500 hover:text-${item.color}-700`}
          >
            {item.icon}
          </a>
          <div className="absolute left-10 -top-7 bg-gray-900 text-white text-xs py-2 px-4 rounded-lg opacity-0 w-0 transition-all duration-300 group-hover:w-28 group-hover:opacity-100">
            {item.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
