import React, {useState, useEffect} from 'react';
import './Nav.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { useNavigate } from 'react-router';

function Nav( { search, setSearch }) {

    const navigate = useNavigate();
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
            <div className='nav_left'>
                <img onClick={() =>navigate('/')} className='nav_image' src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0c9f9c15807693.562972078781b.png' alt='' />
            </div>
            <div className='nav_right'>
                <input 
                    className='nav_input' 
                    placeholder='Search your fav movie' 
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <p onClick={() => navigate('/profile')} className='nav_logo'><AccountCircleIcon fontSize='large' /></p>
            </div>
        </div>
    )
}

export default Nav
