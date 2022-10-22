import { FEILTER_SIZE, FEILTER_SORT, FETCH_PRODUCTS } from "./type"

export const fetchProducts = ()=>{

    return (dispatch)=>{
        fetch('/api/products').then(res=>res.json()).then(data=>{
            dispatch({
                type:FETCH_PRODUCTS,
                data:data
            })
        })
    }
}
export const filteredSize = (products,valueFilterTerm)=>{
    return (dispatch)=>{
        let productClone = [...products];
        let newProducts = productClone.filter(p => p.sizes.indexOf(valueFilterTerm) != -1);
        dispatch({
            type:FEILTER_SIZE,
            data:{
                size:valueFilterTerm,
                products:valueFilterTerm=='ALL'?products:newProducts
            },
        });
    }
}
export const filteredSort = (products,valueSORTTerm)=>{
    return (dispatch)=>{
        let productClone = [...products];
        let newProducts = productClone.sort(function (a, b) {
            if (valueSORTTerm == "lowest") {
              return a.price - b.price
            }
            else if (valueSORTTerm == "highest") {
              return b.price - a.price
            }
            else  {
              return a.id <b.id ? 1: -1
            }
          });
        dispatch({
            type:FEILTER_SORT,
            data:{
                sort:valueSORTTerm,
                products:newProducts
            },
        });
    }
}