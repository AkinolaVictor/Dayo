import React, { Component } from 'react';
import './styles/blogcategories.css';
import './styles/mediaBlogcategories.css';

export default class BlogCategories extends Component {
    render() {
        return (
            <div>
                <div className="blogCategories blogsbigscreen" >
                    <div className="ALLcategories">
                        <li className="cartz">{'<'}</li>
                        <li className="catyname">Sports</li>
                        <li className="catyname">Fashion</li>
                        <li className="catyname">life</li>
                        <li className="catyname">Programming</li>
                        <li className="catyname">Gist</li>
                        <li className="catyname">Food</li>
                        <li className="catyname">Enterpreneur</li>
                        <li className="catyname">Books</li>
                        <li className="cartz">{'>'}</li>
                    </div>
                </div>

                
                <div className="blogCategories blogssmallscreen" >
                    <div className="ALLcategories">
                        <button className="cartz">{'<'}</button>
                        <li className="catyname">Sports</li>
                        <li className="catyname">Fashion</li>
                        <li className="catyname">life</li>
                        <li className="catyname">Programming</li>
                        {/* <li className="catyname">Gist</li>
                        <li className="catyname">Food</li>
                        <li className="catyname">Enterpreneur</li>
                        <li className="catyname">Books</li> */}
                        <button className="cartz">{'>'}</button>
                    </div>
                </div>
            </div>
        )
    }
}
