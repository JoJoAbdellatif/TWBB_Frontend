import axios from 'axios';
import { Link } from 'react-router-dom';
const userProfile = 'http://localhost:8000/api/users/profile/'
const CreateOrderURl = 'http://localhost:2000/api/orders/createOrder?cartID='


const GetOrderDetails2 = () => {
    
    function wouldYouLike(e,flag){
        if(!flag){
            return window.location.assign('http://localhost:3000/orderInfo1')
        }
        else{
            axios.get(userProfile+localStorage.getItem('User'))
            .then(function (response) {
                console.log(response);
                const cartId = localStorage.getItem('Cart')
                axios.patch(CreateOrderURl + cartId, {
                    Address:
                    {
                      City: response.data.Address[0].City,
                      District: response.data.Address[0].District,
                      StreetName: response.data.Address[0].StreetName,
                      BuildingNo: response.data.Address[0].BuildingNo,
                      Floor: response.data.Address[0].Floor,
                      ApartmentNo: response.data.Address[0].ApartmentNo
                    },
                    AddressLink:{
                      Latitude:response.data.AddressLink.Latitude,
                      Longitiude:response.data.AddressLink.Longitiude ,      
                    },
                    PhoneNumber: response.data.Phone_Number,
                    Email: response.data.Email,
                  })
                    .then(function (response) {
                      console.log(response.data.url);
                      window.location.assign(response.data.url)
                      
                    })
                    .catch(function (error) {
                      console.log(error);
                    })
              })
              .catch(function (error) {
                console.log(error);
              })
        }
    }
    
    return ( 
        <div>
            <h2>Would you like to use your credintials?</h2>
            <button className='btn btn-lg' onClick={(e)=>{wouldYouLike(e,true)}}>Yes</button><button className='btn btn-lg' onClick={(e)=>{wouldYouLike(e,false)}}>No</button>
        </div>
     );
}
 
export default GetOrderDetails2;