import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {categoryToggle} from '../../actions/productsActions/categoryActions'
import '../home/styles/someProd.css';
import '../home/styles/medialSomeProd.css';
import EachProd from '../general/EachProd';

class EachCategory extends Component {

    constructor(){
        super();
        this.state={
            name:'' 
        }

        this.onChange=this.onChange.bind(this);
    }

    
    // componentDidMount() {
    //     if (this.props.auth.isAuthenticated) {
    //     this.props.history.push('/dashboard');
    //     }
    // }

    onChange(e){
        this.setState({[e.target.name]: e.target.value })
    }

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
                            {/* <button className={`catefunct ${this.props.class1}`}>Add Product</button>
                            <button className={`catefunct bgred ${this.props.class1}`}>Delete Category</button> */}
                        </div>
                        <hr className="line"/>
                    </div>
                    <div className="homeproducts hide">

                        <EachProd 
                            image={"./img/shirt.jpg"}
                            name={"Full Sleeve Shirt"}    
                            price={"$6.57"}    
                            price2={"$7.78"}
                            class1={'hide'}
                        />
                        
                        <EachProd 
                            image={"./img/shirt.jpg"}
                            name={"Full Sleeve Shirt"}    
                            price={"$6.57"}    
                            price2={"$7.78"}
                            class1={'hide'}
                        />
                        
                        <EachProd 
                            image={"./img/shirt.jpg"}
                            name={"Full Sleeve Shirt"}    
                            price={"$6.57"}    
                            price2={"$7.78"}
                            class1={'hide'}
                        />
                        
                        <EachProd 
                            image={"./img/shirt.jpg"}
                            name={"Full Sleeve Shirt"}    
                            price={"$6.57"}    
                            price2={"$7.78"}
                            class1={'hide'}
                        />
                        

                    </div>
                </div>
            </div>
        )
    }
}



const mapStateToProps = (state) => ({
    auth: state.auth
})
export default connect(mapStateToProps, {categoryToggle})(EachCategory);