import React from 'react';
//import ReactDOM from 'react-dom/client';
import { Link } from "react-router-dom";
import './Dash.css';
const imgPath = process.env.PUBLIC_URL;


function SignUp() {
    return (
      <div>
        <div className='container_1'>

          <div className='sidebar'>

          <div className='profile'>
          <div className='profilepic'>
          <img src={`${imgPath}./img/OGE_OKOH NEW PASSPORT (2).jpg`} alt="" className="Profile_t" />
          </div>
            <div className='button'><input value={'Preview'} className='preview' type="button" /><input value={'Edit'} className='preview_1' type="button" /></div>
          </div>

            <div className='content'>
            <p>Manager Name:</p>
              <p>Company Name:</p>
              <Link to="/"><p className='items'>Dashboard:</p></Link>
              <Link to="payroll"><p className='items'>Payroll:</p></Link>
              <Link to="Registration"><p className='items'>Registration:</p></Link>
              <Link to="SignUp"><p className='items'>SignUp:</p></Link>
              <Link to="/"><p className='items'>Account:</p></Link>
              <Link to="/Login"><p className='items'>Log Out:</p></Link>
              </div>  
              <div className='profilex'></div>
          </div>

        <div className='horizontalbar'>
          <div className='verticalbar'>
            <div className='new'> <input Type="text" placeholder='Search Record' className='search'/> 
            <div className='cont'> <input className='calander' type="date"/> <input className='click' value={'Search'} type="button"/></div> 
            
            <div className='sidepic'>
            <img src={`${imgPath}./img/OGE_OKOH NEW PASSPORT (2).jpg`} alt="" className="Profile_th" /></div></div>
          </div>


          <div className='verticalbar_2'>
          {/* <input type='text'/> */}
              <div className='conti2'>
<form>
                SurName: <br></br>
                <input className='txtbox' type='text'/><br></br>
                First Name: <br></br>
                <input className='txtbox' type='text'/><br></br>
                Department: <br></br>
                <input className='txtbox' type='text'/><br></br>
                Rank: <br></br>
                <input className='txtbox' type='text'/><br></br>
                E-mail: <br></br>
                <input className='txtbox' type='text'/><br></br>
                Phone:  <br></br>
                <input className='txtbox' type='text'/><br></br>
                UserName:  <br></br>
                <input className='txtbox' type='text'/><br></br>
                Password:<br></br>
                <input className='txtbox' type='text'/><br></br>
                Confirm Password:<br></br>
                <input className='txtbox' type='text'/><br></br><br></br>
                </form>
                <input className='sign' value={'Submit'} type='button'/> <input value={'Cancel'} className='exit' type='button'/>
              {/* <div className='dash1'></div> */}
              {/* <div className='dash1'></div> */}
              {/* <div className='dash1'></div> */}
              {/* <div className='dash1'></div> */}
              </div>

          </div>


          <div className="App-header1"></div>
        </div>

        </div>
        {/* <header className="App-header"> */}
          {/* <img src={} className="App-logo" alt="" /> */}
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p> */}
        {/* </header> */}
        
        
        
        
        <div></div>
      </div>
      
    );
  }
  
  export default SignUp;
  