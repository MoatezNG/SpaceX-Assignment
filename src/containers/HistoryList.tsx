import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHistoryRequest } from "../_redux/actions/historyActions";
import { RootState } from "../_redux/reducers/rootReducer";

const HistoryList: React.FC = () => {
  const dispatch = useDispatch();
  const { pending, historyList, error } = useSelector(
    (state: RootState) => state.historyReducer
  );

  useEffect(() => {
    dispatch(fetchHistoryRequest());
  }, []);

  return (
    <div>
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        historyList?.map((history, index) => (
          <div key={history.id}>
            {++index}. {history.title}
          </div>
        ))
      )}
    </div>
  );
};

export default HistoryList;
