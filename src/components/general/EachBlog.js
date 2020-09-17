import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './styles/eachblog.css';
import './styles/mediaEachblog.css';

export default class EachBlog extends Component {
    render() {
        return (
            <div>
                <div className="eachblog">
                    <div className="blogbigscreen">
                        <div className="blogpics">
                            <img src={this.props.img} alt="" className="blogimg"/>
                        </div>
                        <div className="flash">
                            <h3 className='newshead'>{this.props.head}</h3>
                            <p className="releasedate">{this.props.date}</p>
                            <p className="highlight">{this.props.highlight}</p>
                            <Link to='/blogs/blogpreview'><button className="func rdmore">Read more</button></Link>
                        </div>
                    </div>

                    <div className="blogsmallscreen">
                            <div className="blogpics">
                                <img src={this.props.img} alt="" className="blogimg"/>
                            </div>
                            <div className="flash">
                                <h3 className='newshead'>{this.props.head}</h3>
                                <p className="releasedate">{this.props.date}</p>
                                <p className="highlight">{this.props.highlight}</p>
                                <Link to='/blogs/blogpreview'><button className="func rdmore">Read more</button></Link>
                            </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
