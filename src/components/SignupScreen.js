import React, {useRef} from 'react';
import { auth } from '../firebase';
import './SignupScreen.css';


function SignupScreen() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) =>{
        e.preventDefault();
        auth.
        createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) => {
            console.log("working", authUser);
        })
        .catch((error) => {
            alert("error", error.message)
        })
    }

    const signIn = (e) =>{
        e.preventDefault();
        auth.
        signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) => {
            console.log("success", authUser)
        })
        .catch((error) => {
            alert(error.message)
        })
    }


    return (
        <div className='signupScreen_container'>
            <h1>Sign In</h1>
            <form>
                <input ref={emailRef} type='email' placeholder='Email'/>
                <input ref={passwordRef} type='password' placeholder='Password'/>
                <button onClick={signIn} type='submit'>Sign In</button>
            </form>
            <p className='signup_new'>New to MovieBox? <span onClick={register} className='signup_link'>Sign Up Now.</span></p>
        </div>
    )
}

export default SignupScreen
