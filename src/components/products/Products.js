import React, { Component } from 'react';
import Prodfunctions from './Prodfunctions';
import StoreProducts from './StoreProducts';
import './styles/product.css';

export default class Products extends Component {
    render() {
        return (
            <div>
                <div className="product_container">
                    <div className="control">
                        <Prodfunctions />
                    </div>
                </div>
                <div className="productlayout">
                    <StoreProducts
                        storename={'All the Stores'}
                    />
                </div>
            </div>
        )
    }
}
