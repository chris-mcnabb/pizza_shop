import React, {useState} from "react";
import './Modal.css'
const Alert = (props) =>  {
    if(!props.alert){
        return null;
    }
    return(
        <div className='alert-wrapper'
            style={{
            transform: props.setAlert ? 'translateY(0vh)' : 'translateY(-100vh)',
            opacity: props.setAlert ? '1' : '0'
        }}>
            <div className='modal-header'>
           <h3>
               Remove from Order?
           </h3>
            </div>
<div className='modal-body'>
    <div>
        <h3 style={{paddingBottom: 55}}>
            {props.order[props.deleteItem].name}
        </h3>
    </div>

    <button className='button' style={{marginRight: 40, color: 'red', fontWeight: 'bold'}}
        onClick={()=> {
            props.setAlert(false)
            props.setConfirm(true)
        }}>
        Confirm
    </button>
    <button className='button' style={{fontWeight: 'bold'}}
            onClick={()=> {
                props.setAlert(false)
                props.setConfirm(false)
                props.setDeleteItem('')
            }}>
        Decline
    </button>
</div>
        </div>
    )



}
export default Alert;
