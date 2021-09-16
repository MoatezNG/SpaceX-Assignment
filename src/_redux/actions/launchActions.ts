import { ILaunch } from "models/ILaunch";
import { IReduxAction } from "types/IReduxAction";
import { launcheTypes } from "../types/launcheTypes";

export const fetchLaunchesRequest = (): IReduxAction<
  typeof launcheTypes["FETCH_LAUNCHES_REQUEST"],
  unknown
> => ({
  type: launcheTypes.FETCH_LAUNCHES_REQUEST,
  payload: {},
});

export const fetchLaunchesSuccess = (payload: {
  launches: ILaunch[];
}): IReduxAction<
  typeof launcheTypes["FETCH_LAUNCHES_SUCCESS"],
  { launches: ILaunch[] }
> => ({
  type: launcheTypes.FETCH_LAUNCHES_SUCCESS,
  payload,
});

export const fetchLaunchesFailure = (payload: {
  error: string;
}): IReduxAction<
  typeof launcheTypes["FETCH_LAUNCHES_FAILURE"],
  { error: string }
> => ({
  type: launcheTypes.FETCH_LAUNCHES_FAILURE,
  payload,
});
