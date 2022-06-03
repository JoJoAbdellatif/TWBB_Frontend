import './Home.css';
import logo from './images/rabbitLogo.png'; 

const ads = () => {
    return (
        <nav className="adsCenter">
            <img src={logo} className='navbar logo'alt="Logo" />
        </nav>
    );
}
 
export default ads;