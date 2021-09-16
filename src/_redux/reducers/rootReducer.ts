import { combineReducers } from "redux";
import historyReducer from "./historyReducer";
import launchReducer from "./launchReducer";

const rootReducer = combineReducers({
  historyReducer,
  launchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
