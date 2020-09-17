import React, { Component } from 'react';
import EachCategory from './EachCategory';
import './styles/storeproducts.css'

export default class StoreProducts extends Component {
    render() {
        return (
            <div className='stores'>
                <p className="storename">Products From {this.props.storename}</p>
                <EachCategory 
                    category={"Men's Wear"}
                    no={0}
                    where={'here, pass in the array that is to be looped over'}
                />
                
                <EachCategory 
                    category={"Women's Wear"}
                    class1={"hide"}  
                    no={1}
                    where={'here, pass in the array that is to be looped over'}
                />

                <EachCategory 
                    category={"Phones and Tablets"}
                    class1={"hide"}
                    no={2}
                    where={'here, pass in the array that is to be looped over'}
                />
                
                <EachCategory 
                    category={"Electronics"}
                    class1={"hide"}
                    no={3}
                    where={'here, pass in the array that is to be looped over'}
                />
                
                <EachCategory 
                    category={"Food Stuffs"}
                    class1={"hide"}
                    no={4}
                    where={'here, pass in the array that is to be looped over'}
                />
                
            </div>
        
        )
    }
}
