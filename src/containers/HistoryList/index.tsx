import DataTable from "../../components/DataTable";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHistoryRequest } from "../../_redux/actions/historyActions";
import { RootState } from "../../_redux/reducers/rootReducer";
import historyColumns from "./historyColumns";

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
        <DataTable
        keyExtractor={({ id }) => id.toString()}
        columns={historyColumns}
        data={historyList}
      />
      )}
    </div>
  );
};

export default HistoryList;
