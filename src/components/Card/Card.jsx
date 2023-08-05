import React from "react";
import { Link } from "react-router-dom";


// export default function Card(props) {
//    //logica


//    return (
//       <div>
//          {/* <button onClick={}>X</button>
//          <h2></h2>
//          <h2></h2>
//          <h2></h2>
//          <img  src={} alt="" /> */}
//       </div>
//    );
// }

let Card = ({name, species, gender, image, onClose, id, origin}) =>{
   return(
      <div>
         {
            onClose ? <button onClick={()=>onClose(id)}>X</button> : null
         }
         
         <Link to={`/detail/${id}`} >
            <h2>{name}</h2>
         </Link>
         
         <h2>{species}</h2>
         <h2>{gender}</h2>
         {
            origin ? <h2>{origin.name}</h2> : null
         }
         
         <img  src={image} alt="" />
      </div>
   );
}

export default Card;