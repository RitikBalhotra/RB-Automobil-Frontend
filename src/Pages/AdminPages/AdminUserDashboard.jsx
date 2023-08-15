import React, { useState } from "react";
import { getAllUser, deleteUsr, getUserById } from "../../Service/UserService";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const AdminUserDashboard = () => {
  const navigate=useNavigate();
  const [users, setusers] = useState([]);

  const getUserFrombackend = () => {
    getAllUser()
      .then((resp) => {
        setusers(resp);
      })
      .catch((error) => {});
  };

  useState(() => {
    getUserFrombackend();
  });

  //Delete USer by id

  const deleteUsers = (id) => {
    deleteUsr(id)
      .then((resp) => {
        alert("Deleted Successfully!")
        navigate("")
      })
      .catch((error) => console.log("Something Went Wrong"));
  };

  
  return (
    <>
      <div className="myCustomTable mt-2">
        <div className="card">
          {
            <button className="btn btn-primary ms-5 mt-2 col-md-2 btn-sm">
              {""}
              Total Users:{users.length}
            </button>
          }

          <table className="table table-striped">
            <thead className="thead-dark">
              <tr className="">
                <th>User_Id</th>
                <th>User_Name</th>
                <th>User_Email</th>
                <th>User_Password</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody className="table table-borderd">
              {users.map((user) => (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.pass}</td>

                  <td>
                    <button
                      onClick={(e) => deleteUsers(user.id)}
                      className="btn btn-success ms-4 col-md-5 btn-sm"
                    >
                      Delete
                    </button>
                    

                    <Link to={`/EditUser/${user.id}`} className="btn btn-danger btn-sm ms-2 col-md-5">
                      Edit
                    </Link>
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
