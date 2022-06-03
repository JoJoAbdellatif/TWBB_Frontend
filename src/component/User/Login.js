import { useState } from "react"
const axios = require('axios')

const LoginURL = 'http://localhost:8000/api/users/login'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { email,password};
        //setIsPending(true);
    
    axios.post(LoginURL,{
        Email: user.email,
        Password: user.password
    })
    .then(function (response) {
       localStorage.setItem("User" , response.data._id)
       localStorage.setItem("Cart" , response.data.Cart_ID._id)
       console.log(response.data._id);
       console.log(response.data.Cart_ID._id);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br></br>

                <label>Password:</label>
                <input type="text" required value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br></br>

                {<button>Submit</button>}
            </form>
        </div>
    );
}

export default Login;