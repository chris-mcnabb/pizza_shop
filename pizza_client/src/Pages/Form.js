import React from "react";
import {Container, CssBaseline, Grid, Typography} from "@material-ui/core";
import MuiPhoneNumber from "material-ui-phone-number";

const Form = () =>{
    return(

        <div className='container'>
            <div className='float-label' >
               <input type='text'/>
                <label htmlFor='text'>
                    Name
                </label>
            </div>
            <div className='float-label' >
                <input type='email'/>
                <label htmlFor='email'>
                    Email
                </label>
            </div>
            <div className='float-label' >
                <input type='email'/>
                <label htmlFor='email'>
                    Email
                </label>
            </div>
            <div className='float-label' >
                <input type='email'/>
                <label htmlFor='email'>
                    Email
                </label>
            </div>
        </div>
    )


}
export default Form;

