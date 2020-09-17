import React, { Component } from 'react';
import './styles/blogpreview.css';
import './styles/mediablogprev.css';

export default class BlogPreview extends Component {
    render() {
        return (
            <div>
                <div className="prodfunctionality prodpreview">
                    <div className="blogtitle review">
                        <h2 className="blogtitle">The Next Generation of Footballers</h2>
                        <p className="blogcategory"><b>Category: Football</b></p>
                    </div>

                    <div className="review">
                        <p className="blogpostt">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
                            voluptatem expedita in voluptatum unde dolores animi, delectus 
                            voluptas quas maiores labore id explicabo suscipit quam velit.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor 
                            rerum eum fugit ut sed adipisci eius expedita magnam repellat iste?
                            Suscipit, asperiores? Obcaecati saepe nostrum fugit, veritatis ipsa
                            corporis sint laudantium dolorum sequi eos iure, illo asperiores
                            quae est nisi! Ut dignissimos, laborum, velit exercitationem eos
                            ab qui, totam quis earum excepturi ipsa vel at cum tempora quae
                            libero explicabo doloremque! Error natus temporibus alias officiis
                            eius culpa sequi aperiam asperiores iusto voluptate. Veritatis quod
                            ab sequi delectus asperiores eveniet?
                        </p>
                    </div>

                </div>
            </div>
        )
    }
}
