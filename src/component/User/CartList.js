import 'bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/'
import '../../Home.css';

const CartList = (props) => {
    const products = props.products
    return (
        <div className="product-list" >
            {products.map((product) => (

                <div className="card custom-card" style={{'background':'#ffffff' }}key={product.id}>
                <div className="row align-items-center" style={{'background':'#ffffff' }}>
                    <div className="col align-items-start" style={{'background':'#ffffff' }}>
                         <img src={product.ProductImage} alt='Product' className='prodImage' />
                    </div>

                    <div className="col col align-items-start" style={{'background':'#ffffff' }}>
                         <h1 className='price'> {product.Productprice/100}.00 EGP</h1>   
                         <h2 className='prodName'>{product.ProductName}</h2>
                         <h2 className='prodDesc'>Weight{product.productWeight}</h2>
                    </div>

                    <div className="col col align-items-end bg-light" style={{'background':'#ffffff' }}>
                    <h2 className='prodDesc-cart'>Quantity: {product.Quantity}</h2>   

                   </div>

                </div>          
                       

                </div>
            ))}
        </div>
    );
}

export default CartList;