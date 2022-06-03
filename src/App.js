import './Home.css';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './component/User/Register';
import ProductDetails from './component/Product/ProductDetails';
import Login from './component/User/Login';
import Cart from './component/User/Cart';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}>
            </Route>
            <Route exact path="/register" element={<Register />}>
            </Route>
            <Route exact path="/product/:id" element={<ProductDetails />}>
            </Route>
            <Route exact path="/login" element={<Login />}>
            </Route>
            <Route exact path="/cart/:id" element={<Cart />}>
            </Route>
  
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
