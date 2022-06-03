import addToCart from '../../images/add_FILL0_wght400_GRAD0_opsz48.png'
import { Link } from 'react-router-dom';


const ProductList = (props) => {
    const products = props.products
    return (
        <div className="product-list">
            {products.map((product) => (

                <div className="product-preview" key={product.id}>
                    <Link to ={`/product/${product._id}`}>
                        <img src={product.productImage} className='prodImage' />
                        <h1 className='price'>{product.productReference[0].productPrice}.00 EGP</h1>
                        <h2 className='prodName'>{product.productName}</h2>
                        <h3 className='prodWeight'>{product.productWeight}</h3>
                        <div className='buttonBox' href="/addproduct"><button className='buttonAdd'><img className='add' href src={addToCart} /></button></div>

                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ProductList;