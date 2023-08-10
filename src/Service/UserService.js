
import { myAxios } from "../Service/Helper";

//Sign up 
export const submitUser=(data)=>{
    return  myAxios.post("/u1/signUp",data).then((resp)=>resp.data)
                    .catch((error)=>console.log(error));
};

//LOGIN
export const loginUser=(user)=>{
    return myAxios.post("/u1/login",user).then((resp)=>resp.data)
                    .catch((error)=>console.log(error));
};

// getAllCar
export const getAllCar=()=>{
    return myAxios.get("/c1/get/All/Cars").then((resp)=>resp.data)
        .catch((error)=>console.log(error));
};

export const submitTransaction=()=>{
    return myAxios.post("/t1/buy/Now").then((resp)=>resp.data)
    .catch((error)=>console.log(error));
};


//Check Logged In
export const isLoggedIn=()=>{
    let data = localStorage.getItem("data");
    if (data != null) {
        console.log(data.resp);
      return true;
    } else {
      return false
}
}
export const getCurrentUser=()=>{
    let data = JSON.parse(localStorage.getItem("data"))
    return data;
}