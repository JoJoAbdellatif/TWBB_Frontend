import useFetch from "../../useFetch";
import { Link } from 'react-router-dom';
import CartList from "./CartList";
const CartURL = 'http://localhost:8000/api/carts/'
const Cart = () => {


    const { data: products, isPending, error } = useFetch(CartURL + localStorage.getItem("Cart"))


    return (
        <div className="product-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {products && <CartList products={products} />}
        </div>
    );
}

export default Cart;