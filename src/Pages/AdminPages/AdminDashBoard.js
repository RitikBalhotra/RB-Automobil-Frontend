import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllTransaction } from "../../Service/TransactionService";
import { getAllCar } from "../../Service/CarService";
import { getAllUser } from "../../Service/UserService";
import { naviGate, useNavigate } from "react-router-dom";

export const AdminDashboard = () => {
    const naviGate = useNavigate();
  const [transactions, setTransactions] = useState([]);
  const[cars,setCars]=useState([]);
  const[users,setUsers]=useState([]);

  const getTransactionsFromBackend = () => {
    getAllTransaction()
      .then((resp) => {
        setTransactions(resp);
      })
      .catch((error) => {});
  };

  const getCarsFromBackend=()=>{
    getAllCar()
    .then((resp) => {
        setCars(resp);
      })
      .catch((error) => {});
  };

  const getUsersFromBackend=()=>
  {
    getAllUser()
    .then((resp) => {
        setUsers(resp);
      })
      .catch((error) => {});
  }


  useEffect(() => {
    if (checkLogedIn()=== true){
    //   checkLogedIn();
      getTransactionsFromBackend();
      getCarsFromBackend();
      getUsersFromBackend();
    } else {
      naviGate("/login");
      alert("Please Login first");
    }
  }, []);

  const checkLogedIn = () => {
    const data = localStorage.getItem("data");
    if (data!=null) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <div class="row">
        <div class="col-sm-6 mb-3 mt-3 ">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Cars</h3>
              <p class="card-text">Available cars:{cars.length}</p>
              <a href="/AdminCarDashboard" class="btn btn-primary">
                Check Cars
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6 mt-3 ">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Users</h3>
              <p class="card-text">Available Users:{users.length}</p>
              <a href="/AdminUserDashboard" class="btn btn-primary">
                Check Users
              </a>
            </div>
          </div>
        </div>

        <div className="myCustomTable mt-2">
          <div className="card">
            {
              <button className="btn btn-primary ms-5 mt-2 col-md-2 btn-sm">
                {""}
                Total Transactions:{transactions.length}
              </button>
            }

            <table className="table table-striped">
              <thead className="thead-dark">
                <tr className="">
                  <th>Transaction_Id</th>
                  <th>User_Name</th>
                  <th>Car_Id</th>
                  <th>Car_Name</th>
                  <th>Car_Price</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody className="table table-borderd">
                {transactions.map((transaction) => (
                  <tr>
                    <td>{transaction.id}</td>
                    <td>{transaction.user_name}</td>
                    <td>{transaction.car_id}</td>
                    <td>{transaction.car_name}</td>
                    <td>{transaction.car_price}</td>

                    <td>
                      <button className="btn btn-success ms-4 col-md-5 btn-sm">
                        Accept
                      </button>

                      <Link className="btn btn-danger btn-sm ms-2 col-md-5">
                        {" "}
                        Reject
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
