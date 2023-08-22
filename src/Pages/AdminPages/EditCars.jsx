import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UpdateCar, getCarById } from "../../Service/CarService";

export const EditCar = () => {
  const navigate = useNavigate();
  const [car, setCar] = useState({
    id: "",
    name: "",
    model: "",
    price: "",
    price: "",
  });
  const handelChange = (e, props) => {
    setCar({ ...car, [props]: e.target.value });
  };
  const id = useParams();
  const eid = id.id;

  useEffect(() => {
    getCarById(eid)
      .then((resp) => setCar(resp))
      .catch((error) => {});
  }, {});

  const SubmitData = (event) => {
    event.preventDefault();
    UpdateCar(car)
      .then((resp) => {
        navigate("/AdminCarDashboard");
      })
      .catch((error) => {
        alert("Something went wrong");
      });
  };

  return (
    <>
    <div className="blanl bg-danger">
      <br />
      <div className="d-flex justify-content-center align-item-center ">
        <div className="conatiner col-md-9">
          <form onSubmit={SubmitData} className="form-control">
            <div className="mb-1">
              <label htmlFor="Car Name">Image</label>
              <input
                className="form-control"
                type="file"
                accept="image/*"
                name="image"
                value={car.image_name}
              />
            </div>
            <div className="mb-1">
              <label htmlFor="Car Name">Car Name</label>
              <input
                className="form-control"
                type="text"
                id=""
                name="name"
                onChange={(e) => handelChange(e, "name")}
                value={car.name}
              />
            </div>
            <div className="mb-1">
              <label htmlFor="Car Name">Car Model</label>
              <input
                className="form-control"
                type="number"
                id=""
                name="model"
                onChange={(e) => handelChange(e, "model")}
                value={car.model}
              />
            </div>
            <div className="mb-1">
              <label htmlFor="Car Name">Car Colour </label>
              <input
                type="text"
                className="form-control"
                id=""
                name="colour"
                onChange={(e) => handelChange(e, "colour")}
                value={car.colour}
              />
            </div>
            <div className="mb-1">
              <label htmlFor="Car Name">Car Price</label>
              <input
                className="form-control"
                type="number"
                id=""
                name="price"
                onChange={(e) => handelChange(e, "price")}
                value={car.price}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary col-md-4 me-2 mb-2 mt-2"
              >
                Submit
              </button>
              <button
                type="reset"
                className=" btn btn-warning col-md-4 ms-2 mb-2 mt-2 "
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
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
