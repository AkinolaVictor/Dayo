import React, { Component } from 'react';
import './styles/previmage.css';

export default class Previmage extends Component {
    render() {
        return (
            <div>
                <div className="imgGallery">
                    <div className="imgname">
                        <p>Full Sleev Shirt</p>
                    </div>

                    <div className="imgcontaina">
                        <div className="imgcontrol">
                            <p className='imgctrl1'>{'<'}</p>
                            <img src="/img/shirt.jpg" alt=""/>
                            <p className='imgctrl2'>{'>'}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
