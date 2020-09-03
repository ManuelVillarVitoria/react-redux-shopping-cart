import React from 'react';
import sweater from '../assets/img/sweater.jpg';
import wool_sweater from '../assets/img/wool_sweater.jpg';
import t_shirt from '../assets/img/t_shirt.jpg';
import shirt from '../assets/img/shirt.jpg';

import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';


const Home = (props) => {
    console.log(props);
    

    return (
        <>
            <div className="container">
                <div className="box-image">
                    <img src={sweater} alt="sweater"/>
                    <h3>Striped Sweater</h3>
                    <h3>$35,00</h3>
                    <a onClick={props.addBasket} className="addToCart cart1" href="#">Add to Cart</a>
                </div>
                <div className="box-image">
                    <img src={wool_sweater} alt="wool sweater"/>
                    <h3>High Neck Wool Sweater</h3>
                    <h3>$42,00</h3>
                    <a onClick={props.addBasket} className="addToCart cart2" href="#">Add to Cart</a>
                </div>
                <div className="box-image">
                    <img src={t_shirt} alt="t-shirt"/>
                    <h3>White-Red T-shirt</h3>
                    <h3>$15,00</h3>
                    <a onClick={props.addBasket} className="addToCart cart3" href="#">Add to Cart</a>
                </div>
                <div className="box-image">
                    <img src={shirt} alt="shirt"/>
                    <h3>Salmon Shirt</h3>
                    <h3>$29,00</h3>
                    <a onClick={props.addBasket} className="addToCart cart4" href="#">Add to Cart</a>
                </div>
            </div>
           
        </>
    )
}

export default connect(null,{ addBasket })(Home);
