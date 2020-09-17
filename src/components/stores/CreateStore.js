import React, { Component } from 'react';
import './styles/createstore.css';

export default class CreateStore extends Component {
    render() {
        return (
            <div className='newstore prodfunctionality'>
                <div className="createstore">
                    <form action="createstores" className='createstoreform'>
                        <fieldset>
                            <legend className='cshead'>Create Your Own Store</legend>
                            <b className="storetext">Name of store:</b>
                            <br/>
                            <input type="text" name='storename'className="storename" placeholder='Enter name of Store'/>
                            <br/>
                            <br/>
                            <b className="storetext">Description:</b> 
                            <br/>
                            <textarea name="description" className="storedescription" cols="34" rows="10" placeholder='Please ensure to write less than 40 words'></textarea>
                            <button className="actionz createit">Create</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        )
    }
}
