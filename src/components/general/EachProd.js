import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './styles/eachprod.css';
import './styles/mediaEachProd.css';

export default class EachProd extends Component {
    render() {
        return (
            <div>
                <div className="prodbigscreen">
                    <div className="eachproducts">
                        <div className={`${this.props.class1}`}>
                            <button className={`cart ${this.props.class2}`}>
                                Edit
                            </button>
                            <button className="bgreds">
                                Delete
                            </button>
                        </div>
                        <Link to='/product/previews'>
                            <div className="prodImage">
                                <img src={this.props.image} alt="prod" className="prodimg"/>
                            </div>
                        </Link>

                        <Link to='/product/previews'>
                            <div className="prodDetail">
                                <h3 className='name'>{this.props.name}</h3>
                                <p className="price">{this.props.price} &nbsp; <strike>{this.props.price2}</strike></p>
                            </div>
                        </Link>

                        <div className="choices">
                            <button className="func">Buy</button>
                            <button className="func"> <span className="hide">Add to </span> Add to Cart</button>
                            <button className="func hides">Add to Wishlist</button>
                        </div>
                    </div>
                </div>

                {/* Small Screens */}

                <div className="prodsmallscreen">
                        <div className={`smll ${this.props.class1}`}>
                            <button className={`cart ${this.props.class2}`}>
                                Edit
                            </button>
                            <button className="bgreds">
                                Delete
                            </button>
                        </div>

                    <div className="eachproducts">
                        <Link to='/product/previews'>
                            <div className="prodImage">
                                <img src={this.props.image} alt="prod" className="prodimg"/>
                            </div>
                        </Link>
                        <div className="produinfo">
                            <Link to='/product/previews'>
                                <div className="prodDetail">
                                    <h3 className='name'>{this.props.name}</h3>
                                    <p className="price">{this.props.price} &nbsp; <strike>{this.props.price2}</strike></p>
                                </div>
                            </Link>

                            <div className="choices">
                                <button className="func">Buy</button>
                            <button className="func"> <span className="hide">Add to </span> Add to Cart</button>
                            <button className="func hides">Add to Wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
