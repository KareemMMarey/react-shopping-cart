import React from 'react'
import "../../css/CheckoutForm/CheckoutForm.css"
import Input from '../Input/Input';
import Zoom from 'react-reveal/Zoom'
 function CheckoutForm(props) {
  return (
    <>
    {props.showForm && 
         <div className='checkout-form'>
         <span className='close-icon' onClick={()=>props.setShowForm(false)} > &times;  </span>
         <Zoom left>
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
         </Zoom>
      </div>
         }
    </>
        
   
    
    
  )
}
export default CheckoutForm;
