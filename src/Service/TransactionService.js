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


// set status (accept or reject)
export const statusService=(data)=>{
 return  myAxios.post("/t1/transaction/status", data)
    .then(resp=> resp.data).catch(error=>error)
}

// delete transaction
export const deleteTransaction=(id)=>{
  return myAxios.delete(`/t1/delete/transaction/${id}`)
  .then((resp)=> console.log(resp))
  .catch((error)=> console.log(error));
}