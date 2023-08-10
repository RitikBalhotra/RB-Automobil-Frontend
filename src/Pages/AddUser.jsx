import { useState } from "react"
import { Link } from "react-router-dom";
import { AddUserBackend, submitUser } from "../Service/UserService"
import { Login } from "./Login";

export const AddUser=()=>{
const [user,setUser]=useState({
    name:"",
    email:"",
    pass:"",
})
const readFieldData=(event,props)=>{
    const fieldValue={...user,[props]:event.target.value}
    setUser(fieldValue);
    
}
const onSubmitData=(event)=>{
    event.preventDefault();
    submitUser(user).then((resp)=>{
        console.log(resp);
        resetData();
    }).catch((error)=>{
        console.log(error);
    })
}
const resetData=()=>{
    setUser({...user,name:"",email:"",pass:""});
}
    return(
        <>
        <div className="d-flex justify-content-center align-item-center mt-5">
           <div className="card shadow col-md-6">
            <div className="card-header">
            <div className="text-center">  <p className="fs-3 fw-bolder">Sign-up here</p> </div>
            </div>
            <div className="card-body">
                <form className="form" onSubmit={onSubmitData}>
                    <div className="mb-2">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" onChange={(e)=>readFieldData(e,"name")} value={user.name} required name="name" placeholder="Enter Name Here" />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="name">Email</label>
                        <input type="email" required className="form-control" onChange={(e)=>readFieldData(e,"email")} value={user.email} name="name" placeholder="Enter Email Here" />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="name">Password</label>
                        <input type="password" className="form-control" onChange={(e)=>readFieldData(e,"pass")} value={user.pass} required name="name" placeholder="Enter Password Here" />
                    </div>
                    <div className=" mt-3 mb-2 ">
                        Already have an Account <span> <Link to={"/login"}>Login here</Link></span>
                    </div>
                    <div className="text-center mt-3">
                        <button className="btn col-md-6 btn-primary">SignUp</button>
                        
                    </div>
                </form>
            </div>
           </div>
        </div>
        </>
    )
}