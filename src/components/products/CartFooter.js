import React, { Component } from 'react';
import './styles/cartfooter.css';

export default class CartFooter extends Component {
    render() {
        return (
            <div>
                <div className="carthead cartDisplay">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li className='total'><b>Total:</b></li>
                    <li className='equl'><b>${'25.29'}</b></li>
                </div>
                <div className="carthead cartDisplay">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li><button className="cart footbutton">Clear Cart</button></li>
                    <li><button className="cart footbutton buyr">Buy</button></li>
                </div>
            </div>
        )
    }
}
