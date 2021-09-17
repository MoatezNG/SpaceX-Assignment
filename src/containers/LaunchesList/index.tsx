import LaunchCard from "../../components/LaunchCard";
import React, { useEffect, useMemo } from "react";
import { useLaunchList } from "./useLaunchList";

const LaunchesList: React.FC = () => {
  const { error, pending, onSearchByDate, filtredData, onSearchByMissionName } =
    useLaunchList();
  return (
    <div>
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <>
          <div className="row">
            <input
              onChange={onSearchByMissionName}
              type="text"
              placeholder="Search by mission name"
            />
            <input type="month" onChange={onSearchByDate} />
          </div>
          <div className="grid">
            {filtredData?.map(
              ({ mission_name, rocket, flight_number, links }, index) => (
                <React.Fragment key={flight_number + index}>
                  <LaunchCard {...{ mission_name, rocket, links }} />
                </React.Fragment>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default LaunchesList;
