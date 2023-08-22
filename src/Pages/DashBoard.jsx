import { useEffect, useState } from "react";
import { getAllCar } from "../Service/CarService";
import { Link } from "react-router-dom";

export const DashBoard = () => {
  const [cars, setCars] = useState([]);
  const getDataFromBackend = () => {
    getAllCar()
      .then((resp) => {
        setCars(resp);
      })
      .catch((error) => console.log("Error"));
  };
  useEffect(() => {
    checkLogedIn();
    getDataFromBackend();
  }, []);

  const checkLogedIn = () => {
    const data = localStorage.getItem("data");
    if (data != null) {
      return true;
    } else {
      return false;
    }
  };

  //{ ke hoya nai gl bnn d arre krna ki hai ???}
  // let items = JSON.parse(localStorage.getItem("items"));

  return (
    <>
      <div className="">
        <br />
      </div>
      <div className="row row-cols-3 ms-0.5">
        {cars.map((car) => (
        //  image nu center kr t cover kr    okkkk
         <div className="col mh-25"> 
              <div className="card ">
                <div className="card-header" style={{height:'250px',}}>
                <img src={"http://localhost:8082/api/c1/image/" + car.imageName} style={{width: '100%', height:'100%'}} ></img></div>
                <div className="card-body bg-info"> <h3 className="card-title">{car.name}</h3>
                  <div className="card-text">
                  <p> Model: {car.model}</p>
                  <p>Model: {car.price}</p> 
                  <p>Model: {car.colour}</p> 
                  </div>
                  <div className="text-center">
                    {checkLogedIn() ? (
                      <Link
                        to={"/transaction/" + car.id}
                        className="btn btn-success btn-sm ms-2 col-md-5"
                      >
                        BuyNow
                      </Link>
                    ) : (
                      <Link
                        to={"/login"}
                        className="btn btn-success btn-sm ms-2 col-md-5"
                      >
                        BuyNow
                      </Link>
                    )}
                  </div>
                </div>
              
                </div>  
            <br />
          </div>
        ))}
      </div>
      <footer class="bg-dark text-center text-white">
        <div class="text-center">© 2023 Copyright : RB-Automobile</div>
      </footer>
    </>
  );
};
