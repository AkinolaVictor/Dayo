import React, { Component } from 'react';
import EachCart from './EachCart';
import './styles/cart.css';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';

export default class Cart extends Component {
    onstock=true
    render() {
        return (
            <div>
                <div className="prodfunctionality MainCart">
                    <div className="carttop ">
                        <hr className="line"/>
                        <CartHeader />
                        <hr className="line"/>
                    </div>

                    <div className="eachCart">
                        
                        <EachCart
                            no={'1'}
                            image={"/img/shirt.jpg"}
                            onstock={this.onstock && 'unknown'}
                            price={'11.43'}
                        />
                        
                        <EachCart
                            no={'2'}
                            image={"/img/shirt.jpg"}
                            onstock={this.onstock && 'unknown'}
                            price={'11.43'}
                        />
                        
                        <EachCart
                            no={'3'}
                            image={"/img/shirt.jpg"}
                            onstock={this.onstock && 'unknown'}
                            price={'11.43'}
                        />

                        
                        <EachCart
                            no={'4'}
                            image={"/img/shirt.jpg"}
                            onstock={this.onstock && 'unknown'}
                            price={'11.43'}
                        />
                    </div>
                
                    
                    <div className="carttop ">
                        <hr className="line"/>
                        <CartFooter />
                        <hr className="line"/>
                    </div>
                </div>
            </div>
        )
    }
}
