import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLaunchesRequest } from "../_redux/actions/launchActions";
import { RootState } from "../_redux/reducers/rootReducer";

const LaunchesList: React.FC = () => {
  const dispatch = useDispatch();
  const { pending, launches, error } = useSelector(
    (state: RootState) => state.launchReducer
  );

  useEffect(() => {
    dispatch(fetchLaunchesRequest());
  }, []);

  return (
    <div>
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        launches?.map((launch, index) => (
          <div key={launch.flight_number}>
            {++index}. {launch.mission_name}
          </div>
        ))
      )}
    </div>
  );
};

export default LaunchesList;
