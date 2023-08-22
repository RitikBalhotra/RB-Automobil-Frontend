import { myAxios } from "./Helper";

export const getAllAccept = () => {
  return myAxios
    .get("/a1/get/all/accepts")
    .then((resp) => resp.data)
    .catch((error) => console.log(error));
};
