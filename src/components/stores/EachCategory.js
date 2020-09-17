import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../home/styles/someProd.css';
import '../home/styles/medialSomeProd.css';
import EachProd from '../general/EachProd';





export default class EachCategory extends Component {
    
    // constructor(){
    //     super();
    //     this.state={
    //         name:'' 
    //     }

    //     this.onChange=this.onChange.bind(this);
    // }
    
    categoryToggl(i){
        // const categoryName = document.querySelector('.categoryhead');
        const productgroup = document.querySelectorAll('.homeproducts');
        productgroup[i].classList.toggle('hide');
        console.log(i)
    }
    render() {
        return (
            <div>
                <div className="content">
                    <div className="bar">
                        <div className="categoryhead" onClick={()=>this.categoryToggl(this.props.no)}>
                            <h4 className='lineHead'>{this.props.category}</h4>
                            <Link to='/store/mystoreproduct/createproduct' className='catefunct itsbtn'>
                                <button className={`catefunct ${this.props.class1}`}>Add Product</button>
                            </Link>
                            <button className={`catefunct bgred ${this.props.class1}`}>Delete Category</button>
                        </div>
                        <hr className="line"/>
                    </div>
                    <div className="homeproducts hide">

                        <EachProd 
                            image={"/img/shirt.jpg"}
                            name={"Full Sleeve Shirt"}    
                            price={"$6.57"}    
                            price2={"$7.78"}
                        />
                        
                        <EachProd 
                            image={"/img/shirt.jpg"}
                            name={"Full Sleeve Shirt"}    
                            price={"$6.57"}    
                            price2={"$7.78"}
                        />
                        
                        <EachProd 
                            image={"/img/shirt.jpg"}
                            name={"Full Sleeve Shirt"}    
                            price={"$6.57"}    
                            price2={"$7.78"}
                        />
                        
                        <EachProd 
                            image={"/img/shirt.jpg"}
                            name={"Full Sleeve Shirt"}    
                            price={"$6.57"}    
                            price2={"$7.78"}
                        />
                 
                    </div>
                </div>
            </div>
        )
    }
}
