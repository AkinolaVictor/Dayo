import React, { Component } from 'react';
import EachProd from '../general/EachProd';
import './styles/wishlist.css';

export default class WishList extends Component {
    render() {
        return (
            <div className='wish'>
                <div className="prodfunctionality wishlist">
                    <div className="wishtop">
                        <h2 className='wishheader'>Hello {"Nath Jordan"}, here is your wishlist</h2>
                        <hr className="line"/>
                    </div>
                    <div className="wishedproducts">
                        <EachProd 
                            image={"/img/shirt.jpg"}
                            name={"Full Sleeve Shirt"}    
                            price={"$6.57"}    
                            price2={"$7.78"}
                            class2={'hide'}
                        />
                        
                        <EachProd 
                            image={"/img/shirt.jpg"}
                            name={"Full Sleeve Shirt"}    
                            price={"$6.57"}    
                            price2={"$7.78"}
                            class2={'hide'}
                        />
                        
                        <EachProd 
                            image={"/img/shirt.jpg"}
                            name={"Full Sleeve Shirt"}    
                            price={"$6.57"}    
                            price2={"$7.78"}
                            class2={'hide'}
                        />
                        
                        <EachProd 
                            image={"/img/shirt.jpg"}
                            name={"Full Sleeve Shirt"}    
                            price={"$6.57"}    
                            price2={"$7.78"}
                            class2={'hide'}
                        />
                        
                        <EachProd 
                            image={"/img/shirt.jpg"}
                            name={"Full Sleeve Shirt"}    
                            price={"$6.57"}    
                            price2={"$7.78"}
                            class2={'hide'}
                        />
                        
                        <EachProd 
                            image={"/img/shirt.jpg"}
                            name={"Full Sleeve Shirt"}    
                            price={"$6.57"}    
                            price2={"$7.78"}
                            class2={'hide'}
                        />
                        
                        <EachProd 
                            image={"/img/shirt.jpg"}
                            name={"Full Sleeve Shirt"}    
                            price={"$6.57"}    
                            price2={"$7.78"}
                            class2={'hide'}
                        />
                        
                        <EachProd 
                            image={"/img/shirt.jpg"}
                            name={"Full Sleeve Shirt"}    
                            price={"$6.57"}    
                            price2={"$7.78"}
                            class2={'hide'}
                        />
                        
                        <EachProd 
                            image={"/img/shirt.jpg"}
                            name={"Full Sleeve Shirt"}    
                            price={"$6.57"}    
                            price2={"$10.78"}
                            class2={'hide'}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
