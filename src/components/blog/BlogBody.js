import React, { Component } from 'react';
import EachBlog from '../general/EachBlog';
import {Link} from 'react-router-dom';
import './styles/blogbody.css';
import './styles/mediaBlogbody.css';

export default class BlogBody extends Component {
    render() {
        return (
            <div>
                        <br/>
                        <br/>
                    <div className="AllPost">
                        <div className="postnamecontent2">
                            <h3>All Post</h3>
                            <Link to='/blogs/createblog'><button className="cart MakePost">Make a Post</button></Link>
                        </div>
                        <hr/>
                    </div>
                <div className="blogcall">
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
        )
    }
}
