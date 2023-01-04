import * as React from "react";
import { YieldStat, RespData } from "./Interface";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridToolbar,
} from "@mui/x-data-grid";

interface YieldProductStatsProps {
  ProductData: YieldStat[];
}
const columns: GridColDef[] = [
  { field: "Season", headerName: "Season", width: 70 },
  { field: "Area", headerName: "Area", width: 130 },
  { field: "Createdon", headerName: "Created on", width: 130 },
  {
    field: "Product",
    headerName: "Product",
    // type: "number",
    width: 90,
  },
  {
    field: "Variety",
    headerName: "Variety",
    // type: "number",
    width: 90,
  },
  {
    field: "NetWeight",
    headerName: "Net Weight",
    // type: "number",
    width: 90,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.NetWeight || ""} ${params.row.NetWeightRef || ""}`,
  },
  {
    field: "NoofLeaves",
    headerName: "Leaves Qty",
    // type: "number",
    width: 90,
  },
];



const YieldProductStats: React.FC<YieldProductStatsProps> = (props) => {
  // export default function YieldProductStats() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={props.ProductData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        components={{ Toolbar: GridToolbar }}
        density="compact"
        // checkboxSelection
      />
    </div>
  );
};

export default YieldProductStats;
