import { IHistory } from "models/IHistory";
import { IReduxAction } from "types/IReduxAction";
import { historyTypes } from "../types/historyTypes";

export const fetchHistoryRequest = (): IReduxAction<
  typeof historyTypes["FETCH_HISTORY_REQUEST"],
  undefined
> => ({
  type: historyTypes.FETCH_HISTORY_REQUEST,
  payload: undefined,
});

export const fetchHistorySuccess = (payload: {
  historyList: IHistory[];
}): IReduxAction<
  typeof historyTypes["FETCH_HISTORY_SUCCESS"],
  { historyList: IHistory[] }
> => ({
  type: historyTypes.FETCH_HISTORY_SUCCESS,
  payload,
});

export const fetchHistoryFailure = (payload: {
  error: string;
}): IReduxAction<
  typeof historyTypes["FETCH_HISTORY_FAILURE"],
  { error: string }
> => ({
  type: historyTypes.FETCH_HISTORY_FAILURE,
  payload,
});
