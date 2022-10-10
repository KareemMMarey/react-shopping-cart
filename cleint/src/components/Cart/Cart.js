import React from 'react'
import "../../css/Cart/Cart.css"

 function Cart(props) {
    console.log(props)
  return (
    <div className="cart-wrapper">
        <div className="cart-title">{props.cartItems.length>0?<p>There is {props.cartItems.length} in the cart</p>:'Cart empty'}</div>
        <div className="cart-items">
            {props.cartItems.map(item =>
                <div className="cart-item" key={item.id}>
                <img src={item.imageUrl} alt={item.title}/>
                <div className="cart-info">
                    <div> 
                        <p>title: {item.title}</p>
                        <p>qty:{item.qty}</p>
                        <p>{item.price}$</p>
                    </div>
                    <button onClick={()=>props.removeFromCart(item)}>Remove</button>
                </div>
            </div>
            )}
        </div>
        

    </div>
  )
}
export default Cart;
