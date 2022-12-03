import React, { useState } from 'react'
//import ReactDOM from 'react-dom/client';
import { Link } from "react-router-dom";
import axios from 'axios';
import './Dash.css';
// import ".../bootstrap/dist/css/bootstrap.min.css";
//import {Alert, Button, Table, Breadcrumb} from 'react-bootstrap';
const imgPath = process.env.PUBLIC_URL;

function Registration() {
  const users = JSON.parse(localStorage.getItem('user'))
  const [imageFile, setImageFile] = useState('')
  const user = JSON.parse(localStorage.getItem('user'))

  const handleImageChange = (e) => {
      setImageFile(e.target.files[0])

  }
  const handleSubmit = async () =>{
    alert('Record Saved Sucessfully')
  }
  const handleImageUpload = async () => {
      try {
          let token = JSON.parse(localStorage.token)
          const user = JSON.parse(localStorage.getItem('user'))
          console.log(user, token)

          // let myHeaders = new Headers();
          // myHeaders.append("Authorization", token);
          let formdata = new FormData();

          formdata.append("image", imageFile);

          console.log(imageFile)
//           const img = document.createElement("img");
// img.src = "https://picsum.photos/200/301";
// document.body.appendChild(img);
const image_input = document.querySelector("#image_input");
var uploaded_image = "";

image_input.addEventListener("change", function(){
  console.log(image_input.value);
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_image = reader.result;
    document.querySelector("displayimage").style.backgroundImage = `url(${uploaded_image})`;
  });
  
  reader.readAsDataURL(this.files[0]);
})



          // let res = await axios.post(`https://ict-del-gram-app.herokuapp.com/api/users/${user._id}`, formdata, {
          //     headers: {
          //         'Authorization': token,
          //         'Content-Type': "multipart/form-data"
          //     }
          // })
          alert('profile Picture Updated')
          // localStorage.setItem('user', JSON.stringify(res.data.data))
          window.location.reload()
      } catch (err) {
          console.log(err.message);
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
          {/* <Breadcrumb>
          <Breadcrumb.Item>Test 1</Breadcrumb.Item>
          <Breadcrumb.Item>Test 1</Breadcrumb.Item>
          <Breadcrumb.Item active>Test 1</Breadcrumb.Item>
          </Breadcrumb>
          <Alert variant='secondary'>Successful</Alert>
<Button>Log Out</Button> */}
            <div className='content'>
            <p>Manager Name:</p>
              <p>Company Name:</p>
              <Link to="/" ><p className='items'>Dashboard:</p></Link>
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
          

          <div className='verticalbar_4'>
          {/* <input type='text'/> */}
              <div className='conti4'>
                <div>
                  <frames className="frame">
{/* <input className="frame" type='text'/> */}
<img button="100px" className="frame" src={`${imgPath}./img/OGE_OKOH NEW PASSPORT (2).jpg`} alt=""/><br></br>
                  </frames>
                  {/* <input type="file"  placeholder='Upload Picture'/> */}
                  <div className="pic_n">
                        
                        <div class="upload_pic">
                          <div className='displayimage'></div>
                          <input type="file" id="image_input" accept='image/png, image/jpg' className='file' onChange={handleImageChange} /><br></br>
                        <button class="pic_upload" onClick={handleImageUpload}>Upload Picture</button></div>
                    </div>
                </div>
              <div>
                <h1>Register New Staff</h1>
                SurName: <br></br>
                <ui><input className='txtbox' type='text' required /></ui><br></br>
                First Name: <br></br>
                <ui><input className='txtbox' type='text'/></ui><br></br>
                Department: <br></br>
                <input className='txtbox' type='text'/><br></br>
                Rank: <br></br>
                <input className='txtbox' type='text'/><br></br>
                E-mail: <br></br>
                <input className='txtbox' type='text'/><br></br>
                Phone:  <br></br>
                <input className='txtbox' type='text'/><br></br>
                Company Name:<br></br>
                <input className='txtbox' type='text'/><br></br>
                Company Mail: <br></br>
                <input className='txtbox' type='text'/><br></br>
                EmployID:<br></br>
                <input className='txtbox' type='text'/><br></br><br></br>
                <input className='sign' value={'Submit'} onClick={handleSubmit} type='button'/> <input value={'Cancel'} className='exit' type='button'/></div>

                <div className='tableview'>
<table>
  <thead>
    <tr>
      <th >S/N</th><th>First Name</th><th>Last Name</th><th>EmployID</th><th>Email Address</th><th>Phone Number</th>
    </tr>
  
  </thead>
</table>
                </div>
                
              {/* <div className='dash1'></div> */}
              {/* <div className='dash1'></div> */}
              {/* <div className='dash1'></div> */}
              {/* <div className='dash1'></div> */}
              </div>
              {/* <input className='sign' value={'Submit'} type='button'/> <input value={'Cancel'} className='exit' type='button'/> */}
          </div>


          <div className="App-header2"></div>
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
  
  export default Registration;
  