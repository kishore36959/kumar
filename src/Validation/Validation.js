import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Valid.css';

const Url = "http://restapi.adequateshop.com";

export default function Login() {
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isValid, setValid] = useState(false);
    const [userDetails, setUserDetails] = useState(
        {
            email: '',
            password: ''
        }
    );

    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setUserDetails({ ...userDetails, email: e.target.value });
        if (!userDetails.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i)) {
            setEmailError('Please enter a valid email address');

        } else {
            setEmailError('');
            setValid(passwordError === '');
        }

    };

    const handlePasswordChange = (e) => {
        setUserDetails({ ...userDetails, password: e.target.value });
        if (!userDetails.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)) {
            setPasswordError('Password must have at least 6 characters, 1 number, 1 uppercase letter, 1 lowercase letter, and 1 special character');

        } else {
            setPasswordError('');
            setValid(emailError === '');
        }

    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            axios.post(Url + `/api/authaccount/login`, userDetails).then((response) => {
                toast.success(`Welcome ${userDetails.password}`);
                navigate("/dashboard")
            })
                .catch((error) => {
                    toast.error(error.message);
                })
        }
    };

    return (
        <div>
            <center>
                <div className="ref">


                    <h1>Login</h1>

                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Email:</label>
                            <input type="text" value={userDetails.email} onChange={handleEmailChange} required />
                            <div>


                                <span className="error">{emailError}</span></div>
                        </div>

                        <br>
                        </br>
                        <div>
                            <label>Password:</label>
                            <input type="password" value={userDetails.password} onChange={handlePasswordChange} required />
                            <div> <span className="error">{passwordError}</span></div>
                        </div>
                        <br>
                        </br>
                        <button type="submit">Login</button>
                        <button type="submit">signup</button>
                    </form>
                </div>
            </center >
        </div >
    );

}
