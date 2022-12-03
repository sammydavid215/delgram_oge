// import React from 'react';
import React, { useState } from 'react'
//import ReactDOM from 'react-dom/client';
import { Link } from "react-router-dom";
import './Dash.css';
const imgPath = process.env.PUBLIC_URL;





function payroll() {

  const handleUpdate = async () => {

     const text = '';
   
  
    if (text ==''){
      
      alert('Fill all field')
    }
    else{
      alert("Updated successfully")
    }
    
  }
  
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
            <div className='new'> <input Type="text" placeholder='Enter EmployID' className='search'/> 
            <div className='cont'> 
            {/* <input className='calander' type="date"/>  */}
            <input className='click' value={'Search'} type="button"/></div> 
            
            <div className='sidepic1'>
            <img src={`${imgPath}./img/OGE_OKOH NEW PASSPORT (2).jpg`} alt="" className="Profile_th1" /></div></div>
          </div>


          <div className='verticalbar_3'>
          {/* <input type='text'/> */}
              <div className='conti2'>

                SurName: 
                <input className='txtbox'  type='text'/>
                First Name: 
                <input className='txtbox' type='text'/>
                Department: 
                <input className='txtbox' type='text'/><br></br><br></br><br></br>
                Rank:  
                <input className='txtbox' type='text'/>
                 E-mail:  
                <input className='txtbox' type='text'/>
                 Phone: 
                <input className='txtbox' type='text'/><br></br><br></br><br></br>
                Annual Gross:
                <input className='txtbox' type='text'/>
                 Monthly Salary: 
                <input className='txtbox' type='text'/>
                Total Deduction:
                <input className='txtbox' type='text'/><br></br><br></br><br></br>
                Total Allowance:
                <input className='txtbox' type='text'/>
                Net Pay:
                <input className='txtbox' type='text'/>
                 Total Working Days:
                <input className='txtbox' type='text'/><br></br><br></br><br></br>

                <input className='sign'  value="Update" onClick={handleUpdate} type='button'/> <input className='exit' value="Cancel" type='button'/>
              {/* <div className='dash1'></div> */}
              {/* <div className='dash1'></div> */}
              {/* <div className='dash1'></div> */}
              {/* <div className='dash1'></div> */}
              </div>

          </div>


          <div className="App-header1">
          
          </div>
        </div>

        </div>
        {/* <header className="App-header"> */}
          {/* <img src={} className="App-logo" alt="" /> */}
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p> */}
        {/* </header> */}
        
        
        
        
        <div>
          
        </div>
      </div>
      
    );
  }
  
  export default payroll;
  