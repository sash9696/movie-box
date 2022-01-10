import React, {useState, useEffect} from 'react';
import './Nav.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

function Nav() {

    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {

        if(window.scrollY > 100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar)
        return () => {
            window.removeEventListener('scroll', transitionNavBar)
        }
    }, [])

    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <img className='nav_image' src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0c9f9c15807693.562972078781b.png' alt='' />
            <p className='nav_logo'><AccountCircleIcon fontSize='medium' /></p>
        </div>
    )
}

export default Nav
