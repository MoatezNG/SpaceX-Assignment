import { ILaunch } from "models/ILaunch";
import React from "react";

const LaunchCard: React.FC<Pick<ILaunch, "mission_name" | "rocket" | "links">> =
  ({
    mission_name,
    rocket: {
      second_stage: { payloads },
    },
    links,
  }) => {
    const { nationality, payload_type, manufacturer } = payloads[0];
    return (
      <div className="card">
        <img src={links.mission_patch_small} />
        <h2>{mission_name}</h2>
        <div>
          <div>
            <h3>Type : {payload_type}</h3>
            <h3>Nationality : {nationality}</h3>
            <h3>Manufacturer :{manufacturer}</h3>
          </div>
        </div>
      </div>
    );
  };

export default LaunchCard;
