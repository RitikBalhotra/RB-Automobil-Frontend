
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
import { AdminCarDashboard } from './Pages/AdminPages/AdminCarDashboard';
import { AdminUserDashboard } from './Pages/AdminPages/AdminUserDashboard';
import { EditUser } from './Pages/AdminPages/EditUser';
import { EditCar } from './Pages/AdminPages/EditCars';
import { Toaster } from 'react-hot-toast';
import { AcceptTransactions } from './Pages/AdminPages/AcceptTransaction';
import { RejectTransactions } from './Pages/AdminPages/RejectTransaction';


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
      <Route path='/AdminCarDashboard' element={<AdminCarDashboard/>}/>
      <Route path='/AdminUserDashboard' element={<AdminUserDashboard/>}/>
      <Route path="/EditUser/:id" element={<EditUser/>}/>
      <Route path="/EditCar/:id" element={<EditCar/>}/>
      <Route path="/AcceptTransaction" element={<AcceptTransactions/>}/>
      <Route path="/RejectTransaction" element={<RejectTransactions/>}/>

      
    </Routes>
    <Toaster />
    
    </>
  );
}

export default App;
