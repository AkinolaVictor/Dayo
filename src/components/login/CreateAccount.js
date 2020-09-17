import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
// import {registerUser} from '../../actions/authActions'
import './styles/createaccount.css';

class CreateAccount extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            Email:'',
            password:'',
            address: '',
            PhoneNo: ''
        }

        this.onSubmit=this.onSubmit.bind(this);
        this.onChange=this.onChange.bind(this);
    }

    
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
        this.props.history.push('/dashboard');
        }
    }

    onSubmit(e){
        // {...state}=this.state;
        e.preventDefault();

        const newUser={
            name: this.state.name,
            Email: this.state.Email,
            password: this.state.password,
            address: this.state.address,
            PhoneNo: this.state.PhoneNo
        }

        this.props.registerUser(newUser);
        // console.log(registerUser, newUser)
        
        // console.log(registerUser.payload)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value })
    }

    render() {
        const { user } = this.props.auth;
        return (
            <div className='newstore prodfunctionality'>
                <div className="createstore">
                {user.name}
                    <form action="/home" className='createstoreform'>
                        <fieldset>
                            <legend className='cshead'>Registration Form</legend>
                            <b className="storetext">Name:</b>
                            <br/>
                            <input type="text" name='name' onChange={this.onChange} className="storename" placeholder='Enter Your Name'/>
                            <br/>
                            <br/>
                            <b className="storetext">Address:</b>
                            <br/>
                            <input type="text" name='address' onChange={this.onChange} className="storename" placeholder='Enter Your Address'/>
                            <br/>
                            <br/>
                            <b className="storetext">Email:</b>
                            <br/>
                            <input type="text" name='Email' onChange={this.onChange} className="storename" placeholder='Enter Email'/>
                            <br/>
                            <br/>
                            <b className="storetext">Phone Number:</b>
                            <br/>
                            <input type="text" name='PhoneNo' onChange={this.onChange} className="storename" placeholder='Enter Your Name'/>
                            <br/>
                            <br/>
                            <b className="storetext">Password:</b> 
                            <br/>
                            <input type="password" name='password' onChange={this.onChange} className="storename" placeholder='Enter password'/>
                            <br/>
                            <br/>
                            <b className="storetext">Confirm Password:</b>
                            <br/>
                            <input type="text" name='confirmPassword'className="storename" placeholder='confirm password'/>
                            <br/>
                            <br/>
                            <button className="actionz createit" onClick={this.onSubmit}>Create Account</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        )
    }
}

// CreateAccount.propTypes = {
//     registerUser: PropTypes.func.isRequired,
//     auth: PropTypes.object.isRequired
// }

// const mapStateToProps = (state) => ({
//     auth: state.auth
// })
export default CreateAccount;
