const axios = require('axios')
const cancelOrderURL = 'https://twbb-orders.vercel.app/api/orders/cancelOrder/'
const cancelShippingURL = 'https://twbb-shipment.vercel.app/api/shipping/updateStatus/'

const OrderHistoryList = (props) => {
    const orders = props.orders
    console.log(orders);

    function CanelOrder(e,id){
        axios.patch(cancelOrderURL+id)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        })
        axios.patch(cancelShippingURL+id,{
            Status:'Cancaled'
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        })
    }

    return (
        <div className="order-history-list"><br></br>
            {orders.map((order) => (
                <div className="order-preiview">
                    <div className="custom-div3">
                    <h2 className="custom-h2-2">Your order id is:{order.OrderId}</h2>
                    
                    {order.Items.map((item) => (
                        <div className="item-preview-in-order">
                            <h3 className="custom-h3">* Item: {item.ProductName}</h3>
                            <h3 className="custom-h3">* Quantity: {item.Quantity}</h3>
                            <h3 className="custom-h3">* Price: {parseInt(item.Productprice)/100}</h3>
                        </div>
                    ))}
                    
                    <h3 className="custom-h3">* Order Status: {order.Order_Status}</h3>
                    <h3 className="custom-h3">* Shipment Status: {order.Shipment_Status}</h3>
                    <h2 className="custom-h2-2">Total: {parseInt(order.Total)/100}</h2>
                    <button className="btn btn-lg  btn-block" onClick={(e)=>{CanelOrder(e,order.OrderId)}}>Cancel Order</button>
                    <br />
                    <br />
                    </div><br></br>


                </div>
            ))}
        </div>
    );
}

export default OrderHistoryList;

 