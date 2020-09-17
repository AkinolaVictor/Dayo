import React, { Component } from 'react';
import './styles/someProd.css';
import './styles/medialSomeProd.css';
import EachProd from '../general/EachProd';

export default class SomeProducts extends Component {
    render() {
        return (
            <div>
                <div className="content">
                    <div className="bar">
                        <h4 className='lineHead'>{this.props.name}</h4>
                        <hr className="line"/>
                    </div>
                    <div className="homeproducts">
                        <EachProd 
                            image={"./img/shirt.jpg"}
                            name={"Full Sleeve Shirt"}    
                            price={"$6.57"} 
                            class1={'hide'}   
                            price2={"$7.78"}
                        />
                        
                        <EachProd 
                            image={"./img/shirt.jpg"}
                            name={"Full Sleeve Shirt"}    
                            price={"$6.57"} 
                            class1={'hide'}   
                            price2={"$7.78"}
                        />
                        
                        <EachProd 
                            image={"./img/shirt.jpg"}
                            name={"Full Sleeve Shirt"}    
                            price={"$6.57"} 
                            class1={'hide'}   
                            price2={"$7.78"}
                        />
                        
                        <EachProd 
                            image={"./img/shirt.jpg"}
                            name={"Full Sleeve Shirt"}    
                            price={"$6.57"} 
                            class1={'hide'}   
                            price2={"$7.78"}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
