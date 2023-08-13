import { myAxios } from "./Helper";

export const getCarById = (id) => {
  const cid = id.id;

  return myAxios
    .get("/c1/get/car/" + cid)
    .then((resp) => resp.data)
    .catch((error) => console.log(error));
};
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
