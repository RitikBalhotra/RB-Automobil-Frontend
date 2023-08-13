import React, { useState } from "react";
import { addCar } from "../../Service/CarService";


export const AddCar = () => {
    const [image,setImage]=useState({});
  const [car, setCar] = useState({
    name: "",
    price: "",
    model: "",
    colour: "",
    image: null,
  });
  const handelChange = (event, params) => {
    event.preventDefault();
    setCar({...car,[params]:event.target.value})
  };
  const handelChangeImage = (event) => {
    event.preventDefault();
    let ImageData = new FormData();
    let file = event.target.files[0];
    ImageData.append("image", file);
    setCar({...car,image:file});
   setImage(file);
  };
  const OnSubmit = (event) => {
    event.preventDefault();
    addCar(car).then((resp)=>{
        console.log(resp);
    }).then((error)=>{
        console.log(error);
    })
    
  };

  return (
    <>
      <div className="d-flex justify-content-center align-item-center mt-4">
        <div className="conatiner col-md-9">
          <form onSubmit={OnSubmit} className="form-control">
            <div className="mb-1">
              <label htmlFor="Car Name">Image</label>
              <input
              className="form-control"
                type="file"
                accept="image/*"
                required
                name="image"
                onChange={handelChangeImage}
              />
            </div>
            <div className="mb-1">
              <label htmlFor="Car Name">Car Name</label>
              <input
              className="form-control"
                type="text"
                required
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
                required
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
                required
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
                required
                name="price"
                onChange={(e) => handelChange(e, "price")}
                value={car.price}
              />
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-primary col-md-4 me-2 mb-2 mt-2">Submit</button>
                <button type="reset" className=" btn btn-warning col-md-4 ms-2 mb-2 mt-2 ">Reset</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
