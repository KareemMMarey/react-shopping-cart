import React, { useState } from 'react'
import "../../css/Cart/Cart.css"
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import Bounce from 'react-reveal/Bounce'
import { connect } from 'react-redux';
import {removeCart} from '../../store/actions/cart'
import {createOrder,clearOrder} from '../../store/actions/orders'
import OrderModal from './OrderModal';
import { words } from '../../words';

function Cart(props) {
    const [showForm, setShowForm] = useState(false);
    /*const [order,setOrder]=useState(false);*/
    const [value, setvalue] = useState("");

    const handleChange = (e) => {
        console.log( e.target.value )
        setvalue((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
    }
    
    const submitOrder = (e) => {
        e.preventDefault();

        const order = { name: value.name, email: value.email }
        console.log( order )
        var res = props.createOrder(order);
        console.log( res )
    }
    const closeModal = () => {
        
        props.clearOrder();
        setShowForm(false);
    }

    return (

        <div className="cart-wrapper">
            <div className="cart-title">{props.cartItems.length > 0 ? 
            <p>{words.cartHeader} {props.cartItems.length}</p> : 'Cart empty'}</div>
            
            <OrderModal cartItems={props.cartItems} closeModal={closeModal} order={props.order}></OrderModal>
            <Bounce bottom>
                <>
                    <div className="cart-items">
                        {props.cartItems.map(item =>
                            <div className="cart-item" key={item.id}>
                                <img src={item.imageUrl} alt={item.title} />
                                <div className="cart-info">
                                    <div>
                                        <p>{words.cartTitle}: {item.title}</p>
                                        <p>{words.cartQty}:{item.qty}</p>
                                        <p>{words.cartPrice}:{item.price}$</p>
                                    </div>
                                    <button onClick={() => props.removeCart(item)}>{words.removeBtn}</button>
                                </div>
                            </div>
                        )}
                    </div>
                </>
            </Bounce>
            {
                props.cartItems.length != 0 &&
                (<div className="cart-footer">
                    <div className='total'>{words.cartTotal}: ${props.cartItems.reduce((acc, p) => {
                        return acc + p.price
                    }, 0)}</div>
                    <button onClick={() => setShowForm(true)}>{words.selectProducts}</button>
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
    return{
        order:state.order.order,
        cartItems:state.cart.cartItems}
},{removeCart,createOrder,clearOrder})(Cart) ;
