import './Login.css';
import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";  
import axios from 'axios';
import logo from '../logo.svg';
import ReactDOM from 'react-dom';
const imgPath = process.env.PUBLIC_URL;



function Login() {


//  const Location = useHistory()

  const [ userName, setuserName] = useState('') 
  const [isLog, setIsLog] = useState(true)
  // const [ password, setPassword] = useState('')
   const [ user, setUser] = useState('')


  const HandleSignIn = async (e) => {
      
      e.preventDefault();
      console.log(userName)
      console.log("submitted");
      if (userName === "") {
          alert("Please Enter Employee ID");
          setIsLog(!isLog);
  }else{
      try {
        let res = await axios.post(
          "https://ict-del-gram-app.herokuapp.com/api/users/login",
          {
            userName,
          }
        );
         let user = res.data.user
         let token = res.data.token
         localStorage.setItem('user', JSON.stringify(user))
         localStorage.setItem('token', JSON.stringify(token))
         setUser(user);
  
        alert ("Sucessful");
        

        Location.push("/Dashboard");
  
      } catch (error) {
          //alert (error?.response?.data?.message);
          alert("Invalid Login Details");

      }
    }};


  return(

<div>
<header className="">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
        </p>
       
      </header>
  <div>
      <nav>

      </nav>
  </div>
  <div  className='log'>
<h1 className='logged1'>Administrator Login</h1>

  <form className='form'>
<input type="text" placeholder='UserName' className='txtbox' value={userName} onChange={(e) => setuserName(e.target.value)} required/><br></br>
{/* <input type="password" placeholder='PassWord' className='Username' value={password} onChange={(e) => setPassword(e.target.value)} /> */}
<br></br>
{/* <Link to="dasgboard"><input type="button" placeholder='Submit' value="Submit" className='button' onClick={HandleSignIn} /></Link> */}
<Link to="/"><input type="button" button placeholder='Submit' value="Submit" className='exit1'/></Link>_
<button type="button" placeholder='Submit' value="Submit" className='exit1' onClick={HandleSignIn}>{isLog ? <span>Log Out</span>:<span>Log In</span>}</button>
{isLog ?<p className='logged'>You are Looged Out, Please Log in Again!</p>:<p className='logged'>Logged In</p>}

</form>
  </div>

</div>



  );



}
  
  export default Login
  