import { IHistory } from "models/IHistory";

export interface HistoryState {
  pending: boolean;
  historyList: IHistory[];
  error: string | null;
}

export enum historyTypes {
  FETCH_HISTORY_REQUEST = "FETCH_HISTORY_REQUEST",
  FETCH_HISTORY_SUCCESS = "FETCH_HISTORY_SUCCESS",
  FETCH_HISTORY_FAILURE = "FETCH_HISTORY_FAILURE",
}
