import React, { Component } from 'react';
import Previmage from './Previmage';
import Prevprice from './Prevprice';
import MakeReview from './MakeReview';
import ProdDescription from './ProdDescription';
import Reviews from './Reviews';
import './styles/prodprev.css';
import './styles/mediaprodprev.css';

export default class ProdPreview extends Component {
    render() {
        return (
            <div>
                <div className="prodfunctionality prodpreview">

                    <div className="prevtop">
                        <Previmage />
                        <Prevprice />
                    </div>

                    <div className="prodreview hide">
                        <MakeReview />
                    </div>

                    <div className="prodDescriptio">
                        <ProdDescription />
                    </div>

                    <div className="review">
                        <h2>Reviews</h2>
                        <Reviews />
                        <Reviews />
                        <Reviews />
                    </div>

                </div>
            </div>
        )
    }
}
