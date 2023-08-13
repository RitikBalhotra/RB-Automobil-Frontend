
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddUser } from './Pages/AddUser';
import { Route, Routes ,BrowserRouter } from "react-router-dom";
import { Login } from './Pages/Login';
import { DashBoard } from './Pages/DashBoard';
import { NavBar } from './Pages/NavBar';
import { Transaction } from './Pages/Transaction';
import { AddCar } from './Pages/AdminPages/AddCar';
import { AdminDashboard } from './Pages/AdminPages/AdminDashBoard';


function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<DashBoard/>}/>
      <Route path='/addUser' element={<AddUser/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/transaction/:id' element={<Transaction/>}/>
      <Route path='/add/car' element={<AddCar/>}/>
      <Route path='/AdminDashboard' element={<AdminDashboard/>}/>

      
    </Routes>
   
    
    </>
  );
}

export default App;
