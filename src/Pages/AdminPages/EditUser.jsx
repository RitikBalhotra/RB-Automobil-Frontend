import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UpdateUser, getUserById } from "../../Service/UserService";
import { useNavigate } from "react-router-dom";

export const EditUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    pass: "",
  });

  const handelChange = (e, props) => {
    setUser({ ...user, [props]: e.target.value });
  };
  const id = useParams();
  const eid = id.id;

  useEffect(() => {
    getUserById(eid)
      .then((resp) => setUser(resp))
      .catch((error) => {});
  }, {});

  const SubmitData = (event) => {
    event.preventDefault();
    UpdateUser(user)
      .then((resp) => {
        navigate("/AdminUserDashboard");
      })
      .catch((error) => {
        alert("Something went wrong");
      });
  };
  return (
    <>
    <div className="blank bg-danger">
      <br />
      <br />
      <div className="d-flex justify-content-center align-item-center">
        <div className="card shadow col-md-6">
          <div className="card-header">
            <div className="text-center">
              {" "}
              <p className="fs-3 fw-bolder">Edit User Details</p>{" "}
            </div>
          </div>
          <div className="card-body">
            <form className="form" onSubmit={SubmitData}>
              <div className="mb-2">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="Name"
                  id=""
                  className="form-control"
                  onChange={(e) => handelChange(e, "name")}
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
                  name="email"
                />
              </div>

              <div className="mb-2">
                <label htmlFor="name">Password</label>
                <input
                  type="password"
                  id=""
                  className="form-control"
                  onChange={(e) => handelChange(e, "pass")}
                  value={user.pass}
                  name="Password"
                />
              </div>
              <div className="text-center mt-3">
                <button className="btn col-md-6 btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="blank bg-danger">
        <br />
        <br />
      </div>
      </div>
      <footer class="bg-dark text-center text-white">
        <div class="text-center">© 2023 Copyright : RB-Automobile</div>
      </footer>
    </>
  );
};
