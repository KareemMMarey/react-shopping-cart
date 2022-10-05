import React, {useState} from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import data from "./data.json"
import Product from "./components/Products/Product";
function App() {
  
  const [products]=useState(data)
  console.log(products);
  return (
      <div className="layout">
      <Header/>
      <main>
        <div className="wrapper">
          <Product products={products}/>
          <div className="filter-wrapper">Filter</div>
        </div>
        </main>
      <Footer/>
      </div>
      
  );
}

export default App;
