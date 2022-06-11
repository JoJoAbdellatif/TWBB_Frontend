import logo from './images/rabbitLogo.png'; 
import {Link} from 'react-router-dom';
import 'bootstrap';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/'
import './Home.css';

const Footer = () => {
    return ( 
        <div>
    <div className="footer1">

        <a href = "https://www.facebook.com/rabbitmart.eg/" className="bi bi2 bi-facebook"></a>
        <a href = "https://www.instagram.com/rabbitmart.eg/"className="bi bi2 bi-instagram"></a>
        <a href = "https://twitter.com/rabbitmart_eg" className="bi bi2 bi-twitter"></a>
        <a href = "https://www.linkedin.com/company/rabbitmart/" className="bi bi2 bi-linkedin" ></a>


        </div>
    </div> );
}
 
export default Footer;      
