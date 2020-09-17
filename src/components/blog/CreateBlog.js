import React, { Component } from 'react';
import './styles/createblog.css';

export default class CreateBlog extends Component {
    render() {
        return (
            <div className='newstore prodfunctionality'>
                <div className="createstore">
                    <form action="createstores" className='createstoreform'>
                        <fieldset>
                            <legend className='cshead'>Make A Blog Post</legend>
                            <br/>
                            <b className="storetext">Category:</b>
                            <br/>
                            <select name="allstores">
                                <option value="All Stores">All Stores</option>
                                <option value="Maxi Stores">Maxi Stores</option>
                                <option value="Generic">Generic</option>
                                <option value="aEquevan">Equevan</option>
                                <option value="Unique">Unique</option>
                                <option value="Mathew stores">Mathew stores</option>
                                <option value="Unique">Add New Category</option>
                            </select>
                            <br/>
                            <br/>
                            <b className="storetext">Topic:</b>
                            <br/>
                            <input type="text" name='price'className="storename" placeholder='What is the topic of your post'/>
                            <br/>
                            <br/>
                            <b className="storetext">Your Post:</b> 
                            <br/>
                            <textarea name="description" className="storedescription" cols="34" rows="10" placeholder='Enter Your Post'></textarea>
                            <button className="actionz createit">Add</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        )
    }
}
