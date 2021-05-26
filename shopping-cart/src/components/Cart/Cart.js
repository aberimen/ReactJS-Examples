import React from 'react';
import { CartIcon } from "../icons";
import './Cart.css';
const Cart = ({ cart }) => {

    function financial(x) {
        return Number.parseFloat(x).toFixed(2);
    }

    return (

        <>
            <div className="dropdown">

                <button className="dropbtn">
                    <CartIcon />
              Cart ({cart.length /* Toplam ürün sayısı */})
              </button>


                <div className="dropdown-content">
                    {cart.map(c =>

                        <div className="cart-item">
                            <img className="img" src={c.product.image} />
                            <div className="item-body">
                                <div className="title">{c.product.title.substring(0, 20)}...</div>
                                <div className="quantity"> Quantity : {c.quantity}</div>
                                <div className="price">${financial(c.product.price * c.quantity)}</div>
                            </div>
                        </div>

                    )}
                </div>

            </div>

        </>
    );
};

export default Cart;