import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  deleteTransaction,
  getAllTransaction,
  statusService,
} from "../../Service/TransactionService";
import { getAllCar } from "../../Service/CarService";
import { getAllUser } from "../../Service/UserService";
import { naviGate, useNavigate } from "react-router-dom";
import { myAxios } from "../../Service/Helper";
import { toast } from "react-hot-toast";
import { getAllAccept } from "../../Service/AcceptService";
import { getAllReject } from "../../Service/RejectService";

export const AdminDashboard = () => {
  const naviGate = useNavigate();
  const [transactions, setTransactions] = useState([]);
  const [cars, setCars] = useState([]);
  const [users, setUsers] = useState([]);
  const [tAccepts, setAccept] = useState([]);
  const [tReject, setReject] = useState([]);
  const [tStatus, setStatus] = useState({
    id: "",
    status: ""
  });

  const getTransactionsFromBackend = () => {
    getAllTransaction()
      .then((resp) => {
        setTransactions(resp);
      })
      .catch((error) => {});
  };

  const getAcceptFromBackend = () => {
    getAllAccept()
      .then((resp) => {
        console.log(resp);
        setAccept(resp);
      })
      .catch((error) => {});
  };

  const getRejectFromBackend = () => {
    getAllReject()
      .then((resp) => {
        setReject(resp);
      })
      .catch((error) => {});
  };

  const getCarsFromBackend = () => {
    getAllCar()
      .then((resp) => {
        setCars(resp);
      })
      .catch((error) => {});
  };

  const getUsersFromBackend = () => {
    getAllUser()
      .then((resp) => {
        setUsers(resp);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    if (checkLogedIn() === true) {
      //   checkLogedIn();
      getTransactionsFromBackend();
      getCarsFromBackend();
      getUsersFromBackend();
      getAcceptFromBackend();
      getRejectFromBackend();
    } else {
      naviGate("/login");
      alert("Please Login first");
    }
  }, []);

  const checkLogedIn = () => {
    const data = localStorage.getItem("data");
    if (data != null) {
      return true;
    } else {
      return false;
    }
  };
  const acceptReject = (props, args) => {
    console.log("before set satus  :"  +props , args);
    setStatus({
      id: props,
      status: args
  });
    console.log(tStatus);    
    statusService(tStatus)
      .then((resp) =>{
       toast.success(args);
       deleteTransaction(tStatus.id);
       getAllTransaction();
      })
      .catch((error) => toast.warning("SomeThing Went Wrong"));
      
  };

  

  // const deleteActionTransction = (id) => {
  //   deleteTransaction(tStatus.id)
  //     .then((resp) => console.log("Data Deleted"))
  //     .catch((error) => console.log(error));
  //     getAllTransaction();
  // };
  return (
    <>
      <div class="row">
        <div class="col-sm-3 mb-3 mt-3 ">
          <div class="card bg-danger">
            <div class="card-body">
              <h3 class="card-title ">Cars</h3>
              <p class="card-text text-white">Available cars:{cars.length}</p>
              <a href="/AdminCarDashboard" class="btn btn-primary">
                Check Cars
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-3 mt-3 ">
          <div class="card bg-danger">
            <div class="card-body">
              <h3 class="card-title">Users</h3>
              <p class="card-text text-white">Available Users:{users.length}</p>
              <a href="/AdminUserDashboard" class="btn btn-primary">
                Check Users
              </a>
            </div>
          </div>
        </div>

        <div class="col-sm-3 mt-3 ">
          <div class="card bg-danger">
            <div class="card-body">
              <h3 class="card-title">Accept Transactions</h3>
              <p class="card-text text-white">Total Accept:{tAccepts.length}</p>
              <a href="/AcceptTransaction" class="btn btn-primary">
                Check Accepted Transactions
              </a>
            </div>
          </div>
        </div>

        <div class="col-sm-3 mt-3 ">
          <div class="card bg-danger">
            <div class="card-body">
              <h3 class="card-title">Reject Transactions</h3>
              <p class="card-text text-white">Total Reject:{tReject.length}</p>
              <a href="/RejectTransaction" class="btn btn-primary">
                Check Rejected Transactions
              </a>
            </div>
          </div>
        </div>

        <div className="myCustomTable mt-1">
          <div className="card bg-danger">
            {
              <button className="btn btn-primary ms-3 mt-2 mb-2 col-md-2 btn-sm">
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
                      <button
                        className="btn btn-success ms-4 col-md-3"
                        onClick={(e) => acceptReject(transaction.id, "accept")}
                      >
                        Accept
                      </button>
                      <button
                        className="btn btn-danger ms-4 col-md-3 "
                        onClick={(e) => acceptReject(transaction.id, "reject")}
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <footer class="bg-dark text-center text-white">
        <div class="text-center">© 2023 Copyright : RB-Automobile</div>
      </footer>
    </>
  );
};
