import axios from "axios";

const BASE_URL = "http://localhost:8082/api";

 export const myAxios=axios.create({
  baseURL:BASE_URL,
 });