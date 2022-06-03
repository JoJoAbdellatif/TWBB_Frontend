import useFetch from "../../useFetch";
import { Link } from 'react-router-dom';
const CartURL = 'http://localhost:8000/api/carts/'
const Cart = () => {

    
    const { data,isPending,error } = useFetch(CartURL + localStorage.getItem("Cart"))
    if(data)
    console.log(data);
    

    return (
        <div className="product-details">
            {/* {isPending && <div>Loading...</div>} */}
            {/* {error && <div>{error}</div>} */}
             {data.map((product) => (

                <div className="product-preview" key={product.id}>
                    <Link to={`/cart/${localStorage.getItem("Cart")}`}>
                        <img src={product.ProductImage} className='prodImage' />
                        <h1 className='price'>{product.Productprice}.00 EGP</h1>
                        <h2 className='prodName'>{product.ProductName}</h2>
                        <h2 className='prodQuan'>{product.Quantity}</h2>

                    </Link>
                </div>
            ))} 
        </div>
    );
}

export default Cart;