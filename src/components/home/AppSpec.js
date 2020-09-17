import React, { Component } from 'react';
import "./styles/AppSpec.css";
import "./styles/mediaAppSpec.css";
import EachSpec from "./EachSpec";

export default class AppSpec extends Component {
    render() {
        return (
            <div className='Allspec'>
                <div className="specs">
                    <EachSpec 
                        img={"./img/icon.svg"}
                        name={'Bargain Price'}
                        texts={'Lorem ipsum dolor adicing elit cambos. asper illum equuntur molestro itaque adexcepturi porro tempora ratione rem.'}
                    />
                    
                    <EachSpec 
                        img={"./img/icon.svg"}
                        name={'Bargain Price'}
                        texts={'Lorem ipsum dolor adicing elit cambos. asper illum equuntur molestro itaque adexcepturi porro tempora ratione rem.'}
                    />
                    
                    <EachSpec 
                        img={"./img/icon.svg"}
                        name={'Bargain Price'}
                        texts={'Lorem ipsum dolor adicing elit cambos. asper illum equuntur molestro itaque adexcepturi porro tempora ratione rem.'}
                    />
                </div>
            </div>
        )
    }
}
