import { useState } from "react";
import { Redirect } from "react-router-dom";
import MapView from './MapView'
import {Link} from "react-router-dom";
const axios = require('axios')
const deleteURL = 'http://localhost:8000/api/users/'

const Profile = () => {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [streetName, setStreetName] = useState('');
    const [buildingNo, setBuildingNo] = useState('');
    const [floor, setFloor] = useState('');
    const [apartmentNo, setApartmentNo] = useState('');
    const [long, setLong] = useState('');
    const [lat, setLat] = useState('');
    const [AddressLink, setAddressLink] = useState([]);

    let props
    

    function Delete(e){
        console.log(localStorage.getItem('User'));
        axios.delete(deleteURL + localStorage.getItem('User'))
        .then(function (response) {
            console.log(response.data);
            localStorage.setItem('User',null)
            localStorage.setItem('Cart',null)
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    function login(e,flag){
       
        if(flag){
            
            return window.location.assign('http://localhost:3000/login')
        }else{
            
            return window.location.assign('http://localhost:3000/register')
        }
    }
    function wouldYouLike(id){
        console.log(id);
        if(id==='null'){
           return(
           <div>
              <h2 className="Large">Oops  You are not registered/logged in</h2><br></br>

              <div className="col">
                <button onClick={(e)=>{login(e,false)}}  className="btn btn-lg btn-block">Register</button>
                <button  onClick={(e)=>{login(e,true)}}  className="btn btn-lg btn-block">Login</button>
                </div> <br></br>
                <Link className="btn btn-lg btn-block" to = "/orderHistory">View my Orders</Link>
           </div>)
            
        }else{
                 
            axios.get("http://localhost:8000/api/users/profile/"+localStorage.getItem('User'))
            .then(function (response){
                console.log(response);
                
                setEmail(response.data.Email)
                localStorage.setItem("Email" , email)
                setFName(response.data.First_Name)
                setLName(response.data.Last_Name) 
                setPhone(response.data.Phone_Number) 
                setCity(response.data.Address[0].City) 
                setDistrict(response.data.Address[0].District)    
                setStreetName(response.data.Address[0].StreetName) 
                setBuildingNo(response.data.Address[0].BuildingNo) 
                setFloor(response.data.Address[0].Floor) 
                setApartmentNo(response.data.Address[0].ApartmentNo) 
                setLong(response.data.AddressLink.Longitude)
                setLat(response.data.AddressLink.Latitude)
                console.log(response.data.AddressLink);
                localStorage.setItem('UserCo',response.data.AddressLink)
            }
            ).catch(function (error) {
                console.log(error);
              } 
            )
            return (
                    <div>

                    <label></label><br />
                    <h1 className="custom-h1-2">My Profile</h1> 


                        <div className="custom-div4">
                        <h1 className="custom-h1">Personal Information:</h1> 
                        <div>

                        <h2 className="custom-h2-2">First Name: {fName}</h2>
                        </div>

                        <h2 className="custom-h2-2">Last Name: {lName}</h2>
                        <h2 className="custom-h2-2">Email: {email}</h2>
                        <h2 className="custom-h2-2">Phone Number: {phone}</h2>
                       
                    </div>
                    
                    <label></label><br />


                    <div className="custom-div4">
                        <h1 className="custom-h1">Address:</h1>
                        <h2 className="custom-h2-2">City: {city}</h2>
                        <h2 className="custom-h2-2">District: {district}</h2>
                        <h2 className="custom-h2-2">StreetName: {streetName}</h2>
                        <h2 className="custom-h2-2">BuildingNo: {buildingNo}</h2>
                        <h2 className="custom-h2-2">Floor: {floor}</h2>
                        <h2 className="custom-h2-2">ApartmentNo: {apartmentNo}</h2>
                        <MapView  />
                    </div>
                    <button className="btn btn-lg  btn-block" onClick={(e)=>{Delete()}}>Delete Account</button><br></br><br></br>
                    <Link to = "/orderHistory"><button className="btn btn-lg  btn-block">View my Orders</button></Link><br></br><br></br>
                    <Link to = "/editProfile"><button className="btn btn-lg  btn-block">Edit your Profile</button></Link><br></br><br></br>
                    </div>

                    
                    )
        }
    }

    return (<div>{
        wouldYouLike(localStorage.getItem('User'))
        }

    </div>  );
}
 
export default Profile;