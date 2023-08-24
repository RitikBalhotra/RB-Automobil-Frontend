import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../Service/UserService";
import { isLoggedIn } from "../Service/UserService";
export const NavBar=()=>{

    const navigate=useNavigate();
    const doLogout=()=>{
        localStorage.removeItem("data");
            navigate('/login');
    }
    const doLogin=()=>{
      navigate('/login');
      // console.log("in login page");
    }
    const user=getCurrentUser()||"UserNot LogedIn";

    const isLoggedIn = () => {
      let data = localStorage.getItem("data");
      if (data != null) {
        return true;
      } else {
        return false;
      }
    };

    return(
            <>
            <nav class="navbar navbar-expand-lg navbar-light " style={{backgroundColor:'#232959', color:'white'}}>
    <div className="logo"  >
  <a class="navbar-brand  bg-danger text-white" href="/">RB AUTOMOBILES</a>
  </div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav ">
      <a class="nav-item nav-link  text-light active" href="/">Home</a>
      <a class="nav-item nav-link text-light active" href="#">Your Transactions</a>
     <a class="nav-item nav-link active" href="#"></a>
     {/* <a class="nav-item nav-link active" href="/login">User Login</a> */}
    </div>
  </div>
  <nav>
    <p>{user.name||'User Not Logged In'}</p>
    {isLoggedIn()?
    <button className="btn btn-warning" onClick={doLogout}>Logout</button>
    :
    <button className="btn btn-warning" onClick={doLogin}>Login</button>

  }
  </nav>
</nav>
            </>
    )
}