
import React from 'react';
import {Link} from 'react-router-dom';
import "./ProjectCard.scss";

import { projects } from "../../data";

const ProjectCard = ({item}) => {
  return (
    <Link to="/" className='link'>
    <div className='projectCard'>
      <img src={item.img} alt="" />
      <div className="info">
        <img src={item.pp} alt="" />
        <div className="texts">
          <h2>{item.cat}</h2>
          <span>{item.username}</span>
        </div>
      </div>

     </div>
    </Link>
  );
};

export default ProjectCard



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