// import React from 'react';
// import './style.css';
// const Dots = () => {
//   return (
//     <div className="flickering-dots">
//       <div className="dot"></div>
//       <div className="dot"></div>
//       <div className="dot"></div>
//       <div className="dot"></div>
//       <div className="dot"></div>
//       <div className="dot"></div>
//       <div className="dot"></div>
//       <div className="dot"></div>
//       <div className="dot"></div>
//       <div className="dot"></div>
//     </div>
//   );
// };

// export default Dots;

import React from 'react';
import './style.css';

const generateRandomPosition = (width,height) => {
  const top = Math.floor(Math.random() * width);
  const left = Math.floor(Math.random() * height);
  return { top: `${top}%`, left: `${left}%` };
};

const Dots = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const dotsArray = Array.from({ length: 10 }, (_, index) => (
    <div
      key={index}
      className="dot"
      style={{ position: 'absolute', ...generateRandomPosition(width,height) }}
    ></div>
  ));

  return <div className="flickering-dots">{dotsArray}</div>;
};

export default Dots;