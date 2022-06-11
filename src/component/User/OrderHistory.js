import { useState } from "react";
import { useEffect, useRef } from "react"
import OrderHistoryList from "./OrderHistoryList";
const axios = require('axios')
const viewOrderHistoryURL = 'https://twbb-orders.vercel.app/api/orders/getOrderHistory?Email='


const OrderHistory = () => {
    const [orders, setOrders] = useState([])
    const [isPending, setIsPending] = useState(true)

    let isRendered = useRef(false);
    useEffect(() => {
        isRendered = true;
        axios.get(viewOrderHistoryURL+localStorage.getItem("Email"))
            .then(res => {
                if (isRendered) {
                    setOrders(Object.assign(res.data))
                }
                setIsPending(false)
                return null;

            })
            .catch(err => console.log(err));
        return () => {
            isRendered = false;
        };
    }, []);
    console.log(orders);
    return (
        <div className="order-history">
            {isPending && <div class="d-flex justify-content-center">
<div class="spinner-border spinner-border-lg " role="status">
  <span class="sr-only">Loading...</span>
</div></div>}
            {orders && <OrderHistoryList orders={orders} />}
        </div>
    );
}

export default OrderHistory;