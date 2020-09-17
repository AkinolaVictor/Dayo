import React, { Component } from 'react';
import './styles/eachspec.css';
import './styles/mediaEachspec.css'

export default class EachSpec extends Component {
    render() {
        return (
            <div className='eachSpec'>
                {/* <h1>we are cool</h1>
                <img src="./img/icon.svg" className='imgIcons' alt="icons"/>
                <h3 className=' box1same '>Bargain Price</h3><br />
                <p className='thetexts box1same '>
                    Lorem ipsum dolor adicing elit cambos. 
                    asper illum equuntur molestro itaque ad
                    excepturi porro tempora ratione rem.
                </p> */}


                {/* or use awesome fonts */}
                <img src={this.props.img} className='imgIcons' alt="icons"/>
                {/* <i className={this.props.className}></i> */}
                <h3 className=' box1same '>{this.props.name}</h3>
                <p className='thetexts box1same '>{this.props.texts}</p>


            </div>
        )
    }
}
