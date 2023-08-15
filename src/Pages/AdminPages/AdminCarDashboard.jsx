import React from "react";
import { useEffect, useState } from "react";
import { deleteCar, getAllCar } from "../../Service/CarService";
import { Link } from "react-router-dom";

export const AdminCarDashboard = () => {
  const [cars, setCars] = useState([]);
  const getDataFromBackend = () => {
    getAllCar()
      .then((resp) => {
        setCars(resp);
      })
      .catch((error) => {});
  };

  //use Effect
  useEffect(() => {
    checkLogedIn();
    getDataFromBackend();
  }, []);

  //Check loged In
  const checkLogedIn = () => {
    const data = localStorage.getItem("data");
    if (data != null) {
      return true;
    } else {
      return false;
    }
  };

 //Delete Car 
 const deleteCars=(id)=>{
  deleteCar(id)
  .then((resp)=>
  console.log("Deleted Car Successfully"))
  .catch((error)=>
  console.log("Something Went wrong"));
 }
  return (
    <>
       <div class="container  col-md-9 justify-content-center align-item-center mt-1 mb-1  ">
          <div class="card text-center ">
            <div class="card-body bg-success text-white">
              {/* <h3 class="card-title">Cars</h3> */}
              <h4 class="card-text">Available cars:  {cars.length}</h4>
              <a class="btn col-md-9 btn-primary text-white
              " href="/add/car">Add more Cars</a>
            </div>
          </div>
        </div>
      <div className="row row-cols-3 g-3">
        {cars.map((car) => (
          <div className="col" key={car.id}>
            <div className="card">
              {console.log(car.imageName)}
              <img
                src={"https://localhost:8082/api/c1/" + car.imageName}
                height={100}
                width={100}
                className="card-img-top"
                alt="Hollywood Sign on The Hill"
              ></img>
              <div className="card-body bg-info ">
                <h3 className="card-title text-danger">{car.name}</h3>
                <h5 className="text text-black font-weight-bolder ">
                  Model: {car.model} <br />
                  Price: {car.price} <br />
                  Colour: {car.colour}
                </h5>
                <p>{car.color}</p>
                {/* <div className="text-center"> */}
                <button  
                onClick={(e) => deleteCars(car.id)}
                 className="btn btn-danger ms-4 col-md-5 btn-sm">
                  Delete
                </button>
                <Link to={`/EditCar/${car.id}`}className="btn btn-warning btn-sm ms-2 col-md-5">
                  {" "}
                  Edit
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
