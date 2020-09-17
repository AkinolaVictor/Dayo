import React, { Component } from 'react';
import './styles/createprod.css';

export default class CreateProd extends Component {
    render() {
        return (
            <div className='newstore prodfunctionality'>
                <div className="createstore">
                    <form action="createstores" className='createstoreform'>
                        <fieldset>
                            <legend className='cshead'>Add A New Product</legend>
                            <b className="storetext">Name of Product:</b>
                            <br/>
                            <input type="text" name='productname'className="storename" placeholder='Enter the name of the product'/>
                            <br/>
                            <br/>
                            <b className="storetext">Price:</b>
                            <br/>
                            <input type="text" name='price'className="storename" placeholder='Enter the price of the product'/>
                            <br/>
                            <br/>
                            <b className="storetext">Discount Price:</b>
                            <br/>
                            <input type="text" name='price2'className="storename" placeholder='Enter the discount price, if there is'/>
                            <br/>
                            <br/>
                            <b className="storetext">on Stock:</b>
                            <br/>
                            <input type="number" name='storename'className="storename" placeholder='Enter available quantity of this product'/>
                            <br/>
                            <br/>
                            <b className="storetext">Select pictures of product:</b>
                            <br/>
                            <span className="storetext">Please, ensure that you select less than 6 images with the right resolution, the first image you select would be the one to be displayed on the product</span>
                            <br/>
                            <input type="file" name='storename'className="storename actionz" placeholder='Enter name of Store' multiple/>
                            <br/>
                            <br/>
                            <b className="storetext">Product Description:</b> 
                            <br/>
                            <textarea name="description" className="storedescription" cols="34" rows="10" placeholder='Enter the description of the product '></textarea>
                            <button className="actionz createit">Add</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        )
    }
}
