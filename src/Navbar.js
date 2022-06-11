import logo from './images/rabbitLogo.png'; 
import {Link} from 'react-router-dom';
import 'bootstrap';
//import { NavBar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/'
import './Home.css';



const Navbar = () => {


    function Logout(e){
        localStorage.setItem('User',null)
        localStorage.setItem('Cart',null)
        localStorage.setItem('Email',null)
    }


    return (
        
        <nav className="nav custom-nav2">          
            <Link className='btn' to = "/"><img className='logo-img' src={logo} alt="Logo"/></Link>
            <Link className='btn' to = "/login">Login</Link>
            <Link className='btn' to = "/register">Register</Link>
            <Link className='btn' to = "/profile">Profile</Link>
            <Link className='btn' to = "/cart/:id">Cart</Link>
            <Link className="btn" to = "/search">Search</Link>
            <button className='btn' onClick={(e)=>Logout(e)}>Logout</button>

         </nav>
    

    );
}
 
export default Navbar;