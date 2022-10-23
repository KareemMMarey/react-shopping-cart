import React, { useState } from 'react'
import "../../css/Cart/Cart.css"
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import Bounce from 'react-reveal/Bounce'
import { connect } from 'react-redux';
import {removeCart} from '../../store/actions/cart'
import Modal from 'react-modal';
function Cart(props) {
    const [showForm, setShowForm] = useState(false);
    const [order,setOrder]=useState(false);
    const [value, setvalue] = useState("");

    const handleChange = (e) => {
        console.log(e.target.name)
        setvalue((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
    }
    const closeModal = () => {
        
        setOrder(false);
    }
    const submitOrder = (e) => {
        e.preventDefault();

        const order = { name: value.name, email: value.email }
        setOrder(order);
    }

    return (

        <div className="cart-wrapper">
            <div className="cart-title">{props.cartItems.length > 0 ? <p>There is {props.cartItems.length} in the cart</p> : 'Cart empty'}</div>
            {/* Modal */
            <Modal isOpen={order} onRequestClose={closeModal}>
                <div className='order-info'>
                    <span className='close-modal' onClick={closeModal}>&times;</span>
                    <p className='alert-success'> Order done successfully
                    
                    </p>
                    <table>
                        <tr>
                            <td>Name</td>
                            <td> {order.name} </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td> {order.email} </td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td> {props.cartItems.reduce((acc, p) => {
                        return acc + p.price
                    }, 0)} </td>
                        </tr>
                        <tr>
                            <td> Selected Items:</td>
                            <td>
                                {
                                props.cartItems.map(item => 
                                (
                                     <div className='cart-data'>
                                    <p>
                                        Number of Products : {
                                            item.qty
                                        }
                                    </p>
                                    <p>
                                        Product Name : {
                                            item.title
                                        }
                                    </p>
                                     </div>
                                )
                                )
                                }
                            </td>
                        </tr>
                    </table>
                </div>
            </Modal>
            }
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
                                    <button onClick={() => props.removeCart(item)}>Remove</button>
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
export default connect((state)=>{
    return{cartItems:state.cart.cartItems}
},{removeCart})(Cart) ;
