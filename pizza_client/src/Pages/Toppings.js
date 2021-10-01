import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Toppings = (props) => {

    return (
        <div>
            <Link to="/base">
                <header style={{padding: 0}}>
                    <button style={{marginTop: 0, marginRight: '5em', fontWeight: 'bold'}}
                            onClick={() => {
                                let sum = 0;
                                if(props.pizza.name!=='Party Size Cheese Pizza') {
                                    if (props.pizza.size === 'Small') {

                                        let extra = props.pizza.toppings.length
                                        sum = props.pizza.amount + extra
                                        props.calculateTotal(sum * props.qty)
                                    }else if(props.pizza.size === 'Large'){
                                        let extra = props.pizza.toppings.length * 1.5
                                        sum = props.pizza.amount + extra
                                        props.calculateTotal(sum * props.qty)
                                    }
                                }else{
                                    let extra = props.pizza.toppings.length * 3
                                    sum = props.pizza.amount + extra
                                    props.calculateTotal(sum * props.qty)
                                }

                                props.setOrder([...props.order, {
                                    category: props.pizza.category,
                                    name: props.pizza.name,
                                    toppings: props.pizza.toppings,
                                    amount: sum,
                                    size: props.pizza.size,
                                    quantity: props.qty
                                }])
                                props.setPizza({category: "", name: '', size: '', quantity: 0,
                                    amount: 0, toppings: [], item: '', dressing: ''})


                            }}>
                        Add to Order
                    </button>
                </header>
            </Link>
        <div className="toppings container" style={{ marginTop: 10}}>

            <h3> Choose Your Toppings</h3>
            <ul>

                {props.toppings.map((topping, idx) => {
                  if(topping.category==='Pizza and Calzones') {
                      let spanClass = props.pizza.toppings.includes(topping.ingredient) ? 'active' : '';

                      return (
                          <li key={topping.ingredient} onClick={() => props.addTopping(topping.ingredient)}>
                              <span className={spanClass}>{topping.ingredient}</span>
                          </li>
                      )
                  } })}
            </ul>
        </div>
        </div>
    )
}

export default Toppings;
