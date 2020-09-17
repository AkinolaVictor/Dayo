import React, { Component } from 'react';
import EachCategory from './EachCategory';
import './styles/mystore.css';
import './styles/mediaMystore.css';

export default class MyStore extends Component {

    
    addcategoryToggl(i){
        // const categoryName = document.querySelector('.categoryhead');
        const mycategory = document.querySelector('.mycateg');
        const actionz = document.querySelector('.actionz');
        mycategory.classList.toggle('hide');
        actionz.classList.toggle('hide');
        console.log(i)
    }

    categorySubmit(e){
        e.preventDefault();
        const actionz = document.querySelector('.actionz');
        const mycategory = document.querySelector('.mycateg');
        mycategory.classList.toggle('hide');
        actionz.classList.toggle('hide');
    }
    render() {
        return (
            <div>
                <div className="prodfunctionality mystore">
                    
                    <div className='stores'>
                        <div className="storeztop">
                            <h3 className="mystoteintro">Hello {'Mr. John Doe'} here are your store products. </h3>
                            <div className="addcat">
                                <button className="actionz" onClick={this.addcategoryToggl}>Add Category</button>
                                <form action="AddCategory" className='mycateg hide'>
                                    <b className="catname">Category Name:</b><br/>
                                    <input type="text" name='categ' className='catnamez'/>
                                    {/* <button className="actionz">Add</button> */}
                                    <input type="submit" className="actionz"  onClick={this.categorySubmit}/>
                                </form>
                            </div>
                        </div>
                        <hr className="line2"/>
                        <EachCategory 
                            category={"Men's Wear"}
                            no={0}
                            where={'here, pass in the array that is to be looped over'}
                        />
                        
                        <EachCategory 
                            category={"Women's Wear"} 
                            no={1}
                            where={'here, pass in the array that is to be looped over'}
                        />

                        <EachCategory 
                            category={"Phones and Tablets"}
                            no={2}
                            where={'here, pass in the array that is to be looped over'}
                        />
                        
                        <EachCategory 
                            category={"Electronics"}
                            no={3}
                            where={'here, pass in the array that is to be looped over'}
                        />
                        
                        <EachCategory 
                            category={"Food Stuffs"}
                            no={4}
                            where={'here, pass in the array that is to be looped over'}
                        />
                        
                    </div>
                
            
                </div>
            </div>
        )
    }
}
