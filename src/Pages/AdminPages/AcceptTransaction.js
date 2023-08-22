import React, { useEffect, useState } from "react";
import { getAllAccept } from "../../Service/AcceptService";
import { getAllTransaction } from "../../Service/TransactionService";

export const AcceptTransactions = () => {
  const [accepts, setAccept] = useState([]);
  // const [transactions, setTransactions] = useState([]);

  const getAcceptFromBackend = () => {
    getAllAccept()
      .then((resp) => {
        console.log(resp);
        setAccept(resp);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getAcceptFromBackend();
  }, []);
  return (
    <>
      <div className="myCustomTable mt-1">
        <div className="card bg-danger">
          {
            <button className="btn btn-primary ms-3 mt-2 mb-2 col-md-2 btn-sm">
              {""}
              Accepted Transactions:{accepts.length}
            </button>
          }

          <table className="table table-striped">
            <thead className="thead-dark">
              <tr className="">
                <th>Accepted_Id</th>
                <th>Transaction_Id</th>
                <th>Car_Id</th>
                <th>Car_Name</th>
                <th>Car_Price</th>
                <th>User_Email</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody className="table table-borderd">
              {accepts.map((accept) => (
                <tr>
                  <td>{accept.accept_Id}</td>
                  <td>{accept.id}</td>
                  <td>{accept.car_id}</td>
                  <td>{accept.car_name}</td>
                  <td>{accept.car_price}</td>
                  <td>{accept.user_email}</td>

                  <td className="box text-success">
                    
                      Accepted
                  
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
