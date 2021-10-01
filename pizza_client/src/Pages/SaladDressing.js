import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Dressing = (props) => {



    return (
        <div>
            <Link to="/base">
                <header style={{padding: 0}}>
                    <button style={{marginTop: 0, marginRight: '15em', fontWeight: 'bold'}}
                            onClick={() => {
                                props.calculateTotal(props.pizza.amount * props.qty)
                                props.setOrder([...props.order, {
                                    category: props.pizza.category,
                                    name: props.pizza.name,
                                    toppings: [],
                                    amount: props.pizza.amount,
                                    size: '',
                                    quantity: props.qty,
                                    dressing: props.pizza.dressing
                                }])
                                props.setQty(0)
                                props.setPizza({category: "", name: '', size: '', quantity: 0,
                                    amount: 0, toppings: [], item: '', dressing: ''})
                            }}>
                        Add to Order
                    </button>
                </header>
            </Link>
            <div className="toppings container" style={{ marginTop: 10}}>

                <h3> Choose Your Dressing</h3>
                <ul>
                    {props.toppings.map((dressing, idx) => {
                        if(dressing.category==='Salads') {
                            let spanClass = props.pizza.dressing === dressing.ingredient ? 'active' : '';

                            return (
                                <li key={dressing.ingredient} onClick={() => props.addDressing(dressing.ingredient)}>
                                    <span className={spanClass}>{dressing.ingredient}</span>
                                </li>
                            )
                        } })}
                </ul>
            </div>
        </div>
    )
}

export default Dressing;
