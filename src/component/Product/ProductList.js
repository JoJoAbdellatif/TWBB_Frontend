import addToCart from '../../images/add_FILL0_wght400_GRAD0_opsz48.png'
import { Link } from 'react-router-dom';
import axios from 'axios';
const addProductURL = 'https://twbb-users.vercel.app/api/carts/addProduct?cartID='
const UrlGuestCart = "https://twbb-users.vercel.app/api/carts/createCart"

const ProductList = (props) => {
    const products = props.products

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
    function outOfStock(product){
        let currentProduct
        if(product.productReference[0].productQuantity === '0'){

            currentProduct=<div className="product-preview-outofstock" key={product.id}>
                
            <Link to ={`/product/${product._id}`}>

                <img src={product.productImage} className='prodImage' /><br></br><br></br>
                <h1 className='priceNA'>{parseInt(product.productReference[0].productPrice)/100}.00 EGP</h1>
                <h2 className='prodNameNA'>{product.productName}</h2><br></br><br></br>
                <div className='position-relative'>
                        <h3 className='prodWeightNA position-absolute bottom-0 start-0'>OutOfStock</h3>
                        </div>                
            </Link>
        </div>
           
        }else{

            currentProduct=
            <div className="product-preview" key={product.id}>
                    <Link to ={`/product/${product._id}`}>
                        <img src={product.productImage} className='prodImage' />
                    </Link>

                    <div className='buttonBox' href="/addproduct"><button onClick={(e) => addProduct(product._id, e)} className='buttonAdd'><img className='buttonImage' src={addToCart}></img></button></div>

                    <Link to ={`/product/${product._id}`}>
                      
                        <h1 className='price'>{parseInt(product.productReference[0].productPrice)/100}.00 EGP</h1>
                        <h2 className='prodName'>{product.productName}</h2><br></br><br></br>
                    <div className='position-relative'>
                        <h3 className='prodWeight position-absolute bottom-0 start-0'>Weight:{product.productWeight}</h3>
                        </div>
                    </Link>
                    
                </div>
        }
        return currentProduct
    }

    return (
        <div className="product-list">
            {products.map((product) => (
                outOfStock(product)
                
            ))}
        </div>
    );
}

export default ProductList;