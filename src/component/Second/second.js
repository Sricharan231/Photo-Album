// import React from 'react';
// import './second.css';

// function Second() {
//   const smallPhotos = [
//     'image1.jpg',
//     'image2.jpg',
//     'image3.jpg',
//     'image4.jpg',
//   ];

//   const radius = 100; // Adjust the radius as needed
//   const center = 100; // Half the size of the circular photo container
//   const angleIncrement = (2 * Math.PI) / smallPhotos.length; // Calculate the angle increment

//   return (
//     <div className="Second">
//       {/* Circular Photo */}
//       <div className="circular-photo">
//         <img src="image1.jpg" alt="Circular" />
//         {smallPhotos.map((src, index) => {
//           const angle = index * angleIncrement;
//           const x = center + radius * Math.cos(angle) - 25; // Adjust 25 as needed for positioning
//           const y = center + radius * Math.sin(angle) - 25; // Adjust 25 as needed for positioning

//           return (
//             <div
//               key={index}
//               className={`small-image small-image-${index}`}
//               style={{
//                 position: 'absolute',
//                 top: y + 'px',
//                 left: x + 'px',
//               }}
//             >
//               <div className="small-image-inner">
//                 <img src={src} alt={`Small Image ${index + 1}`} />
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Second;