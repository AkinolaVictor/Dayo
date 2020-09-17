import React, { Component } from 'react';
import './styles/carthead.css';

export default class CartHeader extends Component {
    render() {
        return (
            <div>
                <div className="carthead cartDisplay">
                    <li>S/N</li>
                    <li>Product</li>
                    <li>Description</li>
                    <li>Quantity</li>
                    <li>on Stock</li>
                    <li>Price ($)</li>
                </div>
            </div>
        )
    }
}
