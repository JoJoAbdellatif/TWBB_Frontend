
const CartList = (props) => {
    const products = props.products
    return (
        <div className="product-list">
            {products.map((product) => (

                <div className="product-preview-cart" key={product.id}>
                        <img src={product.ProductImage} className='prodImage' />
                        <h1 className='price-cart'>{product.Productprice}.00 EGP</h1>
                        <h2 className='prodName-cart'>{product.ProductName}</h2>
                        <h2 className='prodQuan-cart'>{product.Quantity}</h2>

                </div>
            ))}
        </div>
    );
}

export default CartList;