import React from 'react'
import "../../css/CheckoutForm/CheckoutForm.css"
import Input from '../Input/Input';
 function CheckoutForm(props) {
  return (
    <>
        {props.showForm && 
         <div className='checkout-form'>
         <span className='close-icon' onClick={()=>props.setShowForm(false)} > &times;  </span>
         <form onSubmit={props.submitOrder}>
             <div>
                 
                 <Input label="name" type="text" name="name" onChange={props.handleChange}/>
             </div>
             <div>
             <Input label="Email" type="email" name="email" onChange={props.handleChange}/>
             </div>
             <div>
                <button type='submit'> Checkout</button>
             </div>
         </form>
      </div>
         }
    </>
  )
}
export default CheckoutForm;
