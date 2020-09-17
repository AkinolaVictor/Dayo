import React, { Component } from 'react';
import './styles/prevprice.css'

export default class Prevprice extends Component {

    review(){
        const prodreview = document.querySelector('.prodreview');
        prodreview.classList.toggle('hide');
    }

    render() {
        return (
            <div>
                <div className="textstructure">
                    <div className="Pname">
                        <p>Product Detail</p>
                    </div>
                    
                    <div className="textcontaina">
                        <p className="mainprice">$6.36<span> only</span></p> 
                        <div className="rating">
                            <i className="stars">X X X X</i>
                        </div> 
                        <p className="dateposted">
                            <b>Date Posted: </b>
                            {"2020-5-4"}
                            {" 6:18pm"}
                        </p>

                        <p className="onstock">
                            <b>On Stock: </b>
                            {"3"}
                        </p>
                        <div className="prodoptions">
                            <button className="Poption">Add to Cart</button>
                            <br/>
                            <button className="Poption">Add to Wishlist</button>
                            <br/>
                            <button className="Poption" onClick={this.review}>Write a Review</button>
                            <br/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
