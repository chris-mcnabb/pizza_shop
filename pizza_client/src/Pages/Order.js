import React, {useState} from 'react';
import axios from '../config.js';
import { injectStripe } from "react-stripe-elements";

const Order = (props) => {

    const [items, setItems] = useState(props.order)

    const handleClick=(e)=> {
    props.setDeleteItem(parseInt(e.target.value))
    props.setAlert(true)
}
    if(props.confirm===true) {

        const deleteMeal = () => {
            let array=[...props.order]
            array.map((item, idx) => {
                if (array[idx] === props.order[props.deleteItem]) {

                    props.calculateTotal(-props.order[idx].amount * props.order[idx].quantity)
                    array.splice(idx, 1)
                    props.setOrder(array)
                    props.setDeleteItem('')

                    props.setConfirm(false)
                }
            })
        }
        deleteMeal()
    }

    const createCheckoutSession = async () => {

        try {
            const response = await axios.post(
                `payment/create-checkout-session`,
                { items },

            );

            debugger
            return response.data.ok
                ? (localStorage.setItem(
                    "sessionId",
                    JSON.stringify(response.data.sessionId)

                ),
                    redirect(response.data.sessionId))
                : props.history.push("/payment/error");

        } catch (error) {
            props.history.push("/payment/error");
        }

    };
    const redirect = sessionId => {

        debugger;
        props.stripe
            .redirectToCheckout({
                // Make the id field from the Checkout Session creation API response
                // available to this file, so you can provide it as parameter here
                // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
                sessionId: sessionId
            })
            .then(function (result) {
                debugger;
                // If `redirectToCheckout` fails due to a browser or network
                // error, display the localized error message to your customer
                // using `result.error.message`.
            });
    };
    return (

        <div className="container order" style={{marginTop: 30}}>
            <h2>Thank you for your order :)</h2>
            <h2 style={{paddingBottom: 30}}>Order Time: {props.time}</h2>
            <h2 style={{paddingBottom: 30}}>Your Order:</h2>
            {
                props.order.map((item, idx) => {
                    return (
                        <div style={{marginTop: 5}} key={idx} >

                            <div className='finalize-grid'>
                                <div className='grid-area: edit'>
                           <button  style={{color: 'red', fontWeight: 'bold', fontSize: '1em'}}
                                    value={idx}
                                    onClick={handleClick}
                                    name={item.name}
                           >Delete</button>
                                </div>
                                <div className='grid-area: order'>
                            <div>
                              <h3>
                                  {item.name}
                              </h3>
                            </div>
                            <div>
                             Quantity: {item.quantity}
                            </div>
                                    <div>
                                        Size:   {item.size}
                                    </div>

                                    <div>
                                Price:   €{(item.amount * item.quantity).toFixed(2)}
                                    </div>
                                    <div>
                                        {item.dressing}
                                    </div>

                            {item.toppings.map(top=>
                                <div key={top}>
                                    {top}
                                </div>
                            )}
                                </div>
                            </div>
                        </div>
                    )
                })
            }

                <button onClick={() =>
                createCheckoutSession()
                }>
                    Pay Now
                </button>


        </div>
    )
}

export default injectStripe(Order);

