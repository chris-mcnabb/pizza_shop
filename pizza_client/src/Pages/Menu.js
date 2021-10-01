import React, {useState} from "react";
import {Link} from "react-router-dom";
import {FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const Menu = (props) =>{

    const [active, setActive] = useState({clicked: false, name: '', small: 0, large: 0, description: ''})
    const [orderSize, setOrderSize] = useState('')
    const [orderPrice, setOrderPrice] = useState({amount: 0})


    const buttonSelect = () => {

        if(props.pizza.category!=='Pizza and Calzones' && props.pizza.category!=='Salads'){
            return(
                <Link to="/base">
                    <header style={{padding: 0}}>
                <button style={{marginTop: 0, marginRight: '5em', fontWeight: 'bold'}}
                        onClick={()=> {
                            if(props.pizza.category !=='Gourmet Pizzas' && props.pizza.category !== 'Cold Subs' &&
                                props.pizza.category !=='Hot Subs' && props.pizza.category !=='Quesadillas') {

                                props.calculateTotal(active.small * props.qty)
                                props.setOrder([...props.order, {
                                    category: props.pizza.category, name: props.pizza.name,
                                    amount: active.small, size: orderSize, quantity: props.qty, toppings: []
                                }])

                            }else{
                                props.calculateTotal(orderPrice * props.qty)
                                props.setOrder([...props.order, {
                                    category: props.pizza.category, name: props.pizza.name,
                                    amount: orderPrice, size: orderSize, quantity: props.qty, toppings: []
                                }])
                            }
                            props.setPizza({category: "", name: '', size: '', quantity: 0,
                                amount: 0, toppings: [], item: '', dressing: ''})
                        }}>
                    Add to Order
                </button>

                    </header>
                </Link>

            )
        }else if(props.pizza.category==='Pizza and Calzones'){
            return(
                <Link to="/toppings">
                    <header style={{padding: 0}}>
                <button style={{marginTop: 0, marginRight: '5em', fontWeight: 'bold'}}
                        onClick={()=> {
                            if(props.pizza.name!=='Party Size Cheese Pizza'){
                                props.setPizza({...props.pizza, size: orderSize, amount: orderPrice})
                            }else{
                                props.setPizza({...props.pizza, amount: active.small})
                            }

                        }}
                >Choose Toppings</button>
        </header>
        </Link>
            )
        }
        if(props.pizza.category==='Salads'){
            return(
                <Link to="/dressing">
                    <header style={{padding: 0}}>
                <button style={{marginTop: 0, marginRight: '5em', fontWeight: 'bold'}} onClick={()=>
                props.setPizza({...props.pizza, amount: active.small})}>
                    Choose Dressing</button>
        </header>
        </Link>
            )
        }
    }

    const onChangeValue = (e) => {
        setOrderSize(e.target.value)
      if(e.target.value==='Large'){

          setOrderPrice(active.large)
      }else {

          setOrderPrice(active.small)
      }

    };
    const renderDescription= () => {
    if(active.clicked===false){
        return null;
    }

        const priceMatrix = () =>{
        if(active.large==null || undefined){
            return(
                <h4 style={{fontSize: '1em'}}>
                    <span>€{active.small.toFixed(2)}</span>
                </h4>
            )
        }else if(true){
            return(
                <div className='grid-area: option' onChange={onChangeValue}>
                    <div>
                        <label style={{fontSize: '1em', fontWeight: 'bold'}}>
                            <input type='radio'
                                   value='Small'
                                   name='option'/>
                            <span>  Small: €{active.small.toFixed(2)} </span>
                        </label>
                    </div>
                    <div>
                        <label style={{fontSize: '1em', fontWeight: 'bold',}}>
                            <input type='radio'
                                   value='Large'
                                   name='option'/>
                            <span>  Large: €{active.large.toFixed(2)} </span>
                        </label>
                    </div>
                </div>
            )
        }
        }

    return(
        <div style={{marginTop: 10}}>
                    <h3>
                        <div>{orderSize}</div>
                        <span>{active.name}</span>

                    </h3>
            {priceMatrix()}
                        <h4 style={{fontSize: '1em'}}>
                            <span>{active.description}</span>
                        </h4>
            <h4 style={{marginBottom: 1}}>Quantity:</h4>
            <h3 style={{borderBottom: 'transparent'}}>  <i onClick={()=>props.submitQuantUp(props.qty)} style={{cursor: 'pointer',
                paddingRight: 5, fontSize: 30, fontWeight: 'bold'}}><FaPlusCircle style={{fontSize: 15}}/></i>

              {props.qty}

            <i onClick={()=>props.submitQuantDown(props.qty)} style={{cursor: 'pointer', paddingLeft: 5, fontSize: 30, fontWeight: 'bold'}}><FaMinusCircle style={{fontSize: 15}}/></i> </h3>
        </div>

    )
}

    return(
       <div>

                   {buttonSelect()}
           <div className="base container" style={{ marginTop: 20, maxWidth: 700, alignItems: 'center'}}>
               <h3 style={{marginLeft: 250, borderBottom: 'transparent', fontSize: '2em'}}>{props.pizza.category}</h3>
               <div className='order-grid'>
                   <ul className='grid-area: category'>
                       {props.menuItem.map((item, idx) => {
                           let spanClass = props.pizza.name === item.name ? 'active' : '';
                           return (
                               <li key={idx} onClick={() => {

                                   props.addItem(item.name);



                                   setActive({clicked: true, name: item.name, small: item.smallprice, large: item.largeprice, description: item.description})
                               }}>
                                   <span className={spanClass} style={{ fontSize: '1em'}}>{ item.name }</span>

                               </li>

                           )
                       })}

                   </ul>
                   <div className='grid-area: items'>
                       {renderDescription()}
                   </div>
               </div>
           </div>
       </div>
    )
}
export default Menu;

