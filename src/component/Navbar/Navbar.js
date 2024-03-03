// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const [navbarOpen, setNavbarOpen] = useState(false);

//   return (
//     <nav className="sticky top-0 w-full bg-white shadow-md z-50">
//       <div className="container mx-auto px-4 py-3 md:flex md:items-center md:justify-between">
//         {/* Logo on the left */}
//         <div className="flex items-center">
//           <Link to="/">
//             <h2 className="text-2xl font-bold">Ujjwal's studio</h2>
//           </Link>
//         </div>

//         {/* Navigation Links on the right */}
//         <div
//           className={`${
//             navbarOpen ? "block" : "hidden"
//           } md:flex flex-1 justify-self-center pb-3 mt-8  md:pb-0 md:mt-0`}
//         >
//           <ul className="items-center float-right justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
//             <li className="text-gray-600 hover:text-blue-600">
//               <Link to="/Home">Home</Link>
//             </li>
//             <li className="text-gray-600 hover:text-blue-600">
//               <Link to="/Blog">Blog</Link>
//             </li>
//             <li className="text-gray-600 hover:text-blue-600">
//               <Link to="/AboutUs">About Us</Link>
//             </li>
//             <li className="text-gray-600 hover:text-blue-600">
//               <Link to="/ContactUs">Contact Us</Link>
//             </li>
//           </ul>
//         </div>

//         {/* Toggle button for mobile */}
//         <div className="md:hidden">
//           <button
//             className="
//               p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
//             onClick={() => setNavbarOpen(!navbarOpen)}
//           >
//             {navbarOpen ? (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-6 h-6"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 {/* Close icon */}
//                 <path
//                   fillRule="evenodd"
//                   d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-6 h-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }


import React from "react";
// import Button from "./Button";
import { Link } from "react-router-dom";


import { useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className=" sticky top-0 w-full bg-white shadow-md z-50">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="javascript:void(0)">
              <h2 className="text-2xl font-bold">Photo studio</h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                      
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-600 hover:text-blue-600">
            <Link to="/"  className="animate-bounce" > <a href="/">Home</a></Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
              <Link to="/Gallery" className="animate-bounce"> <a href="javascript:void(0)">Gallery</a></Link>
              </li>

              {/* <li className="text-gray-600 hover:text-blue-600">
              <Link to="/FindJob" className="animate-bounce">  <a href="javascript:void(0)">Search Job</a></Link>
              </li> */}

              <li className="text-gray-600 hover:text-blue-600">
              <Link to="/AboutUs" >  <a href="javascript:void(0)">About Us</a></Link>
              </li>

              
              <li className="text-gray-600 hover:text-blue-600">
               <Link to="/Contactus"> <a href="javascript:void(0)">Contact US</a></Link>
              </li>
              {/* <Link to="/sign_up">
                <Button >Login/Sign Up</Button>
              </Link> */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
            }