import React, { Component } from 'react';
import './styles/eachcart.css';
import './styles/mediaEachCart.css';

export default class EachCart extends Component {
    render() {
        return (
            <div>
                
                <div className="carthead cartDisplay">
                    <li>{this.props.no}</li>
                    <li><img src={this.props.image} alt="productimage"/></li>
                    <li>
                        <p className="qnumb">Full Sleve Shirt</p>
                        <button className="bgreds removefromcart">Remove</button>
                    </li>
                    <li className='quantity'>
                        <button className="cart alterquantity pdr">-</button>
                        <p className="qnumb">1</p>
                        <button className="cart alterquantity pdl">+</button>
                    </li>
                    <li>{this.props.onstock}</li>
                    <li>{this.props.price}</li>
                </div>
            </div>
        )
    }
}
