import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import formReducer from "../pages/signUp-signIn/formSlice";

export default configureStore({
  reducer: {
    userInfo: userReducer,
    formInfo: formReducer,
  },
});
