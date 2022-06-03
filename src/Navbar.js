import './Home.css';
import logo from './images/rabbitLogo.png'; 
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} className='navbar logo'alt="Logo" />
            <div className="links">
                <Link to = "/">Home</Link>
                <Link to = "/login">login</Link>
                <Link to = "/register">register</Link>
                <Link to = "/cart/:id">cart</Link>
                <Link to = "/searchBar">search</Link>
                
            </div>
        </nav>
    );
}
 
export default Navbar;