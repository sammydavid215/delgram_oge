import React from 'react';
//import ReactDOM from 'react-dom/client';
import './Dash.css';
import '../index.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Link } from "react-router-dom";
const imgPath = process.env.PUBLIC_URL;
function Dashboard() {
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
              <div className='profilex'>
              <input className='click1' value={'EXPORT'} type="button"/>
              </div>
          </div>

        <div className='horizontalbar'>
          <div className='verticalbar'>
            <div className='new'> <input Type="text" placeholder='Search Record' className='search'/> 
            <div className='cont'> <input className='calander' type="date"/> <input className='click' value={'Search'} type="button"/></div> 
            
            <div className='sidepic'>
            <img src={`${imgPath}./img/OGE_OKOH NEW PASSPORT (2).jpg`} alt="" className="Profile_th" />
              </div></div>
          </div>


          <div className='verticalbar_1'>
              <div className='conti1'>
              <div className='dash1'>
                <h3>Total Number Of Employee</h3>
                <p>8,000</p>
                <input className='viewtotal' type="button" value="VIEW EMPLOYEE"  />
              </div>
              <div className='dash1'>
              <h3>Total Amount Payable</h3>
                <p>=N= 589,000,000</p>
              <input className='viewtotal1' type="button" value="VIEW ACCOUNT PAYABLE" />
              </div>
              <div className='dash1'>
              <h3>Total Amount Receivable</h3>
                <p>=N= 889,000,000</p>
              <input className='viewtotal2' type="button" value="VIEW ACCOUNT RECEIVEBLE" />
              </div>
              <div className='dash1'>
              <h3>Total Monthly Salaries</h3>
                <p>=N= 65,000,000</p>
              <input className='viewtotal3' type="button" value="VIEW PAYROLL" />
              </div>
              </div>

          </div>


          <div className="App-header">

            <table id="table" class="table" border="1">
              <thead>
              <tr>
    <th colspan="22">COMPANY NAME AND YEAR</th>
    </tr>
    <tr><th colspan="8">TRANSACTION FOR THE MONTH OF:</th>
    <th colspan="12">CATEGORIES:</th>
    {/* <th colspan="6">YEAR:</th> */}
    </tr>
    {/* <tr><th colspan="11"></th></tr> */}
    <tr>

    </tr>
              {/* <th colspan="8"></th>  */}
                <tr>
              <th className='col' scope="col">S/N</th> 
              <th className='col' scope="col">DATE</th>  
              <th className='col' scope="col">EMPLOYEE NAME</th>
              <th className='col'scope="col">RANKS</th>
              <th className='col' scope="col">DEPARTMENT</th>
              <th className='col' scope="col">NET SALARY(=N=)</th>
              <th className='col' scope="col">CASH(=N=)</th>
              <th className='col' scope="col">BANK NAME</th>
              <th className='col' scope="col">ALLOWANCE(=N=)</th>
              <th className='col' scope="col">DEDUCTIONS(=N=)</th>
              <th className='col' scope="col">ANNUAL SALARY(=N=)</th>
              <th className='col' scope="col">TOTAL HOURS</th>
              <th className='col' scope="col">GROSS(=N=)</th>
                </tr>
              </thead>
              <tr> 
            
            <td>1</td> 
            <td>17/02/2022</td>
            <td>Emmanuel joe</td>
            <td>Admin</td>
            <td>Admin</td> 
            <td>25,000</td>
            <td>25,000</td>
            <td>Zenith</td>
            <td>12,000</td> 
            <td>6,000</td>
            <td>300,000</td> 
            <td>8</td>
            <td>25,000</td>
            <td><a href ="delete_reg.php?Del=<?php echo $SN ?>">Delete</a></td>
           
        </tr>
        <tr> 
            
            <td>2</td> 
            <td>17/02/2022</td>
            <td>Jacob johnson</td>
            <td>Engr</td>
            <td>Workshop</td> 
            <td>65,000</td>
            <td>55,000</td>
            <td>Zenith</td>
            <td>22,000</td> 
            <td>6,000</td>
            <td>900,000</td> 
            <td>8</td>
            <td>60,000</td>
            <td><a href ="delete_reg.php?Del=<?php echo $SN ?>">Delete</a></td>
           
        </tr>
        <tr> 
            
            <td>3</td> 
            <td>17/02/2022</td>
            <td>Emma joke</td>
            <td>Developer</td>
            <td>software</td> 
            <td>95,000</td>
            <td>95,000</td>
            <td>Zenith</td>
            <td>22,000</td> 
            <td>6,000</td>
            <td>1,000,000</td> 
            <td>8</td>
            <td>90,000</td>
            <td><a href ="delete_reg.php?Del=<?php echo $SN ?>">Delete</a></td>
           
        </tr>
        <tr> 
            
            <td>4</td> 
            <td>17/02/2022</td>
            <td>Lucky samson</td>
            <td>Admin</td>
            <td>Admin</td> 
            <td>25,000</td>
            <td>25,000</td>
            <td>Zenith</td>
            <td>12,000</td> 
            <td>6,000</td>
            <td>300,000</td> 
            <td>8</td>
            <td>25,000</td>
            <td><a href ="delete_reg.php?Del=<?php echo $SN ?>">Delete</a></td>
           
        </tr>
        <tr> 
            
            <td>5</td> 
            <td>17/02/2022</td>
            <td>Cathrine Lucy</td>
            <td>Admin</td>
            <td>Admin</td> 
            <td>25,000</td>
            <td>25,000</td>
            <td>Zenith</td>
            <td>12,000</td> 
            <td>6,000</td>
            <td>300,000</td> 
            <td>8</td>
            <td>25,000</td>
            <td><a href ="delete_reg.php?Del=<?php echo $SN ?>">Delete</a></td>
           
        </tr>
        <tr> 
            
            <td>6</td> 
            <td>17/02/2022</td>
            <td>Onome KObo</td>
            <td>Buss. Dev</td>
            <td>Marketing</td> 
            <td>85,000</td>
            <td>85,000</td>
            <td>Zenith</td>
            <td>12,000</td> 
            <td>6,000</td>
            <td>300,000</td> 
            <td>8</td>
            <td>75,000</td>
            <td><a href ="delete_reg.php?Del=<?php echo $SN ?>">Delete</a></td>
           
        </tr>
        <tr> 
            
            <td>7</td> 
            <td>17/02/2022</td>
            <td>Shalock dnomes</td>
            <td>Manager</td>
            <td>Admin</td> 
            <td>125,000</td>
            <td>125,000</td>
            <td>Zenith</td>
            <td>12,000</td> 
            <td>6,000</td>
            <td>300,000</td> 
            <td>8</td>
            <td>125,000</td>
            <td><a href ="delete_reg.php?Del=<?php echo $SN ?>">Delete</a></td>
           
        </tr>
        {/* <tr> 
            
            <td>8</td> 
            <td>17/02/2022</td>
            <td>Emmanuel son</td>
            <td>Admin</td>
            <td>Admin</td> 
            <td>25,000</td>
            <td>25,000</td>
            <td>Zenith</td>
            <td>12,000</td> 
            <td>6,000</td>
            <td>300,000</td> 
            <td>8</td>
            <td>25,000</td>
            <td><a href ="delete_reg.php?Del=<?php echo $SN ?>">Delete</a></td>
           
        </tr>
        <tr> 
            
            <td>9</td> 
            <td>17/02/2022</td>
            <td>Kelly johnson</td>
            <td>Admin</td>
            <td>Admin</td> 
            <td>25,000</td>
            <td>25,000</td>
            <td>Zenith</td>
            <td>12,000</td> 
            <td>6,000</td>
            <td>300,000</td> 
            <td>8</td>
            <td>25,000</td>
            <td><a href ="delete_reg.php?Del=<?php echo $SN ?>">Delete</a></td>
           
        </tr> */}
        {/* <tr> 
            
            <td>10</td> 
            <td>17/02/2022</td>
            <td>Emmanuel Noah</td>
            <td>Admin</td>
            <td>Admin</td> 
            <td>25,000</td>
            <td>25,000</td>
            <td>Zenith</td>
            <td>12,000</td> 
            <td>6,000</td>
            <td>300,000</td> 
            <td>8</td>
            <td>25,000</td>
            <td><a href ="delete_reg.php?Del=<?php echo $SN ?>">Delete</a></td>
           
        </tr> */}
            </table>
         
          </div>
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
  
  export default Dashboard;
  