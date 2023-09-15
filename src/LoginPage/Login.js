import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import Signup from './Signup';
import { Link } from "react-router-dom"
import "./Login.css"
import { Dashboard } from './Dashboard';
// const Url = "https://jsonplaceholder.typicode.com/";

export default function Login() {
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isValid, setValid] = useState(false);

  const [userDetails, setUserDetails] = useState(
    {
      username: '',
      password: ''
    }
  );

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setUserDetails({ ...userDetails, username: e.target.value });
    // if (!userDetails.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i)) {
    //   setEmailError('Please enter a valid email address');
    // } else {
    //   setEmailError('');
    //   setValid(passwordError === '');
    // }

  };

  const handlePasswordChange = (e) => {
    setUserDetails({ ...userDetails, password: e.target.value });
    // if (!userDetails.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)) {
    //   setPasswordError('Password must have at least 6 characters, 1 number, 1 uppercase letter, 1 lowercase letter, and 1 special character');
    // } else {
    //   setPasswordError('');
    //   setValid(emailError === '');
    // }

  };


  const handleSubmit = (e) => {
    e.preventDefault();



    // axios.post(Url + `users`, userDetails).then((response) => {
    //  alert(JSON.stringify(response));
    //    toast.success(`Welcome ${userDetails.username}`);
    //  if(response.status===200)
    //     {
    //         navigate("/Dashboard")
    //     }


    // .catch((error) => {
    //     setPasswordError(error.response.data)
    // toast.error(error.message);
    // })

  };

  return (


    <div className="border-2 border-indigo-70 mt-10 pb-10 ml-80 mr-80 bg-orange-200 select-none "  >
      <center>
        <div >
          <h1 className='font-bold text-3xl'>Login Page</h1>
          <br></br>
          <form onSubmit={handleSubmit}>
            <div>
              <label className='font-semibold'>User ID:</label>
              <input type="text" value={userDetails.username} onChange={handleEmailChange} required />
              <div>


                <span className="error">{emailError}</span></div>
            </div>

            <br>
            </br>
            <div>
              <label className='font-semibold'>Password:</label>
              <input type="password" value={userDetails.password} onChange={handlePasswordChange} required />
              <div> <span className="error">{passwordError}</span></div>
            </div>
            <br>
            </br>
            <div>
              <Link to="./Dashboard" className='font-semibold'> Login </Link>
              {/* <button type="submit">Login</button> */}
            </div>
            <br /> <br />
            <button type="submit" className='font-semibold mr-10'>Signup</button>
            {/* <Link to="./Dashboard"> Signup </Link> */}

            <button type="submitFotgot Password" className='font-semibold border-solid  '>Forgot Password</button>
          </form>
        </div>
      </center>
    </div>
  );

}      