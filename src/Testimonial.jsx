import React from "react";
import { GrBlockQuote } from "react-icons/gr";
import { FaStar } from "react-icons/fa";

function Testimonial(props) {
   return (
      <>
         <div className="testy-main-wrapper">
            <div className="collumss">
               <GrBlockQuote />
            </div>
            <p> {props.data} </p>
            <div className="icons">
               <FaStar />
               <FaStar />
               <FaStar />
               <FaStar />
               <FaStar />
            </div>
            <div className="client-nm">
               <h4>Sally Olsen</h4>
            </div>
         </div>
      </>
   );
}
export default Testimonial; 