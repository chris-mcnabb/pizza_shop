import React from "react";
import {Link} from "react-router-dom";

const ContactError = (props) => {
    return (
        <div className='home container'>

         <h3>
             Please Complete Pickup or Delivery
         </h3>
            <div>
                <Link to='/'>
                <button className='button' onClick={()=> {
                    props.setShowModal(true)}}>
                Back
            </button>
                </Link>
            </div>

        </div>
    )

};
export default ContactError;
