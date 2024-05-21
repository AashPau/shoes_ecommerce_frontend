import { apiProcesser } from "./AxiosHelper";

//end points
const serverURL = import.meta.env.VITE_APP_ROOTSERVER;
const userEP = serverURL + "/users";
console.log("userEP " + userEP);
export const postNewUser = async (obj) => {
  const axiosObj = {
    method: "post",
    url: userEP,
    data: obj,
  };
  console.log(axiosObj);
  return await apiProcesser(axiosObj);
};
