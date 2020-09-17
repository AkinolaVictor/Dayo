import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './styles/store.css';
import EachStore from './EachStore';

export default class Stores extends Component {
    render() {
        return (
            <div>
                <div className="prodfunctionality store">

                    <div className="storetop">
                        <div className="storeintro">
                            <h3 className="storelinehead">All Stores</h3>
                            <Link to='/store/createstore'><button className="addcategory">Create Store</button></Link>
                        </div>
                        <hr/>
                    </div>

                    <div className="Allstores">
                        <EachStore />
                        <EachStore />
                        <EachStore />
                        <EachStore />
                        <EachStore />
                        <EachStore />
                        <EachStore />
                        <EachStore />
                    </div>

                </div>
            </div>
        )
    }
}
                        // <fieldset>
                        //     <legend>Personal information:</legend>
                        //     <p>lorem4</p>
                        // </fieldset>
