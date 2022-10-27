
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Product from "./components/Products/Product";
import Filter from "./components/Filter/Filter";
import Cart from "./components/Cart/Cart";


import {Provider} from 'react-redux'
import store from './store/store'
function App() {
  return (
    <Provider store={store}>
      <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Product />
          <Filter 
           />
          
        </div>
        <Cart/>
      </main>
      <Footer />
    </div>
    </Provider>

  );
}

export default App;
