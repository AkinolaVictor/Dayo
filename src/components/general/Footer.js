import React, { Component } from 'react';
import './styles/footer.css';

export default class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <div className='image-container rotate'>
                    <img src="/img/Home_head2.svg" className='kkk' alt="home" width="100%" height=""/>
                </div>
                <p className="copyright"> Copyright &copy; {new Date().getFullYear()} Night Mall </p>
            </footer>
        )
    }
}
