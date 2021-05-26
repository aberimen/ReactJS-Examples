import React from 'react';
import { CartIcon } from "../icons";
import './Cart.css';
const Cart = ({ cart }) => {
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
                                <div className="price">10 TL </div>
                            </div>
                        </div>

                    )}
                </div>

            </div>
            {/* <Card>
                <Card.Body>
                    <Card.Title tag="h4">Cart</Card.Title>
                    <Card.Text>
                        {cart.map((cartItem) => (
                            <Card.Text key={cartItem.product.id}> */}
            {/* {<Button color="danger" onClick={() => this.props.sepettenSil(cartItem.product)}>x</Button>} */}
            {/* {cartItem.product.title} - {cartItem.quantity}
                            </Card.Text>
                        ))}
                    </Card.Text>

                    <Button>
                        Go to Cart</Button>
                </Card.Body>
            </Card> */}
        </>
    );
};

export default Cart;