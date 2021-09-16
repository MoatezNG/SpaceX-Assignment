export interface IReduxAction<T, R> {
  type: T;
  payload: R;
}
