import { AxiosError } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { historyTypes } from "../types/historyTypes";
import {
  fetchHistoryFailure,
  fetchHistorySuccess,
} from "../actions/historyActions";
import { fetchHistory } from "../services/history";

function* fetchHistorySaga() {
  try {
    const response = yield call(fetchHistory);
    yield put(
      fetchHistorySuccess({
        historyList: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchHistoryFailure({
        error: (e as AxiosError).message,
      })
    );
  }
}

function* historySaga() {
  yield all([takeLatest(historyTypes.FETCH_HISTORY_REQUEST, fetchHistorySaga)]);
}

export default historySaga;
