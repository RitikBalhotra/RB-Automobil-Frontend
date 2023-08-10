import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../Service/UserService";

export const NavBar=()=>{

    const navigate=useNavigate();
    const doLogout=()=>{
        localStorage.removeItem("data");
            navigate('/login');
    }
    const user=getCurrentUser()||"UserNot LogedIn";

    return(
            <>
            <nav class="navbar navbar-expand-lg navbar-light bg-info">
    <div className="logo"  >
  <a class="navbar-brand  bg-danger text-white" href="/">RB AUTOMOBILES</a>
  </div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home</a>
      <a class="nav-item nav-link" href="#">Inventory</a>
      <a class="nav-item nav-link" href="#">Your Transactions</a>
      <a class="nav-item nav-link disabled" href="#"></a>
    </div>
  </div>
  <nav>
    <p>{user.name||'User Not Logged In'}</p>
    <button className="btn btn-warning" onClick={doLogout}>Logout</button>
  </nav>
</nav>
            </>
    )
}