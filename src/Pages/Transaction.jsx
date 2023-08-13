import { useEffect, useState } from "react";
import {
  getCurrentUserId,
  getUserByEmail,
} from "../Service/UserService";
import { submitTransaction } from "../Service/TransactionService";
import { naviGate, useNavigate } from "react-router-dom";
import { getCarById } from "../Service/CarService";
import { useParams } from "react-router-dom";


export const Transaction = () => {
  const naviGate = useNavigate();
  const [user, setUser] = useState("");
  const [car, setCar] = useState("");
  const [Transaction, setTransaction] = useState({
    
    user_name: "",
    user_email: "",
    user_dob: "",
    user_address: "",
    user_pan: "",
    car_id:"",
    car_name:"",
    car_price:"",
    car_model:"",
    car_colour:""
  });
  const cId = useParams();

   useEffect(() => {
    const email = getCurrentUserId();
    getUserByEmail(email).then((resp) => {
      setUser(resp);
    });
    getCarById(cId).then((resp)=>{
        setCar(resp);
    })

    
   
  }, []);

 
  const readFieldData = (event, props) => {
    const fieldValue = { ...Transaction, [props]: event.target.value };
   setTransaction({
    user_name:user.name,
    user_email:user.email,
    user_dob:fieldValue.user_dob,
    user_address:fieldValue.user_address,
    user_pan:fieldValue.user_pan,
    car_id:car.id,
    car_name:car.name,
    car_price:car.price,
    car_model:car.model,
    car_colour:car.colour,
   })
  };
  
  const onSubmitTransaction = (event) => {
    event.preventDefault();
    let trr=(JSON.parse(JSON.stringify(Transaction)))
    submitTransaction(trr)
      .then((resp) => {
        console.log(resp);
        alert("Data submit successfully!");
        naviGate("/");
        


      })
      .catch((error) => {
        console.log(error);
      });
  };

//   const resetData = () => {
//     setTransaction({
//       ...Transaction,
//       user_name: "",
//       user_email: "",
//       user_pass: "",
//       user_address: "",
//       user_dob: "",
//       user_pan: "",
//     });
//   };

  return (
    <>
      <div className="d-flex justify-content-center align-item-center mt-5 ">
        <div className="card shadow col-md-11">
         
          <div className="card-body">
            <form className="form" onSubmit={onSubmitTransaction}>
            <div className="card-header">
            <div className="d-flex justify-content-center align-item-center mt-5">
              <div className="card col-md-9">
                <div className="card-body">
                  <div className="text-center">
                    <h3>{car.name}</h3>
                  </div>
                  <div>
                  <p>Colour: {car.colour}</p>
                  <p>Model: {car.model}</p>
                    <p>
                      Payable Amount including All Taxes :{ <p className="text-primary">{car.price}</p>}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
              <div className="mb-2">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  readOnly
                  className="form-control"
                  value={user.name}
                />
              </div>

              <div className="mb-2">
                <label htmlFor="name">Email</label>
                <input
                  type="email"
                  readOnly
                  className="form-control"
                  value={user.email}
                />
              </div>

              <div className="mb-2">
                <label htmlFor="name">Date of Birth</label>
                <input
                  type="date"
                  className="form-control"
                  onChange={(e) => readFieldData(e, "user_dob")}
                  value={Transaction.user_dob}
                  required
                  name="name"
                  placeholder="Enter Date of birth Here"
                />
              </div>

              <div className="mb-2">
                <label htmlFor="name">Address</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => readFieldData(e, "user_address")}
                  value={Transaction.user_address}
                  required
                  name="name"
                  placeholder="Enter address Here"
                />
              </div>

              <div className="mb-2">
                <label htmlFor="name">Pan-Number</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => readFieldData(e, "user_pan")}
                  value={Transaction.user_pan}
                  required
                  name="name"
                  placeholder="Enter pan Here"
                />
              </div>
              <div className="text-center mt-3">
                <button className="btn col-md-6 btn-primary">Buy Now</button>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </>
  );
};
