import { ILaunch } from "../../models/ILaunch";
import { IReduxAction } from "types/IReduxAction";
import { launcheTypes } from "../types/launcheTypes";

export interface LaunchState {
  pending: boolean;
  launches: ILaunch[];
  error: string | null;
}

const initialState: LaunchState = {
  pending: false,
  launches: [],
  error: null,
};

export default (
  state = initialState,
  action: IReduxAction<keyof launcheTypes, LaunchState>
) => {
  switch (action.type) {
    case launcheTypes.FETCH_LAUNCHES_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case launcheTypes.FETCH_LAUNCHES_SUCCESS:
      return {
        ...state,
        pending: false,
        launches: action.payload?.launches,
        error: null,
      };
    case launcheTypes.FETCH_LAUNCHES_FAILURE:
      return {
        ...state,
        pending: false,
        launches: [],
        error: action.payload?.error,
      };
    default:
      return {
        ...state,
      };
  }
};
