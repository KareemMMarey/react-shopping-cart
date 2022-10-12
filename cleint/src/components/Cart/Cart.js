import React, { useState } from 'react'
import "../../css/Cart/Cart.css"
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import Bounce from 'react-reveal/Bounce'
function Cart(props) {
    const [showForm, setShowForm] = useState(false);

    const [value, setvalue] = useState("");

    const handleChange = (e) => {
        console.log(e.target.name)
        setvalue((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
    }
    const submitOrder = (e) => {
        e.preventDefault();

        const order = { name: value.name, email: value.email }
        console.log(order);
    }

    return (

        <div className="cart-wrapper">
            <div className="cart-title">{props.cartItems.length > 0 ? <p>There is {props.cartItems.length} in the cart</p> : 'Cart empty'}</div>
            <Bounce bottom>
                <>
                    <div className="cart-items">
                        {props.cartItems.map(item =>
                            <div className="cart-item" key={item.id}>
                                <img src={item.imageUrl} alt={item.title} />
                                <div className="cart-info">
                                    <div>
                                        <p>title: {item.title}</p>
                                        <p>qty:{item.qty}</p>
                                        <p>{item.price}$</p>
                                    </div>
                                    <button onClick={() => props.removeFromCart(item)}>Remove</button>
                                </div>
                            </div>
                        )}
                    </div>
                </>
            </Bounce>
            {
                props.cartItems.length != 0 &&
                (<div className="cart-footer">
                    <div className='total'>Total Price: ${props.cartItems.reduce((acc, p) => {
                        return acc + p.price
                    }, 0)}</div>
                    <button onClick={() => setShowForm(true)}>Select Product</button>
                </div>
                )
            }
            {/*Checkout Form */}
            <CheckoutForm
                showForm={showForm}
                handleChange={handleChange}
                setShowForm={setShowForm}
                submitOrder={submitOrder}
            />

        </div>


    )
}
export default Cart;
