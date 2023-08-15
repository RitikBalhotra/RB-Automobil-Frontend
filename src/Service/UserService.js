import { myAxios } from "../Service/Helper";

//Sign up
export const submitUser = (data) => {
  return myAxios
    .post("/u1/signUp", data)
    .then((resp) => resp.data)
    .catch((error) => console.log(error));
};

//LOGIN
export const loginUser = (user) => {
  return myAxios
    .post("/u1/login", user)
    .then((resp) => resp.data)
    .catch((error) => console.log(error));
};

//Check Logged In
export const isLoggedIn = () => {
  let data = localStorage.getItem("data");
  if (data != null) {
    return true;
  } else {
    return false;
  }
};

// get current user
export const getCurrentUser = () => {
  let data = JSON.parse(localStorage.getItem("data"));
  return data;
};


//get current user id
export const getCurrentUserId = () => {
  let data = JSON.parse(localStorage.getItem("data"));
  return data.email;
};

//get user by Email
export const getUserByEmail = (email) => {
  return myAxios
    .get("/u1/get/By/Email/" + email)
    .then((resp) => resp.data)
    .catch((error) => console.log(error));
};

// get All Users
export const getAllUser=()=>
{
  return myAxios
  .get("u1/get/all/user")
  .then((resp) => resp.data)
  .catch((error) => console.log(error));

};

//Delete USer 
export const deleteUsr=(id)=>
{
  return myAxios.delete(`u1/delete/User/${id}`)
  .then((resp)=> console.log(resp))
  .catch((error)=> console.log(error));
};

//get User By Id
export const getUserById=(id)=>
{
  return myAxios.get("/u1/getById/"+id)
  .then((resp)=> resp.data)
  .catch((error)=>console.log(error));
}

//Update User
export const UpdateUser= (data)=>{
        return myAxios.put("/u1/update/User", data)
        .then((resp)=> resp.data)
        .catch((error)=> error);
}