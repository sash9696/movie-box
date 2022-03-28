import React, {useRef, useState} from 'react';
import { auth } from '../firebase';
import './SignupScreen.css';


function SignupScreen() {
    const [signin, setSignin] = useState(false)
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

    const guest = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            'guest@gmail.com',
            'abcabc'
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
            {!signin ? <h1> Sign In</h1> : <h1> Sign Up</h1>}
            <form>
                <input ref={emailRef} type='email' placeholder='Email'/>
                <input ref={passwordRef} type='password' placeholder='Password'/>
                {!signin ? 
                    <button onClick={signIn} type='submit'>Sign In</button> :
                    <button onClick={register} type='submit'>Sign Up</button>
            }
                    <button onClick={guest} type='submit'>Login as Guest User</button>

            </form>
            <p className='signup_new'>New to MovieBox? <span onClick={() => setSignin(!signin)}  className='signup_link'>{!signin ? 'Sign Up Now.' : 'Sign In'}</span></p>
        </div>
    )
}

export default SignupScreen
