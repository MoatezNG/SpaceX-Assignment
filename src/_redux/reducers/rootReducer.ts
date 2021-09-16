import { combineReducers } from "redux";
import historyReducer from "./historyReducer";

const rootReducer = combineReducers({
  historyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
