import { useState } from "react"
const axios = require('axios')

const LoginURL = 'https://twbb-users.vercel.app/api/users/login'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { email,password};
    
    axios.post(LoginURL,{
        Email: user.email,
        Password: user.password
    })
    .then(function (response) {
       localStorage.setItem("User" , response.data._id)
       console.log(localStorage.getItem("User"));
       localStorage.setItem("Cart" , response.data.Cart_ID._id)
       console.log(localStorage.getItem("Cart"));
      })
      .catch(function (error) {
        console.log(error);
      });


    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h2 className="custom-h2">Login</h2>
                <div className="custom-div">

                <input className ="custom-input "placeholder="Email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br></br>

                <input className ="custom-input "placeholder="Password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br></br>
                </div>
                <div className="custom-div2">
              
                {<button className="btn btn-lg btn-block">Submit</button>}
               
                </div>
            </form>
        </div>
    );

}

export default Login;