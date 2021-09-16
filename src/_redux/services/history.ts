import axios from "axios";
import { IHistory } from "../../models/IHistory";

export const fetchHistory = () =>
  axios.get<IHistory[]>("https://api.spacexdata.com/v3/history");
