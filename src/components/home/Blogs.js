import React, { Component } from 'react';
import './styles/blogs.css';
import './styles/mediaBlogs.css'
import EachBlog from '../general/EachBlog';


export default class Blogs extends Component {
    render() {
        return (
            <div>
                <div className="blogs">  
                    <div className="bar">
                        <h4 className='lineHead'>{"Latest Blogs"}</h4>
                        <hr className="line"/>
                    </div>
                    <div className="newblogs">
                        <EachBlog 
                            img={"./img/shirt.jpg"}
                            head={'New way to bake cake'}
                            date={"14/8/20"}
                            highlight={`
                            Lorem ipsum dolor sit amet 
                            consectetur, adipisicing elit.
                            Minima eos optio obcaecati,
                            culpa eius provident ex distin`}
                        />
                        
                        <EachBlog 
                            img={"./img/shirt.jpg"}
                            head={'New way to bake cake'}
                            date={"14/8/20"}
                            highlight={`
                            Lorem ipsum dolor sit amet 
                            consectetur, adipisicing elit.
                            Minima eos optio obcaecati,
                            culpa eius provident ex distin`}
                        />

                        <EachBlog 
                            img={"./img/shirt.jpg"}
                            head={'New way to bake cake'}
                            date={"14/8/20"}
                            highlight={`
                            Lorem ipsum dolor sit amet 
                            consectetur, adipisicing elit.
                            Minima eos optio obcaecati,
                            culpa eius provident ex distin`}
                        />
                        
                        <EachBlog 
                            img={"./img/shirt.jpg"}
                            head={'New way to bake cake'}
                            date={"14/8/20"}
                            highlight={`
                            Lorem ipsum dolor sit amet 
                            consectetur, adipisicing elit.
                            Minima eos optio obcaecati,
                            culpa eius provident ex distin`}
                        />
                        
                        <EachBlog 
                            img={"./img/shirt.jpg"}
                            head={'New way to bake cake'}
                            date={"14/8/20"}
                            highlight={`
                            Lorem ipsum dolor sit amet 
                            consectetur, adipisicing elit.
                            Minima eos optio obcaecati,
                            culpa eius provident ex distin`}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
