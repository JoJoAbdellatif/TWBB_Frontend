import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/'
import '../../Home.css';
import { useState } from "react"
import Map from './Map'

const axios = require('axios')

const RegisterURL = 'http://localhost:8000/api/users/register'

const Register = () => {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [streetName, setStreetName] = useState('');
    const [buildingNo, setBuildingNo] = useState('');
    const [floor, setFloor] = useState('');
    const [apartmentNo, setApartmentNo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { fName, lName, email,password,phone,city,district,streetName,buildingNo,floor,apartmentNo};
        console.log(user);
        const lat = localStorage.getItem('lat');
        const lng = localStorage.getItem('lng');
    axios.post(RegisterURL, {
        First_Name: user.fName,
        Last_Name: user.lName,
        Email: user.email,
        Password: user.password,
        Phone_Number: user.phone,
        Address: 
                {
                    City: user.city,
                    District: user.district,
                    StreetName: user.streetName,
                    BuildingNo: user.buildingNo,
                    Floor: user.floor,
                    ApartmentNo: user.apartmentNo
                },
    AddressLink:{
                    Latitude:lat
                        
                      
                    ,
                    Longitiude:lng,
                }
      })
      .then(function (response) {
        localStorage.setItem('User',response.data._id)
        localStorage.setItem('Cart',response.data.Cart_ID)
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    
    return (
        <div className="register">
            <h2 className="custom-h2">Please Fill All Fields</h2>
            <label className="">Personal Information:</label><br />


            <form className="form-control" onSubmit={handleSubmit}>
                <div className="custom-div">
                <input className ="custom-input "type="text" placeholder="First name" required value={fName} onChange={(e) => setFName(e.target.value)} /><br /><br />
                <input className ="custom-input " type="password" for="inputPassword" minLength='8' placeholder="Password"required value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br></br>
                <input className ="custom-input " type="tel" placeholder="Phone Number" required value={phone} onChange={(e) => setPhone(e.target.value)} /><br /><br></br>

                <input className ="custom-input " type="text" placeholder="Last name" required value={lName} onChange={(e) => setLName(e.target.value)} /><br /><br></br>

                
                <input className ="custom-input " type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br></br><br></br><br></br>


                </div>
                <label>Address:</label><br />
                <div className="custom-div">

                <input className ="custom-input " type="text" placeholder="City" required value={city} onChange={(e) => setCity(e.target.value)} /><br /><br></br>

                
                <input className ="custom-input " type="text" placeholder="District" required value={district} onChange={(e) => setDistrict(e.target.value)} /><br /><br></br>

                
                <input className ="custom-input " type="text" placeholder="Street Name" required value={streetName} onChange={(e) => setStreetName(e.target.value)} /><br /><br></br>

                <input className ="custom-input " type="number" placeholder="Building Number" value={buildingNo} onChange={(e) => setBuildingNo(e.target.value)} /><br /><br></br>

                <input className ="custom-input " type="number" placeholder="Floor" value={floor} onChange={(e) => setFloor(e.target.value)} /><br /><br></br>

                <input className ="custom-input " type="number" placeholder="Apartment Number" value={apartmentNo} onChange={(e) => setApartmentNo(e.target.value)} /><br /><br></br>
                </div>
                <div className="custom-div2">
                <Map/>
               
                {<button className="btn btn-lg btn-block" >Submit</button>}
                </div>
             
            </form>
        </div>
    );
}

export default Register;