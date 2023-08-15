import { myAxios } from "./Helper";

//Submit transaction
export const submitTransaction = (data) => {
  return myAxios
    .post("t1/buy/now",data)
    .then((resp) => resp.data)
    .catch((error) => console.log(error));
};


//get all transaction
export const getAllTransaction=()=>
{
  return myAxios
  .get("/t1/getAll/transaction")
  .then((resp)=> resp.data)
  .catch((error)=> console.log(error))
}

