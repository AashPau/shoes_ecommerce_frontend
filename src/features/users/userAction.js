import { setUser } from "./userSlice";
import { fetchUserInfo } from "../../helper/userAxios";

export const getUserObj = () => async (dispatch) => {
  const { status, user } = await fetchUserInfo();
  if (status === "success") {
    //update store
    dispatch(setUser(user));
  }
};
