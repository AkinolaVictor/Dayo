import React, { Component } from 'react';
import './styles/blog.css';
import BlogCategories from './BlogCategories';
import BlogBody from './BlogBody';

export default class Blog extends Component {
    render() {
        return (
            <div>
                <div className="mainblog prodfunctionality">
                    {/* <div className="bloghead">
                        <BlogCategories />
                    </div> */}

                    
                    <BlogCategories /> 
                    <BlogBody />
                </div>

                {/* <div className="allpost">
                    <BlogBody />
                </div> */}
            </div>
        )
    }
}
