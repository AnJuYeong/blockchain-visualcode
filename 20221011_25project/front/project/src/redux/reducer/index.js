import { combineReducers } from "redux";
import signin from "./signinReducer";
import boardReducer from "./boardReducer"

const rootReducer = combineReducers({signin,boardReducer});

export default rootReducer;