import { useState } from "react"
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
    // const [isPending,setIsPending] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { fName, lName, email,password,phone,city,district,streetName,buildingNo,floor,apartmentNo};
        //setIsPending(true);
        console.log(user);
    
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
                }
      })
      .then(function (response) {
        //  setIsPending(false);
        console.log(response._id);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    
    return (
        <div className="register">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input type="text" required value={fName} onChange={(e) => setFName(e.target.value)} /><br /><br />

                <label>Last Name:</label>
                <input type="text" required value={lName} onChange={(e) => setLName(e.target.value)} /><br /><br></br>

                <label>Email:</label>
                <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br></br>

                <label>Password:</label>
                <input type="text" required value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br></br>

                <label>Phone Number:</label>
                <input type="text" required value={phone} onChange={(e) => setPhone(e.target.value)} /><br /><br></br>

                <label>Address:</label><br />
                <label for="city">City:</label>
                <input type="text" required value={city} onChange={(e) => setCity(e.target.value)} /><br /><br></br>

                <label>District:</label>
                <input type="text" required value={district} onChange={(e) => setDistrict(e.target.value)} /><br /><br></br>

                <label>Street Name:</label>
                <input type="text" required value={streetName} onChange={(e) => setStreetName(e.target.value)} /><br /><br></br>

                <label >Buliding Number:</label>
                <input type="text" value={buildingNo} onChange={(e) => setBuildingNo(e.target.value)} /><br /><br></br>

                <label>Floor:</label>
                <input type="text" value={floor} onChange={(e) => setFloor(e.target.value)} /><br /><br></br>

                <label >Apartment Number:</label>
                <input type="text" value={apartmentNo} onChange={(e) => setApartmentNo(e.target.value)} /><br /><br></br>

                {<button>Submit</button>}
                {/* {<button disabled>Adding User...</button> && isPending} */}
            </form>
        </div>
    );
}

export default Register;