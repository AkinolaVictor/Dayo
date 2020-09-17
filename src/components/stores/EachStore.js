import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './styles/eachstore.css';

export default class EachStore extends Component {
    render() {
        return (
            <div>
                <div className="eachofthestore">

                    <div className="namez">
                        <h3>Maxi Stores</h3>
                    </div>

                    <div className="Descriptionz">
                        <p className='descsize'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati natus, necessitatibus saepe reiciendis dolores, perspiciatis, porro accusantium voluptates aliquam veritatis molestiae ipsa in veniam recusandae consequatur sapiente mollitia harum cumque.</p>
                    </div>

                    <div className="eachActions hid">
                    <Link to='/store/mystore'><button className="actionz">My Store</button></Link>
                        <button className="actionz delbg">Delete Store</button>
                    </div>
                    
                </div>
            </div>
        )
    }
}
