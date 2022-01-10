import React, {useState} from 'react';
import './LoginScreen.css';
import SignupScreen from './SignupScreen';


function LoginScreen() {

    const [signin, setSignin] = useState(false);

    return (
        <div className='loginScreen_banner'
             
        >
            <img className='loginScreen_logo' src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0c9f9c15807693.562972078781b.png' alt='' />
            <button className='loginScreen_button' onClick={() => setSignin(true)} >Sign In</button>
            <div className="loginScreen_gradient"></div>

            {signin ? <SignupScreen/> : (
                    <div className="loginScreen_body">
                    <h1>Unlimited films, TV programmes and more.</h1>
                    <h2>Watch anywhere. Cancel at anytime</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                
                <form>
                    <input type='email' placeholder='Email Address'/>
                    <button onClick={() => setSignin(true)} >GET STARTED</button>
                </form>
                </div>
            )}
            
            </div>
        )
}

export default LoginScreen
