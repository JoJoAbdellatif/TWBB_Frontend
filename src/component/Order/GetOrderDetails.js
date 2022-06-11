import { useState } from "react"
import Map from '../User/Map'
const axios = require('axios')
const CreateOrderURl = 'http://localhost:2000/api/orders/createOrder?cartID='

const GetOrderDetails = () => {

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [streetName, setStreetName] = useState('');
  const [buildingNo, setBuildingNo] = useState('');
  const [floor, setFloor] = useState('');
  const [apartmentNo, setApartmentNo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      email,
      phone,
      city,
      district,
      streetName,
      buildingNo,
      floor,
      apartmentNo,
    };
    const cartId= localStorage.getItem('Cart')
    const lat = localStorage.getItem('lat');
    const lng = localStorage.getItem('lng');
    axios.patch(CreateOrderURl + cartId, {
      Address:
      {
        City: order.city,
        District: order.district,
        StreetName: order.streetName,
        BuildingNo: order.buildingNo,
        Floor: order.floor,
        ApartmentNo: order.apartmentNo
      },
      Email: order.email,
      PhoneNumber: order.phone,
      AddressLink:{
        Latitude:lat,
        Longitiude:lng,
    },

    })
      .then(function (response) {
        localStorage.setItem('Email',email)
        console.log(response.data.url);
        window.location.assign(response.data.url)
        
      })
      .catch(function (error) {
        console.log(error);
      })
    console.log(order);
  }
  
  return (
  <div>     
    <h1 className="custom-h1-3">Please Fill All Fields:</h1>
    <div className="custom-div6">
      <form onSubmit={handleSubmit}>
        <h2 className="custom-h2">Personal Information:</h2>
        <input className ="custom-input " placeholder="Email" type="text" required value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br></br>

        <input className ="custom-input "placeholder="Phone Number" type="text" required value={phone} onChange={(e) => setPhone(e.target.value)} /><br /><br></br>
        <h2 className="custom-h2">Address:</h2>

        <input className ="custom-input "placeholder="City" type="text" required value={city} onChange={(e) => setCity(e.target.value)} /><br /><br></br>

        <input className ="custom-input "placeholder="District" type="text" required value={district} onChange={(e) => setDistrict(e.target.value)} /><br /><br></br>

        <input className ="custom-input "placeholder="Street Name" type="text" required value={streetName} onChange={(e) => setStreetName(e.target.value)} /><br /><br></br>

        <input className ="custom-input "placeholder="Buliding Number" type="text" value={buildingNo} onChange={(e) => setBuildingNo(e.target.value)} /><br /><br></br>

        <input className ="custom-input "placeholder="Floor" type="number" value={floor} onChange={(e) => setFloor(e.target.value)} /><br /><br></br>

        <input className ="custom-input "placeholder="Apartment Number" type="number" value={apartmentNo} onChange={(e) => setApartmentNo(e.target.value)} /><br /><br></br>
        <Map/>
         {<button className="btn btn-lg btn-block">Submit</button>}
      </form>
    </div>
  </div>

  );
}

export default GetOrderDetails;