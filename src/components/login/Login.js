import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './styles/login.css';

export default class Login extends Component {
    render() {
        return (
            <div className='newstore prodfunctionality'>
                <div className="createstore">
                    <form action="/home" className='createstoreform'>
                        <fieldset>
                            <legend className='cshead'>Login Form</legend>
                            <b className="storetext">Email:</b>
                            <br/>
                            <input type="text" name='storename'className="storename" placeholder='Enter Email'/>
                            <br/>
                            <br/>
                            <b className="storetext">Password:</b> 
                            <br/>
                            <input type="password" name='storename'className="storename" placeholder='Enter Email'/>
                            <button className="actionz createit">Login</button>
                        </fieldset>
                    </form>
                            <br/>
                            <br/>
                            <p>I Dont have an Account</p>
                            <Link to='/createaccount'><button className="actionz createit">Create Account</button></Link>
                </div>
            </div>
        )
    }
}
