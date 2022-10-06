import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import data from "./data.json"
import Product from "./components/Products/Product";
import Filter from "./components/Filter/Filter";
function App() {

  const [products, setProducts] = useState(data);
  const [sort, setSort] = useState("");
  const [size, setSize] = useState("");
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

  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Product products={products} />
          <Filter size={size} handleFilterByPrice={handleFilterByPrice} sort={sort} handleFilterBySiz={handleFilterBySiz} />
        </div>
      </main>
      <Footer />
    </div>

  );
}

export default App;
