import React, {useState} from "react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import '../components/Modal.css'
import Delivery from "../components/Delivery";
import Pickup from "../components/Pickup";
const Option = (props) => {
    const [active, setActive] = useState(false);
    const [delivery, setDelivery] = useState({option: '', name: '', phone: '' , address: '', city: ''});
    const [phone, setPhone] = useState('');
    const [option, setOption] = useState('');

    const onChangeValue = (e) => {
        setActive(true)
        setDelivery({...delivery, [e.target.name]: e.target.value})
        props.setOption(e.target.value)

    };

    const options = () => {
        if(active===false){
            return null
        }
        if(delivery.option==='Pickup') {
            return (
                <div>
                    <Pickup active={active} option={props.option} setDelivery={setDelivery} delivery={delivery} setPhone={setPhone} phone={phone}/>
                </div>
            )
        }
        if(delivery.option==='Delivery'){
            return(
                <div>
                    <Delivery active={active} setDelivery={setDelivery} delivery={delivery} setPhone={setPhone} phone={phone}/>
                </div>
            )
        }
    };

    const buttonAction = () =>{
        if(active===false){
            return null

        }else if(active===true){
            if(delivery.option==='Pickup'){
             return  delivery.phone.trim()==='' || delivery.name.trim()==='' ?
                        <Link to='/try-again'>
                            <button className='button' onClick={() => {
                                props.setShowModal(false)


                            }}>
                                Submit
                            </button>
                        </Link>
                 : <Link to='/base'>
                            <button  className='button' onClick={()=> {

                                props.setCustomerOption(delivery)
                                props.setShowModal(false)
                                setActive(false)
                                setDelivery({option: '', name: '', phone: '' , address: '', city: ''})
                                setOption('')
                            }}>Submit </button>
                        </Link>


            }else  if(delivery.option==='Delivery'){
                return delivery.phone.trim() === '' || delivery.name.trim() === '' || delivery.address.trim() === '' || delivery.city.trim() === '' ? <Link to='/try-again'>
                        <button className='button' onClick={() => {
                            props.setShowModal(false)


                        }}>
                            Submit
                        </button>
                    </Link> :

                    <Link to='/base'>
                        <button className='button' onClick={() => {
                            props.setCustomerOption(delivery)
                            props.setShowModal(false)
                            setActive(false)
                            setDelivery({option: '', name: '', phone: '', address: '', city: ''})
                            setOption('')
                        }}>Submit
                        </button>
                    </Link>;
            }



        }

    }

 if(!props.showModal){
     return null;
 }
    return(

        <div className='modal-wrapper'

        style={{
            transform: props.showModal ? 'translateY(0vh)' : 'translateY(-100vh)',
            opacity: props.showModal ? '1' : '0'
        }}>
            <motion.div
                initial={{opacity: 0.7}}
                animate={{opacity: 1}}
                transition={{duration: 2}}>
            <div className='modal-header'>
           <h3 style={{fontSize: '2em', paddingTop: 15}}> Please Choose: {props.option}</h3>
        </div>
        <div className='modal-body' >
            <div className='modal-grid'>
                <div className='grid-area: option' onChange={onChangeValue}>
           <div>
               <label style={{fontSize: '1.25em', fontWeight: 'bold'}}>
                   <input type='radio'
                          value='Pickup'
                          name='option'/>
                   PickUp
               </label>
           </div>
            <div>
                <label style={{fontSize: '1.25em', fontWeight: 'bold'}}>
                    <input type='radio'
                           value='Delivery'
                           name='option'/>
                    Delivery
                </label>
            </div>
                </div>
           <div className='grid-area: information'>
               {options(active)}
           </div>
            </div>
          <div>
              {buttonAction()}
          </div>

        </div>
            </motion.div>
        </div>
    )

}

export default Option;
