import actionTypes from "../actionTypes";

const initial = { user: {}, isAuthenticated: false };

const authReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_USER:
      return { ...state, user: payload, isAuthenticated: true };
    case actionTypes.LOGOUT:
      localStorage.clear();
      return { ...state, user: {}, isAuthenticated: false };
    default:
      return state;
  }
};
export default authReducer;
