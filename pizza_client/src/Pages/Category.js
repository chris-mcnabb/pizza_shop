import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import axios from "../config";
const Category = (props) => {
    const [active, setActive] = useState(false)

    return (
        <div>
            <Link to="/order">
       <header style={{padding: 0}}>
           <button style={{marginTop: 0, marginRight: '7em', fontWeight: 'bold'}}>Place Order</button>
       </header>
            </Link>
        <div className="base container" style={{marginLeft: '7em', marginTop: 10}}>

            <h3>Please Choose: Category</h3>

            <div className='order-grid'>
                <ul className='grid-area: category'>
                    {props.category.map((category, idx) => {
                        let spanClass = props.pizza.category === category.category ? 'active' : '';
                        return (


                            <li key={category.category} onClick={() => {
                                props.setQty(0)
                                props.addBase(category.category)
                                setActive(true)
                            }}>
                                <Link to='/menu'>
                                <span className={spanClass}>{ category.category }</span>
                                </Link>
                            </li>


                        )
                    })}
                </ul>
                <div className='grid-area: items'>

                </div>
            </div>
            {props.pizza.category && (
                <div className="next">
                    <Link to="/menu">
                        <button>Next</button>
                    </Link>
                </div>
            )}

        </div>
        </div>
    )
}

export default Category;
