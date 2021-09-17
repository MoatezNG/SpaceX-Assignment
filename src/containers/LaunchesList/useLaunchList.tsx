import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLaunchesRequest } from "../../_redux/actions/launchActions";
import { RootState } from "../../_redux/reducers/rootReducer";

export const useLaunchList = () => {
  const dispatch = useDispatch();
  const [missionName, setMissionName] = useState("");
  const [missionDate, setMissionDate] = useState("");
  const { pending, launches, error } = useSelector(
    (state: RootState) => state.launchReducer
  );
  const onSearchByMissionName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMissionName(e.target.value);
  };
  const onSearchByDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMissionDate(e.target.value);
  };
  useEffect(() => {
    dispatch(fetchLaunchesRequest());
  }, [dispatch]);
  const filtredData = useMemo(() => {
    let missionNameRegex = new RegExp("^" + missionName, "i");
    let missionDateRegex = new RegExp("^" + missionDate, "i");
    return launches.filter(
      ({ mission_name, launch_date_utc }) =>
        mission_name.toLowerCase().match(missionNameRegex) &&
        `${launch_date_utc.toString().split("-")[0]}-${
          launch_date_utc.toString().split("-")[1]
        }`.match(missionDateRegex)
    );
  }, [missionName, launches, missionDate]);

  console.log(filtredData);
  return {
    pending,
    launches,
    error,
    filtredData,
    onSearchByMissionName,
    onSearchByDate,
  };
};
