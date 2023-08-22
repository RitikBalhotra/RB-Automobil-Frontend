import { myAxios } from "./Helper";


//get car by id
export const getCarById = (id) => {
  return myAxios
    .get("/c1/get/car/" + id)
    .then((resp) => resp.data)
    .catch((error) => console.log(error));
};

//add car 
export const addCar=(data)=>{
  return myAxios.post("/c1/add/car",data,{
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }).then((resp=>resp.data)).catch((error)=>error);
};


// getAllCar
export const getAllCar = () => {
  return myAxios
    .get("/c1/get/All/Cars")
    .then((resp) => resp.data)
    .catch((error) => console.log(error));
};

// Delete Car
export const deleteCar=(id)=>
{
  // const cid = id.id;
  return myAxios.delete("/c1/delete/Car/"+id)
  .then((resp)=> console.log(resp))
  .catch((error)=> error);
}

// update car
export const UpdateCar=(data)=>
{
  return myAxios.put("c1/update/car", data)
  .then((resp=> resp.data))
  .catch((error)=> error);
}