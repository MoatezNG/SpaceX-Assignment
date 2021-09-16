import axios from "axios";
import { ILaunch } from "../../models/ILaunch";

export const fetchLaunches = () =>
  axios.get<ILaunch[]>("https://api.spacexdata.com/v3/launches");
