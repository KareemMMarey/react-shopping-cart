import { FEILTER_SIZE, FEILTER_SORT, FETCH_PRODUCTS } from "../actions/type";

export const productReducer = (state={},action)=>{
    switch(action.type){
        case FETCH_PRODUCTS:
            return {
                products:action.data,
                filterProducts:action.data
            }
            case FEILTER_SIZE:
                return {
                    ...state,
                    size:action.data.size,
                    filterProducts:action.data.products}
                case FEILTER_SORT:
                    return {...state,
                        sort:action.data.sort,
                        filterProducts:action.data.products}
            default: return state;
    }
}