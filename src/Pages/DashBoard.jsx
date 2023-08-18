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
      .catch((error) => 
      console.log("Error"));
  }
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

  // let items = JSON.parse(localStorage.getItem("items"));

  return (
    <>
      <div className="row row-cols-3 g-3">
        {cars.map((car) => (
          <div className="col" key={car.id}>
            <div className="card">
              {console.log(car.imageName)}
              <img
                src={"https://localhost:8082/api/c1/image/"+car.imageName}
                height={100}
                width={100}
                className="card-img-top"
                alt="Hollywood Sign on The Hill"
              ></img>
              <div className="card-body bg-info">
                <h3 className="card-title">{car.name}</h3>
                <h5 className="text text-danger font-weight-bolder ">
                  Model: {car.model} <br />
                  Price: {car.price} <br />
                  Colour: {car.colour}
                </h5>
                <p>{car.color}</p>
                <div className="text-center">
                {checkLogedIn()?
                  <Link to={'/transaction/'+car.id} className="btn btn-success btn-sm ms-2 col-md-5"
                    >BuyNow</Link>
                :
                  <Link to={'/login'} className="btn btn-success btn-sm ms-2 col-md-5"
                    >BuyNow</Link>
                }
                </div>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
    </>
  );
};
