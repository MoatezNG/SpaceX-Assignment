import { Columns } from "components/DataTable/Columns";
import { IHistory } from "models/IHistory";
import { Link } from "react-router-dom";


export default [
  {
    title: 'Description',
    selector: 'details',
  },
  {
    title: 'Date',
    cell: (row) => <div style={{width : '6rem'}}>{row.event_date_utc.substring(0, 10)}</div>,
  },
  {
    title: 'Link',
    cell : (row) => <a href={row.links.article}>{row.links.article}</a>
  },
] as Columns<IHistory>[];