import React from 'react'

import Product from "../components/Products/Product";
import Filter from "../components/Filter/Filter";
import Cart from "../components/Cart/Cart";


export default function Home() {
  return (
    <><div className="wrapper">
    <Product />
    <Filter 
     />
    
  </div>
  <Cart/></>
  )
}
