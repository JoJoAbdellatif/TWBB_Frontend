import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import addToCart from '../../images/add_FILL0_wght400_GRAD0_opsz48.png'
import axios from 'axios';
const addProductURL = 'https://twbb-users.vercel.app/api/carts/addProduct?cartID='
const UrlGuestCart = "https://twbb-users.vercel.app/api/carts/createCart"

const ProductURL = 'https://twbb-inventory.vercel.app/api/product/details&price/'
function addProduct(id,e) {
    if(localStorage.getItem('Cart') === "null"){
        axios.post(UrlGuestCart)
        .then(function (response) {
          localStorage.setItem('Cart' , response.data)
          console.log(response.data);
          axios.patch(addProductURL + localStorage.getItem('Cart') + "&productID=" + id)
          .then(function (response) {
              console.log('hi1');
          })
          .catch(function (error) {
          console.log(error);
          })
        })
        .catch(function (error) {
          console.log(error);
        })

        
    }
    else{
        axios.patch(addProductURL + localStorage.getItem('Cart') + "&productID=" + id)
          .then(function (response) {
              console.log('hi2');
          })
          .catch(function (error) {
          console.log(error);
          })
    }
    
}
const ProductDetails = () => {

    const { id } = useParams();
    const { data: product, error, isPending } = useFetch(ProductURL + id)

    return (
        <div className="product-details">
            {isPending && <div class="d-flex justify-content-center">
<div class="spinner-border spinner-border-lg " role="status">
  <span class="sr-only">Loading...</span>
</div></div>}
            {error && <div>{error}</div>}
            {product && (
                <div className="custom-div4">
                    <img src={product.Image} className='prodImage-2' />

                    <h1 className="custom-h1">Name:{product.Name}</h1>
                    <h2 className="custom-h2-2">Category:{product.Category}</h2>
                    <h2 className="custom-h2-2">Price:{parseInt(product.Price)/100}.00 EGP</h2>
                    <h2 className="custom-h2-2">Description:{product.Description}</h2>
                    <h2 className="custom-h2-2">Weight:{product.Weight}</h2>
                    <h2 className="custom-h2-2">Quantity Avaliable:{product.QuantityAvaliable}</h2>

                </div>
            )} 
            
        </div>
    );
}

export default ProductDetails;

/*

button to add product to cart removed as out of stock is not checked
when added please add the following line back in


                    <div href="/addproduct"><button onClick={(e) => addProduct(product._id, e)} className='btn btn-lg btn-block'>Buy Now</button></div>

*/