import React, { Component } from 'react';
import "./styles/Home.css";
import "./styles/mediaHome.css";
import AppSpec from './AppSpec';
import SomeProducts from './SomeProducts';
import Blogs from './Blogs';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="main_screen">
                    <div className="info">
                        <h2 className='projName silence'>NIGHT Mall</h2><br/>

                        <p className='bigp '>
                            Buy Anything, Sell Anything <br/>
                            We Have What You Need<br />
                            No More No Less. <br />
                        </p>

                        <p className="smallp silence">
                            Here, Your Happiness is Our Happiness, And<br />
                            Our Prices Are Customer-Friendly.<br />
                        </p>

                        <form action="searchGoods" className='form1'>
                            <input type="text" name='search' className='search_input' placeholder='Search'/>
                            <button className='form1_submit'>Search</button>
                        </form>
                    </div>

                    <div className="img_desc silence">
                        <img src="/img/human.png" alt="home" width="100%" height="100%"/>
                    </div>

                </div>
                <div className='image-container'>
                    <img src="/img/Home_head2.svg" alt="home" width="100%" height=""/>
                </div>
                <div className="spec">
                    <AppSpec />
                </div>
                <div className="someproducts">
                    <SomeProducts 
                        name={'Featured Products'}
                    />
                    <SomeProducts 
                        name={'Special Products'}
                    />
                </div>
                <div className="blogs">
                    <Blogs />
                </div>
            </div>
                
        )
    }
}
