
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import {BrowserRouter,Routes,Route} from 'react-router-dom'

import {Provider} from 'react-redux'
import store from './store/store'
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import NavBar from "./components/Navbar/NavBar";
function App() {
  return (
   <BrowserRouter>
    <Provider store={store}>
      <div className="layout">
      <Header />
      <main>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/orders" element={<Orders/>} exact />
        </Routes>
      </main>
      <Footer />
    </div>
    </Provider>
   </BrowserRouter>

  );
}

export default App;
