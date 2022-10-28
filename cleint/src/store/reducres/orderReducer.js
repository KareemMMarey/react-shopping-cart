import { CREATE_ORDER,CLEAR_ORDER,FETCH_ORDERS}  from "../actions/type";
export const orderReducer = (state={},action)=>{
    debugger;
    console.log(action);
    switch(action.type){
            case CREATE_ORDER:
                return {order:action.data.order}
                case FETCH_ORDERS:
                return {...state,orders:action.data.orders}
                case CLEAR_ORDER:
                    return {order:false}
            default: return state;
    }
}