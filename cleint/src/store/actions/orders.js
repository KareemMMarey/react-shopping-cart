import { CREATE_ORDER,CLEAR_CART,CLEAR_ORDER,FETCH_ORDERS} from "./type"


export const createOrder = (order)=>{
    debugger;
    console.log(JSON.stringify(order));
    return (dispatch)=>{
        fetch('/api/orders',
                            {
                                method:"POST",
                                headers:
                                        {
                                        "Content-Type":"application/json"
                                        },
                                body:JSON.stringify(order)
                            })
                            .then(res=>res.json())
                            .then(data=>{
                                
                                dispatch({
                                    type:CREATE_ORDER,
                                    data:{order:data}
                                })})

        // Clear cart
        localStorage.clear('cartItems')
        // Dispatch to change state 
        dispatch({
            type:CLEAR_CART
        })

    }
}

export const clearOrder =()=>{
    return (dispatch)=>{
        dispatch({type:CLEAR_ORDER})
    }
}

export const fetchOrders =()=>{
    console.log('in fetch')
    return (dispatch)=>{
        fetch('/api/orders').then(res=>res.json()).then(data=>{
            console.log(data);
            dispatch({
                type:FETCH_ORDERS,
                data:{orders:data}
            })
        })
    }

    
}