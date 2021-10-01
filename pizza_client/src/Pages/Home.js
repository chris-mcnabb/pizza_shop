import React, {useEffect} from 'react';
import {motion} from 'framer-motion'
import {FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa';
const Home = (props) => {


    return (

        <div className="home container" style={{ marginTop: '50px'}}>
            <h3 >Welcome To</h3>
            <motion.h2  initial={{opacity: 0}}
                 animate={{opacity: 1}}
                 transition={{duration: 5}}>
                {props.company}
            </motion.h2>

                <button style={{fontWeight: 'bolder', marginBottom: '2em'}} onClick={()=> {
                    props.setShowModal(true)


                } }>
                    Menu/Order Online
                </button>
            <div>
            <span style={{fontSize: '2em', letterSpacing: '40px'}}>
                <i><FaFacebook/></i>&nbsp;
                <i><FaTwitter/></i>&nbsp;
                <i><FaLinkedin/></i>
            </span>
            </div>
        </div>
    )
}

export default Home;
