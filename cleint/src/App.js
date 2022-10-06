import React, {useState} from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import data from "./data.json"
import Product from "./components/Products/Product";
import Filter from "./components/Filter/Filter";
function App() {
  
  const [products]=useState(data)
  console.log(products);
  return (
      <div className="layout">
      <Header/>
      <main>
        <div className="wrapper">
          <Product products={products}/>
         <Filter/>
        </div>
        </main>
      <Footer/>
      </div>
      
  );
}

export default App;
