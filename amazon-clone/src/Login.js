import React,{useEffect, useState} from 'react'
import './Login.css'
import { Link, useNavigate} from 'react-router-dom'
import { auth,googleprovider } from './firebase';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithPopup} from "firebase/auth";
import { useStateValue } from "./StateProvider";

function Login() {
    // allow to programmatically change url
    const navigate = useNavigate();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [{basket}, dispatch] = useStateValue();

    useEffect(() => {
        dispatch({
            type:'CART_EMPTY'
        });
    },[email]);

    const signIn = e => {
        // prevent from refreshing
        e.preventDefault();

        // firebase....
        signInWithEmailAndPassword(auth,email,password)
        .then((auth) => {
            navigate("/", { replace: true })
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        
        // firebase....
        createUserWithEmailAndPassword(auth,email,password)
        .then((auth) => {
            // it successfully created a 
            //new user with email and password

            if(auth){
                navigate("/", { replace: true })
            }
        })
        .catch(error => alert(error.message))
    }

    const signInWithGoogle = e => {
        // prevent from refreshing
        e.preventDefault();

        // firebase....
        signInWithPopup(auth,googleprovider)
        .then((auth) => {
            navigate("/", { replace: true })
        })
        .catch(error => alert(error.message))
    }



  return (
    <div className='login'>
        <Link to='/'>
        <img 
        className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" 
        />
        </Link>

        <div className="login__container">
            <h1>Sign In</h1>
            
            <form>
                <h5>Email</h5>
                <input type="text" value={email} 
                onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type="password" value={password} 
                onChange={e => setPassword(e.target.value)}/>

                <button type='submit' onClick={signIn}
                 className='login__signInButton'>Sign In</button>
                <button type='submit' onClick={signInWithGoogle}
                 className='login__signInButton'>Sign In With Google</button>
            </form>

            <p> By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>

            <button  onClick={register}
            className='login__registerButton'>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login