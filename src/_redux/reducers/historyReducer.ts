import { IReduxAction } from "types/IReduxAction";
import { HistoryState, historyTypes } from "../types/historyTypes";

const initialState: HistoryState = {
  pending: false,
  historyList: [],
  error: null,
};

export default (
  state = initialState,
  action: IReduxAction<keyof historyTypes, HistoryState>
) => {
  switch (action.type) {
    case historyTypes.FETCH_HISTORY_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case historyTypes.FETCH_HISTORY_SUCCESS:
      return {
        ...state,
        pending: false,
        historyList: action.payload?.historyList,
        error: null,
      };
    case historyTypes.FETCH_HISTORY_FAILURE:
      return {
        ...state,
        pending: false,
        historyList: [],
        error: action.payload?.error,
      };
    default:
      return {
        ...state,
      };
  }
};
