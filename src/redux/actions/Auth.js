import axiosInstance from "../../axios";
import actionTypes from "../actionTypes";

export const loginAction =
  ({ phone, password }, callback) =>
  async (dispatch) => {
    try {
      const res = await axiosInstance.post("/auth/login", { phone, password });
      console.log(res.data.sessionid);
      const user = await axiosInstance.get("/auth/getUser", {
        headers: { sessionid: res.data.sessionid },
      });
      dispatch({ type: actionTypes.SET_USER, payload: user.data });
      callback(true, user.data);
    } catch (err) {
      console.log(err);
      callback(false, err);
    }
  };

export const logoutAction = () => {
  return { type: actionTypes.LOGOUT };
};

export const signupAction =
  ({ name, phone, password }, callback) =>
  async (dispatch) => {
    try {
      const res = await axiosInstance.post("/auth/signup", {
        username: name,
        phone,
        password,
      });
      callback(true, res);
    } catch (err) {
      console.log(err);
      callback(false, err);
    }
  };

export const verifyOtpAction =
  ({ phone, OTP }, callback) =>
  async (dispatch) => {
    console.log("Asd");
    try {
      const res = await axiosInstance.post("/auth/validateOtp", {
        phone,
        otp: OTP,
      });
      console.log(res.data.sessionid);
      const user = await axiosInstance.get("/auth/getUser", {
        headers: { sessionid: res.data.sessionid },
      });
      dispatch({ type: actionTypes.SET_USER, payload: user.data });
      callback(true, user.data);
    } catch (err) {
      console.log(err);
      callback(false, err);
    }
  };
