import React from 'react';
import Logo from '../assets/bp.png'
import { Link } from 'react-router-dom';

const Header = (props) => {

    return (
        <header>
            <div>
                <Link to="/">
                    <img className='pizza-svg'  src={Logo} alt='Brothers' style={{width: '60px', height: 'auto', paddingBottom: 30}}/>
                </Link>
            </div>

            <div className="title">
                <Link to="/">
                <h1 style={{marginBottom: 0}}>{props.company}</h1>
                </Link>
                <div className='grid-container'>
                    <Link to="/contact">
                    <h4   className='grid-area: contact' style={{marginTop: 5}}>Contact Us</h4>
                    </Link>
                    <h4 className='grid-area: total' style={{ marginTop: 5, marginRight: 15}}>Total: €{props.total.toFixed(2)}</h4>
                </div>

            </div>
        </header>
    )
}

export default Header;
