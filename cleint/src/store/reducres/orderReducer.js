import { CREATE_ORDER,CLEAR_ORDER}  from "../actions/type";
export const orderReducer = (state={},action)=>{
    debugger;
    console.log(action);
    switch(action.type){
            case CREATE_ORDER:
                return {order:action.data.order}
                case CLEAR_ORDER:
                    return {order:false}
            default: return state;
    }
}