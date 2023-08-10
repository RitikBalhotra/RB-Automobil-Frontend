import { Component, useEffect, useState } from "react";
import { getAllCar, isLoggedIn } from "../Service/UserService";
import { Link } from "react-router-dom";

export const DashBoard = () => {
  const [cars, setCars] = useState([]);
  const [data, setData] = useState(false);
  const getDataFromBackend = () => {
    getAllCar()
      .then((resp) => {
        setCars(resp);
      })
      .catch((error) => {});
  };
  let result = false;
  useEffect(() => {
    console.log(checkLogedIn());

    getDataFromBackend();
  }, []);

  const checkLogedIn = () => {
    const data = localStorage.getItem("data");
    if (data != null) {
      return true;
      setData(true);
    } else {
      setData(false);
      return false;
    }
  };

 
  let items = JSON.parse(localStorage.getItem('items'));
      

  return (
    <>
      <div className="row row-cols-3 g-3">
        {cars.map((car) => (
          <div className="col" key={car.id}>
            <div className="card">
              <img 
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                className="card-img-top"
                alt="Hollywood Sign on The Hill"
              />
              <div className="card-body bg-info">
                  <h3 className="card-title">{car.name}</h3>
                  <h5 className="text text-danger font-weight-bolder ">
                    Model: {car.model} <br />
                    Price: {car.price} <br />
                    Colour: {car.colour}
                  </h5>
                  <p>{car.color}</p>
                  <div className="text-center">
                  <Link
                      to={`/Transaction}`}
                      className="btn btn-success btn-sm ms-2 col-md-5"
                    >
                      {" "}
                      BUY NOW
                    </Link>
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
