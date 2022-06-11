import useFetch from "../../useFetch";
import { Link } from 'react-router-dom';
import CartList from "./CartList";
const CartURL = 'http://localhost:8000/api/carts/';
const Cart = () => {


    const { data: products, isPending, error } = useFetch(CartURL + localStorage.getItem("Cart"))
    console.log(products);

    function isLoggedIn(id){
        if(id === "null"){
            return <Link to = "/orderInfo1"><button className="btn btn-lg  btn-block position-fixed bottom-0 start-50 translate-middle">Checkout</button></Link>
        }
        else{
            return <Link to = "/orderInfo2"><button className="btn btn-lg  btn-block position-fixed bottom-0 start-50 translate-middle">Checkout</button></Link>
        }
    }

    return (
        <div className="product-details">
            {isPending && <div class="d-flex justify-content-center">
<div class="spinner-border spinner-border-lg " role="status">
  <span class="sr-only">Loading...</span>
</div></div>}
            {error && <div>{error}</div>}
            {products && <CartList products={products} />}
            {isLoggedIn(localStorage.getItem('User'))}
            
        </div>
    );
};

export default Cart;