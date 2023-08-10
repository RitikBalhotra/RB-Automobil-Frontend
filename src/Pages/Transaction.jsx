import { useState } from "react";
import { submitTransaction } from "../Service/UserService";
import { useNavigate } from "react-router-dom";

export const Transaction=()=>{
    const naviGate = useNavigate();
    const[Transaction, setTransaction]=useState(
        {
            user_name:"",
            user_email:"",
            user_pass:"",
            user_dob:"",
            user_address:"",
            user_pan:"",
        })

        const readFieldData=(event, props)=>{
            const fieldValue={...Transaction,[props]:event.target.value}
            setTransaction(fieldValue);
        }

        const onSubmitTransaction=(event)=>{
            event.preventDefault();
            submitTransaction(Transaction).then((resp)=>{
                console.log(resp);
                resetData();
            }).catch((error)=>{
                console.log(error);
            })

        }

        const resetData=()=>{
            setTransaction({...Transaction,user_name:"",user_email:"",user_pass:"",user_address:"",user_dob:"",user_pan:""});
        }

    return(
         <>
        <div className="d-flex justify-content-center align-item-center mt-5">
           <div className="card shadow col-md-6">
            <div className="card-header">
            {/* <div className="text-center">  <p className="fs-3 fw-bolder">Sign-up here</p> </div> */}
            </div>
            <div className="card-body">
                <form className="form" onSubmit={onSubmitTransaction}>
                    <div className="mb-2">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" onChange={(e)=>readFieldData(e,"user_name")} value={Transaction.user_name} required name="name" placeholder="Enter Name Here" />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="name">Email</label>
                        <input type="email" required className="form-control" onChange={(e)=>readFieldData(e,"user_email")} value={Transaction.user_email} name="name" placeholder="Enter Email Here" />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="name">Password</label>
                        <input type="password" className="form-control" onChange={(e)=>readFieldData(e,"user_pass")} value={Transaction.user_pass} required name="name" placeholder="Enter Password Here" />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="name">Date of Birth</label>
                        <input type="text" className="form-control" onChange={(e)=>readFieldData(e,"user_dob")} value={Transaction.user_dob} required name="name" placeholder="Enter Date of birth Here" />
                    </div>

                     <div className="mb-2">
                        <label htmlFor="name">Address</label>
                        <input type="text" className="form-control" onChange={(e)=>readFieldData(e,"user_address")} value={Transaction.user_address} required name="name" placeholder="Enter address Here" />
                    </div>


                     <div className="mb-2">
                        <label htmlFor="name">Pan-Number</label>
                        <input type="text" className="form-control" onChange={(e)=>readFieldData(e,"user_pan")} value={Transaction.user_pan} required name="name" placeholder="Enter pan Here" />
                    </div>   

                    {/* <div className="mb-2">
                        <label htmlFor="name">Car-Name</label>
                        <input type="text" className="form-control" onChange={(e)=>readFieldData(e,"Transaction_car_name")} value={Transaction.user_pan} required name="name" placeholder="Enter pan Here" />
                    </div>  

                    <div className="mb-2">
                        <label htmlFor="name">Pan-Number</label>
                        <input type="text" className="form-control" onChange={(e)=>readFieldData(e,"user_pan")} value={Transaction.user_pan} required name="name" placeholder="Enter pan Here" />
                    </div>  

                    <div className="mb-2">
                        <label htmlFor="name">Pan-Number</label>
                        <input type="text" className="form-control" onChange={(e)=>readFieldData(e,"user_pan")} value={Transaction.user_pan} required name="name" placeholder="Enter pan Here" />
                    </div>   */}

                    {/* <div className=" mt-3 mb-2 ">
                        Already have an Account <span> <Link to={"/login"}>Login here</Link></span>
                    </div> */}
                    <div className="text-center mt-3">
                        <button className="btn col-md-6 btn-primary">Buy Now</button>
                        
                    </div>
                </form>
            </div>
           </div>
        </div>
        </>


    )
}
