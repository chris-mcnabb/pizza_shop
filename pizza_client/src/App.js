import React, {useEffect, useState} from 'react';
import axios from './config'
import { Helmet } from 'react-helmet'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Toppings from './Pages/Toppings';
import Order from './Pages/Order';
import Option from "./Pages/Option";
import Contact from "./Pages/Contact";
import './App.css'
import Footer from "./components/Footer";
import Alert from "./components/Alert";
import Menu from "./Pages/Menu";
import PaymentSuccess from "./Pages/Success";
import PaymentError from "./Pages/Error";
import Dressing from "./Pages/SaladDressing";
import Form from "./Pages/Form";
import ContactError from "./components/ContactError";
import Stripe from "./Pages/Stripe";

const App = () => {

    const [alert, setAlert] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [pizza, setPizza] = useState({category: "", name: '', size: '', quantity: 0,
        amount: 0, toppings: [], item: '', dressing: ''});
    const [total, setTotal] = useState(0.00);
    const [show, setShow] = useState(false);
    const [order, setOrder] = useState([]);
    const [qty, setQty] = useState(0);
    const [deleteItem, setDeleteItem] = useState();
    const [category, setCategory] = useState([]);
    const [search, setSearch] = useState('');
    const [menuItem, setMenuItem] = useState([]);
    const [toppings, setToppings] = useState([]);
    const [customerOption, setCustomerOption] = useState([])
    const [holder, setHolder] = useState([])
    const [option, setOption] = useState('')
    let company = ['Pizza Shop'];
    let year;
    let time;
    let date;
    (() => {
        date = new Date()
        year = new Date().getFullYear()
        time = new Date().toLocaleTimeString('en-EU');
    })();
    useEffect(()=>{
    const loadCategory = async () => {

            try {
                const {data: cat} = await axios.get(`/category/`);
                setCategory(cat)
            } catch (e) {
                console.log(e)
            }
        };
    loadCategory()
}, [])


    useEffect(()=>{
   const Items = async () => {

        try {
            const {data: value} = await axios.get(`/product/${search}`)
            setMenuItem(value)
        } catch (error) {
            console.log(error)
        }
    }
    Items()
    },[search])
    useEffect(() => {
        const getTopping = async () => {

            try {
                const {data: topping} = await axios.get(`/ingredient/`)
                setToppings(topping)

                } catch (e) {
                console.log(e)
            }
        }
        getTopping()
    }, [])




    const addBase = (value) => {
        setPizza({ ...pizza, category: value })
        setSearch(value)

    }
    const addItem = (value) => {

        setPizza({...pizza, name: value})
    };
    const addDressing = (value) => {

        setPizza({...pizza, dressing: value})
    };



    const addTopping = (value) => {

      let newToppings;
        if(!pizza.toppings.includes(value)){
            newToppings = [...pizza.toppings, value];

        } else {
            newToppings = pizza.toppings.filter(item => item !== value);

        }
        setPizza({ ...pizza, toppings: newToppings });

    }
    const calculateTotal = (value) =>{
        let sum=0;
      let temp=[...holder];
      temp.push(value)
        setHolder(temp)
        temp.map((number)=>{
            sum=sum+number

            setTotal(sum)
        })

    }

    const submitQuantUp = (qty) => {

        qty += 1
        setQty(qty)
    }
    const submitQuantDown = (qty) => {
        qty -= 1 && qty > 0
        setQty(qty)
    }

    return (
        <>

            <Helmet>
                <html lang="en" />
                <title>Pizza</title>
                <meta name="description" content="Pizza Shop" />
                <meta name="theme-color" content="#E6E6FA" />
            </Helmet>

            <Router>
                <Header company={company} total={total}/>

                <Option setShowModal={setShow} showModal={show} setCustomerOption={setCustomerOption} customerOption={customerOption} option={option} setOption={setOption}/>
                <Alert setAlert={setAlert} alert={alert}  order={order} confirm={confirm} setConfirm={setConfirm}
                       setDeleteItem={setDeleteItem} deleteItem={deleteItem} />
            <Switch>
                <Route  exact path = '/payment/success'
                        render={props => <PaymentSuccess {...props}  time={time}/>}
               />
                <Route  exact path = '/payment/error'
               component={PaymentError}
                />
                <Route path = '/try-again'>
                    <ContactError setShowModal={setShow} option={option} setOption={setOption}/>
                </Route>

                <Route path = '/contact'>
                    <Contact/>
                </Route>
                <Route path = '/form'>
                    <Form/>
                </Route>

                <Route path = '/menu'>
                    <Menu  menuItem={menuItem} pizza={pizza} setPizza={setPizza} addItem={addItem}  setOrder={setOrder} calculateTotal={calculateTotal}
                       order={order}  submitQuantUp={submitQuantUp} submitQuantDown={submitQuantDown} qty={qty} setQty={setQty}/>
                </Route>
                <Route path="/base">
                    <Category addBase={addBase} pizza={pizza} addItem={addItem} setShowItems={setShow} showItems={show} category={category} setQty={setQty}/>
                </Route>

                <Route path="/toppings">
                    <Toppings addTopping={addTopping} toppings={toppings} setToppings={setToppings} pizza={pizza} setPizza={setPizza} total={total} setTotal={setTotal}
                              setOrder={setOrder} order={order} submitQuantUp={submitQuantUp} submitQuantDown={submitQuantDown} qty={qty} setQty={setQty} calculateTotal={calculateTotal} />
                </Route>
                <Route path="/dressing">
                    <Dressing addDressing={addDressing} toppings={toppings} setToppings={setToppings} pizza={pizza} setPizza={setPizza} calculateTotal={calculateTotal}
                              setOrder={setOrder} order={order} submitQuantUp={submitQuantUp} submitQuantDown={submitQuantDown} qty={qty} setQty={setQty} />
                </Route>
                <Route exact path="/order"
                render={props => <Stripe {...props}  pizza={pizza} time={time} order={order} setOrder={setOrder} Alert={<Alert/>} total={total} setTotal={setTotal}
                                         setAlert={setAlert} alert={alert}   setDeleteItem={setDeleteItem} deleteItem={deleteItem} calculateTotal={calculateTotal}
                                         confirm={confirm} setConfirm={setConfirm} submitQuantUp={submitQuantUp} submitQuantDown={submitQuantDown}/>}
                />
                <Route path="/">
                    <Home setShowModal={setShow} company={company} />
                </Route>
            </Switch>
            </Router>

            <Footer year={year}/>
        </>
    );
}

export default App;
