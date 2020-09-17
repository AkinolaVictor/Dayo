import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './styles/productfunction.css';
import './styles/mediaProdFunc.css';

export default class Prodfunctions extends Component {
    render() {
        return (
            <div>
                <div className="prodfunctionality">
                    <div className="functions">

                        <div className="bystore funcdesign">
                            
                            <form action="store">
                                Store: &nbsp;
                                <select name="allstores">
                                    <option value="All Stores">All Stores</option>
                                    <option value="Maxi Stores">Maxi Stores</option>
                                    <option value="Generic">Generic</option>
                                    <option value="aEquevan">Equevan</option>
                                    <option value="Unique">Unique</option>
                                    <option value="Mathew stores">Mathew stores</option>
                                </select>
                            </form>
                        </div>
                        
                        <div className="bycategory funcdesign">
                            <form action="store">
                                Category: &nbsp;
                                <select name="allcategories">
                                    <option value="Men's Wear">Men's Wear</option>
                                    <option value="Women's Wear">Women's Wear</option>
                                    <option value="Phones And Tablets">Phones And Tablets</option>
                                    <option value="Food Stuffs">Food Stuffs</option>
                                    <option value="Electronics">Electronics</option>
                                </select>
                            </form>
                        </div>
                        
                        <div className="bysearch funcdesign">
                            <form action="store">
                                Search: &nbsp;
                                <input type="text" className='functext'/>
                            </form>
                        </div>

                        <Link className='cart' to='/product/wishlist'><button className="cart">Wishlist</button></Link>
                        <Link className='cart' to='/product/cart'><button className="cart">Cart</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}
