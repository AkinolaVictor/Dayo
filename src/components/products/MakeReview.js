import React, { Component } from 'react';
import './styles/makereview.css';

export default class MakeReview extends Component {

    updateReview(e){
        e.preventDefault()
        const prodreview = document.querySelector(".prodreview");
        prodreview.classList.toggle('hide');
    }

    render() {
        return (
            <div>
                <div className="makereview">
                    <div className="nameLabel">
                        <p>Make Review</p>
                    </div>
                    <br/>
                    <div className="revviewform">
                        <form action="review" className="review">
                            <b className="revname">Name:</b>
                            <br/>
                            <input type="text" placeholder='Enter your name' />
                            <br/>
                            <br/>
                            <b>Your review: </b>
                            <br/>
                            <textarea name="review" id="" cols="30" rows="7" className='revtext'></textarea>
                            <br/>
                            <button className="revsub" onClick={this.updateReview}>Add</button>
                        </form>
                    </div>

                </div>
            </div>
        )
    }
}
