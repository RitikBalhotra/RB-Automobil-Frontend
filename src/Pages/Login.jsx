import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../Service/UserService";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    pass: "",
  });
  const navigate = useNavigate();
  const readFieldData = (event, props) => {
    const fieldValue = { ...user, [props]: event.target.value };
    setUser(fieldValue);
  };
  const onSubmitData = (event) => {
    event.preventDefault();
    loginUser(user)
      .then((resp) => {
        // console.log(resp);
        if (
          resp.email === 'ritikpotter07@gmail.com' &&
          resp.pass === 'ritik@07'
        ) {
          console.log("Admin is here");
          navigate("/AdminDashboard");
          localStorage.setItem("data", JSON.stringify(resp));
        }
        else{
          navigate("/");
          localStorage.setItem("data", JSON.stringify(resp));
        }
        
      })
      .catch((error) => {
        console.log(error,);
        alert("Please sign up First");
      });
  };
  return (
    <>
    <div className="box  bg-danger">
      <div className="d-flex justify-content-center align-item-center bg-danger">
        <div className="card shadow col-md-6 bg-warning">
          <div className="card-header bg-black text-white ">
            <div className="text-center">
              {" "}
              <p className="fs-3 fw-bolder">Login here</p>{" "}
            </div>
          </div>
          <div className="card-body">
            <form className="form" onSubmit={onSubmitData}>
              <div className="mb-2">
                <label htmlFor="name">Email</label>
                <input
                  type="email"
                  required
                  className="form-control"
                  onChange={(e) => readFieldData(e, "email")}
                  value={user.email}
                  name="name"
                  placeholder="Enter Email Here"
                />
              </div>

              <div className="mb-2">
                <label htmlFor="name">Password</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => readFieldData(e, "pass")}
                  value={user.pass}
                  required
                  name="name"
                  placeholder="Enter Password Here"
                />
              </div>
              <div className=" mt-3 mb-2 ">
                don't have an Account{" "}
                <span>
                  {" "}
                  <Link to={"/addUser"} className="signup text-ifo">Sign-Up here</Link>
                </span>
              </div>
              <div className="text-center mt-3">
                <button className="btn col-md-6 btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
       <br />
       <br />
       <br /><br /><br /></div>
       


  <footer class="bg-dark text-center text-white">

  <div class="text-center">
    © 2023 Copyright :
    RB-Automobile
  </div>
</footer>
  


    </>
  );
};
