import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import data from "./data.json"
import Product from "./components/Products/Product";
import Filter from "./components/Filter/Filter";
import Cart from "./components/Cart/Cart";
import { useEffect } from "react";

import {Provider} from 'react-redux'
import store from './store/store'
function App() {

  const [products, setProducts] = useState(data);
  const [sort, setSort] = useState("");
  const [size, setSize] = useState("");
  const [cartItems, setCart] = useState(JSON.parse(localStorage.getItem('cartItems'))||[]);
  const handleFilterBySiz = (e) => {
    setSize(e.target.value)
    if (e.target.value == "ALL") {
      setProducts(data);
    }
    else {
      let productClone = [...data];
      console.log(productClone);
      console.log(e.target.value);
      let newProducts = productClone.filter(p => p.sizes.indexOf(e.target.value) != -1);
      setProducts(newProducts);
      console.log(newProducts)
    }

  }

  const handleFilterByPrice = (e) => {
    let sorter = e.target.value;
    setSort(sorter)
    let productClone = [...data];
    let newProducts = productClone.sort(function (a, b) {
      if (sorter == "lowest") {
        return a.price - b.price
      }
      else if (sorter == "highest") {
        return b.price - a.price
      }
      else  {
        return a.id <b.id ? 1: -1
      }
    });
    setProducts(newProducts);
  }
  const addToCart=(product)=>{
    const cartItemsClone = [...cartItems];
    let isProductExist=false;
    cartItemsClone.forEach(p=>{
      if(p.id==product.id){
        p.qty++;
        isProductExist =true;
      }
      
    });
    if(!isProductExist){
      cartItemsClone.push({...product,qty:1});
    }
    setCart(cartItemsClone);
  }
  const removeFromCart= (product)=>{
    const cartItemsClone =[...cartItems];
    setCart(cartItemsClone.filter(p=>p.id!=product.id))
  }

  // Save to local storage
 /* useEffect(()=>{
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
  },[cartItems]);*/

  return (
    <Provider store={store}>
      <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Product products={products} addToCart={addToCart} />
          <Filter 
          size={size} 
          sort={sort} 
          productNumber={products.length}
          handleFilterByPrice={handleFilterByPrice} 
          
          handleFilterBySiz={handleFilterBySiz} />
          
        </div>
        <Cart cartItems= {cartItems} removeFromCart={removeFromCart}/>
      </main>
      <Footer />
    </div>
    </Provider>

  );
}

export default App;
