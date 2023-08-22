import React, { useEffect, useState } from "react";


import { getAllReject } from "../../Service/RejectService";

export const RejectTransactions = () => {
  const [Rejects, setReject] = useState([]);

  const getAcceptFromBackend = () => {
    getAllReject()
      .then((resp) => {
        console.log(resp);
        setReject(resp);
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
              Rejected Transactions:{Rejects.length}
            </button>
          }

          <table className="table table-striped">
            <thead className="thead-dark">
              <tr className="">
                <th>Rejected_Id</th>
                <th>Transaction_Id</th>
                <th>Car_Id</th>
                <th>Car_Name</th>
                <th>Car_Price</th>
                <th>User_Email</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody className="table table-borderd">
              {Rejects.map((reject) => (
                <tr>
                  <td>{reject.reject_Id}</td>
                  <td>{reject.id}</td>
                  <td>{reject.car_id}</td>
                  <td>{reject.car_name}</td>
                  <td>{reject.car_price}</td>
                  <td>{reject.user_email}</td>

                  <td className="box text-danger">
                    
                    Rejected
                
                </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
