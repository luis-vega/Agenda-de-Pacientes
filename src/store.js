import {createStore, combineReducers, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";

import users from "./reducers/userReducer";
import doctors from "./reducers/doctorReducer"
import rooms from "./reducers/roomReducer"
import procedures from "./reducers/procedureReducer"

export default createStore(combineReducers({users,doctors,rooms,procedures}),applyMiddleware(createLogger())
);
