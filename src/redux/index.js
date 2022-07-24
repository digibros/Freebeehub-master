import { combineReducers } from "redux";
import authReducer from "./reducers/Auth";
const AllReducer = combineReducers({
  user: authReducer,
});
export default AllReducer;
