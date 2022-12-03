import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
// import Login from "./Components/Authentication/Login";
// import SignUp from "./Components/Authentication/SignUp";
// import Home from "./Components/Pages/Home";
// import Profile from "./Components/ProfilePage/Profile"
// import EditProfile from "./Components/ProfilePage/EditProfile";
import Dashboard from "./Component/Dashboard";
import Login from "./Component/Login";
import payroll from "./Component/payroll";
import SignUp from "./Component/SignUp";
import Registration from "./Component/Registration";





function App() {
    
  return (
    <>
    <Router>
      <div className="App">
        
        <Route component={Dashboard} path='/' exact />
        <Route component={Login} path='/Login' exact />
        <Route component={payroll} path='/payroll' exact />
        <Route component={Registration} path='/Registration' exact />
        <Route component={SignUp} path='/SignUp' exact />

    </div>
    </Router>
    </>
  );
}

export default App;
