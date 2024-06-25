import { useState } from "react"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import './style/login.css'

function Login() {

  const navigate = useNavigate()
  const[userState,setUserState]=useState("")
  const[passwordState,setPasswordState]=useState("")

  const goSubmit = async (event) => {
    event.preventDefault()
    const user = event.target.user.value
    const password = event.target.password.value

    const config = JSON.parse(import.meta.env.VITE_urlPost_login);
    const url = `http://${config.hostname}:${config.port}/Login`;

  
    if(user=== ""){
      alert("the space for the user is empty")
      
    }else{
      if(password === ""){
        alert("the space for the password is empty")
        
      }else{

        let dataEntrante = `{
          "user":"${user}",
          "password":"${password}"
        }`

        try {
          const LoginVerify = await axios.post(url,dataEntrante,{headers: {'content-Type': 'application/json',}})
                  let tocken = LoginVerify.data.tocken
                  localStorage.setItem("seccion",tocken)

                  navigate("/shop")
            } catch (error) {
            switch(error.response.status){
              case 401 :
              alert("this is your correct password??")  
              break;
              
              case 404 :
                alert("this isn't a user valid ??")  
                break;  
                
                default:
                alert("oops, an error occurred")  
                break;  
            }
        }
      }
    }
    
      

  }
  
  const InputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (name === 'user') {
      setUserState(value);
    } else if (name === 'password') {
      setPasswordState(value);
    }
  };

  return ( 
    <>
      <div className="display">
        <div className="filter">
        <div className="contain">
          <h1 className="login">Login</h1>
          <div className="containForm">

            <form className="form" onSubmit={goSubmit}>
              <label>User</label>
              <input
                type="text"
                className="input user"
                name="user"
                value={userState}
                onChange={InputChange} />
              <label>Password</label>
              <input
                type="password"
                className="input password"
                name="password"
                value={passwordState}
                onChange={InputChange} />
                <p className="option">¿no tienes cuenta? <p className="register">crea una</p></p>
            <button type="submit" className="bottom">Next</button>
            </form>

          </div>
        </div>
        </div>
    </div>
    </>
   );
}

export default Login;