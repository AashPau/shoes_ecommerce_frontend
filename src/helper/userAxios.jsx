import { apiProcesser } from "./AxiosHelper";

//end points
const serverURL = import.meta.env.VITE_APP_ROOTSERVER;
const userEP = serverURL + "/users";

//end points for the new user creation
export const postNewUser = async (obj) => {
  const axiosObj = {
    method: "post",
    url: userEP,
    data: obj,
  };
  //   console.log(axiosObj);
  return await apiProcesser(axiosObj);
};

//end point for login
export const signInUser = async (obj) => {
  const axiosObj = {
    method: "post",
    url: userEP + "/login",
    data: obj,
  };
  //   console.log(axiosObj);
  return await apiProcesser(axiosObj);
};

//fetch user
export const fetchUserInfo = () => {
  const axiosObj = {
    method: "get",
    url: userEP,
    isPrivate: true,
  };
  return apiProcesser(axiosObj);
};
