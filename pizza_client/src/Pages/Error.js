import React from "react";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';


const PaymentError = props => {

    return (
        <div className=' home container'>
             <div className='box' style={{border: '5px solid red', borderRadius: 20 }} >

                 <i className="fas fa-exclamation-triangle"></i>
                 <ErrorOutlineIcon
                    style={{maxWidth: '500px', maxHeight: '200px', minWidth: '400px', minHeight: '150px', color: 'red'}}
                    fontSize='large'
                />
                <h3>Something Went Wrong.  Please Try Again.</h3>
             </div>
        </div>
    )

};

export default PaymentError;
