import './Home.css';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './component/User/Register';
import ProductDetails from './component/Product/ProductDetails';
import Login from './component/User/Login';
import Cart from './component/User/Cart';
import GetOrderDetails from './component/Order/GetOrderDetails';
import Search from './component/User/Search';
import GetOrderDetails2 from './component/Order/GetOrderDetails2';
import Profile from './component/User/Profile';
import OrderHistory from './component/User/OrderHistory';
import EditProfile from './component/User/EditProfile';
import Footer from './Footer'

function App() {
  localStorage.setItem('Cart',null)
  localStorage.setItem('User',null)
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
            <Route exact path="/orderInfo1" element={<GetOrderDetails />}>
            </Route>
            <Route exact path="/orderInfo2" element={<GetOrderDetails2 />}>
            </Route>
            <Route exact path="/profile" element={<Profile/>}>
            </Route>
            <Route exact path="/search" element={<Search/>}>
            </Route>
            <Route exact path="/orderHistory" element={<OrderHistory/>}>
            </Route>
            <Route exact path="/editProfile" element={<EditProfile/>}>
            </Route>

          </Routes>

        </div>
        <Footer />

      </div>

    </Router>

  );
}

export default App;
