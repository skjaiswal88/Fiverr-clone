
import React from 'react';
import {Link} from 'react-router-dom';
import "./CatCard.scss";

import { cards } from "../../data";

const CatCard = ({item}) => {
  return (
    <Link to="/gigs?cat=design" >
    <div className='catCard'>
        <img src={item.img} alt="" />
        <span className='desc'>{item.desc}</span>
        <span className='title'>{item.title}</span>
    </div>
    </Link>
  );
};

export default CatCard



// import React from "react";
// import { Link } from "react-router-dom";
// import "./CatCard.scss";
// import { cards } from "../../data";

// const CatCard = () => {
//   return (
//     <div>
//       {cards.map((item) => (
//         <Link to={`/gigs?cat=design`} key={item.id}>
//           <div className="catCard">
//             <img src={item.img || "fallback-image-url"} alt={item.desc || "No description"} />
//             <span className="desc">{item.desc || "No description provided"}</span>
//             <span className="title">{item.title || "No title provided"}</span>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default CatCard;