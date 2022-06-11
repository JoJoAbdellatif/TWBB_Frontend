import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/'
import { useState } from "react"
const axios = require('axios')
const updateProfileURL = 'http://localhost:8000/api/users/update/'

const EditProfile = () => {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { fName,lName,password,phone};
        console.log(user);
    
    axios.patch(updateProfileURL+localStorage.getItem("User"), {
        First_Name: user.fName,
        Last_Name: user.lName,
        Password: user.password,
        Phone_Number: user.phone,
      })
      .then(function (response) {
        console.log('hi');
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    return (
        <div className="register">
            <h2 className="custom-h2">Please Fill The Fields</h2>
            <label className="">Personal Information:</label><br />


            <form className="form-control" onSubmit={handleSubmit}>
                <div className="custom-div3">
                    <input className="custom-input " type="text" placeholder="First name"  value={fName} onChange={(e) => setFName(e.target.value)} /><br /><br />

                    <input className="custom-input " type="text" placeholder="Last name"  value={lName} onChange={(e) => setLName(e.target.value)} /><br /><br></br>
                    <input className="custom-input " type="tel" placeholder="Phone Number"  value={phone} onChange={(e) => setPhone(e.target.value)} /><br /><br></br>


                    <input className ="custom-input " type="password" for="inputPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br></br>


                </div>
                

                    {<button className="btn btn-lg btn-block" >Submit</button>}

            </form>
        </div>
    );
}

export default EditProfile;