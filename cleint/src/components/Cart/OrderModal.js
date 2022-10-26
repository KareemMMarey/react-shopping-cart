import React from 'react'
import Modal from 'react-modal';
 function OrderModal(props) {
    const {order,closeModal,cartItems} =props;
  return (
    <>
    {order && <Modal isOpen={order} onRequestClose={closeModal}>
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
                <td> {cartItems.reduce((acc, p) => {
            return acc + p.price
        }, 0)} </td>
            </tr>
            <tr>
                <td> Selected Items:</td>
                <td>
                    {
                    cartItems.map(item => 
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
</Modal>}
    </>
  )
}
export default OrderModal;
