import addToCart from '../../images/add_FILL0_wght400_GRAD0_opsz48.png'
import { Link } from 'react-router-dom';
import axios from 'axios';
const addProductURL = 'http://localhost:8000/api/carts/addProduct?cartID='
const UrlGuestCart = "http://localhost:8000/api/carts/createCart"




const SearchList = (props) => {
    
    
    const products = props.products
    console.log(products);
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
        if(product.ProductQuantity === '0'){
            currentProduct=<div className="product-preview-outofstock" key={product.ProductID}>
            <Link to ={`/product/${product.ProductID}`}>
                <img src={product.ProductImage} className='prodImage' />
                <h1 className='price'>{product.Productprice}.00 EGP</h1>
                <h2 className='prodName'>{product.productName}</h2>
                <h3 className='prodWeight'>Weight:{product.productWeight}</h3>
                
            </Link>
            <h3>out of stock</h3>
        </div>
           
        }else{
            currentProduct=
            <div className="product-preview" key={product.ProductID}>
                   <div className="product-preview" key={product.ProductID}>
                    <Link to ={`/product/${product.ProductID}`}> 
                        <img src={product.ProductImage} className='prodImage' />
                    </Link>

                    <div className='buttonBox' href="/addproduct"><button onClick={(e) => addProduct(product.ProductID, e)} className='buttonAdd'><img className='buttonImage' src={addToCart}></img></button></div>

                    <Link to ={`/product/${product.ProductID}`}> 
                      
                        <h1 className='price'>{product.Productprice/100}.00 EGP</h1>
                        <h2 className='prodName'>{product.productName}</h2><br></br><br></br>
                    <div className='position-relative'>
                        <h3 className='prodWeight position-absolute bottom-0 start-0'>Weight:{product.ProductWeight}</h3>
                        </div>
                    </Link>
                    
                </div>
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

export default SearchList;