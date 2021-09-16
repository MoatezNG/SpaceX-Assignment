import { AxiosError } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { launcheTypes } from "../types/launcheTypes";
import {
  fetchLaunchesSuccess,
  fetchLaunchesFailure,
} from "../actions/launchActions";
import { fetchLaunches } from "../services/launch";

function* fetchLaunchSaga() {
  try {
    const response = yield call(fetchLaunches);
    yield put(
      fetchLaunchesSuccess({
        launches: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchLaunchesFailure({
        error: (e as AxiosError).message,
      })
    );
  }
}

function* historySaga() {
  yield all([takeLatest(launcheTypes.FETCH_LAUNCHES_REQUEST, fetchLaunchSaga)]);
}

export default historySaga;
