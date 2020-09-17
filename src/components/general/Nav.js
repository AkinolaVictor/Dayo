import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./styles/nav.css";
import "./styles/mediaNav.css";

export default class Nav extends Component {

    constructor(){
        super();
        this.state={
            active: 0
        }

        this.active = this.active.bind(this);
    }

    active(e){
        let li= document.querySelectorAll('li');
        let prev=this.state.active;
        let i = e.currentTarget.dataset.id;
        this.setState({
            active:i 
        });
        li[i].classList.toggle('active');
        li[prev].classList.toggle('active');
        // console.log(li);       
    }

    hideNav(){
        let nav = document.querySelector('ul.navList');
        nav.classList.toggle('list2');
        console.log(nav);
    }

    render() {
        return (
            <div className='nav-container'>
                {/* <Link to='/'> */}
                    <div className="logo">
                        <p className='big glow'>NM</p>
                        <p className='small glow'>Night Mall</p>
                    </div>
                {/* </Link> */}

                <nav>
                    <div className='list'>
                        <i className="fas fa-list "  onClick={this.hideNav}></i>
                        <i className="far fa-times-circle hide"></i>
                    </div>

                    <ul className='navList list2'>
                        <Link to='/'><li data-id='0'className='active'  onClick={this.active}>Home</li></Link>
                        <Link to='/stores'><li data-id='1' onClick={this.active}>Stores</li></Link>
                        <Link to='/products' ><li data-id='2' onClick={this.active}>Products</li></Link>
                        <Link to='/blog'><li data-id='3' onClick={this.active}>Blog</li></Link>
                        <Link to='/login'><li data-id='4' onClick={this.active}>Login</li></Link>
                        {/* <Link to='/'><li>Cart</li></Link> */}
                    </ul>
                </nav>
            </div>
        )
    }
}
