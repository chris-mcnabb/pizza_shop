import React from "react";


const Delivery = (props) => {

    const handleText = (e) =>{
        e.preventDefault()
        props.setDelivery({...props.delivery, [e.target.name]: e.target.value})
    }

    return(

        <div>
            <div>
                <h3 style={{fontSize: '1.25em', fontWeight: 'bolder', color: 'red'}}>
                    *All Fields Required
                </h3>
            </div>
            <div className='float-label' >

                <input type='text'
                       value={props.delivery.name}
                       name='name'
                       onChange={handleText}
                />
                <label htmlFor='text'>
                    Name
                </label>

            </div>
            <div className='float-label' >
                <input onChange={handleText}
                       type='tel'
                       value={props.delivery.phone}
                       name='phone'/>
                <label htmlFor='tel'>
                    Phone
                </label>
            </div>
            <div className='float-label' >
                <input onChange={handleText}
                       type='text'
                       value={props.delivery.address}
                       name='address'/>
                <label htmlFor='text'>
                    Address
                </label>
            </div>
            <div className='float-label' >
                <input onChange={handleText}
                       type='text'
                       value={props.delivery.city}
                       name='city'/>
                <label htmlFor='text'>
                    City
                </label>
            </div>
        </div>
    )
}

export default Delivery;

