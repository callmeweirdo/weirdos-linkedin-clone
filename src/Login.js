import React, {useState} from 'react';
import './Login.css';

// ! redux imports
import { useDispatch } from 'react-redux';

// ! ifrebase import
import {auth} from './firebase';

// ! components imports
import {login} from './features/userSlice';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();
 
    const loginToApp = (e) => {
        e.preventDefault();
    }

    const register = () => {
        if(!name){
            return alert('enter your fucking name');
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            }).then(() => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName:name,
                        photoURL:profilePic
                    })
                )
            })
        }).catch((error) => alert(error.message) );
    }



  return (
    <div className="login">
      <img src="./img/loginlogo.png" />

      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if registering )"
          type="text"
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="profile pic URL (optional)"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign Up
        </button>
      </form>

      <p>
        Not a member ?
        <span className="login__register" onClick={register}>
          register now
        </span>
      </p>
    </div>
  );
}

export default Login;