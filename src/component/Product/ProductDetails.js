import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";

const ProductURL = 'http://localhost:5000/api/product/details/'
const ProductDetails = () => {

    const { id } = useParams();
    const { data: product, error, isPending } = useFetch(ProductURL + id)

    return (
        <div className="product-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {product && (
                <div>
                    <img src={product.productImage} className='prodImage' />
                    <h2>Name:{product.productName}</h2>
                    <h4>Category:{product.productCategory}</h4>
                    <h4>Price:{product.productPrice}.00 EGP</h4>
                    <h4>Description:{product.productDescription}</h4>
                    <h4>Weight:{product.productWeight}</h4>
                </div>
            )} 
            
        </div>
    );
}

export default ProductDetails;