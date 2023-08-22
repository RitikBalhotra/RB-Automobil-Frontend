import { myAxios } from "./Helper";

export const getAllReject = () => {
  return myAxios
    .get("/r1/get/all/rejects")
    .then((resp) => resp.data)
    .catch((error) => error);
};
