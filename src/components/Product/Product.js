import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    // console.log(props.product)
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                {/* <img src={props.product.img} alt=""/> */}
                <img src={img} alt="" />
            </div>

            <div>
                {/* <h4>{props.product.name}</h4> */}
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <br />
                <p>${price}</p>
                <br />
                <p><small>Only {stock} left in stock - order soon</small></p>
                <button className="order-button" onClick={() => props.handleProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>

    );
};

export default Product;