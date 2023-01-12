import * as React from "react";
import { YieldStat, RespData } from "./Interface";
import Container from "react-bootstrap/Container";
import ResponsiveAppBar from "../components/AppBar";
import {
  DataGrid,
  GridColumnHeaderParams,
  GridColDef,
  GridValueGetterParams,
  GridToolbar,
} from "@mui/x-data-grid";
import { FormattedMessage } from "react-intl";
import Footer from "./footer";

interface YieldProductStatsProps {
  handleMassUplModalOpen: () => void;
  setMessages: (locale: any) => void;
  ProductData: YieldStat[];
}
const columns: GridColDef[] = [
  {
    field: "Season",
    // headerName: "Season",
    renderHeader: (params: GridColumnHeaderParams) => (
      <FormattedMessage id="YieldProdStats.Season"></FormattedMessage>
    ),
    type: "number",
    width: 120,
  },
  {
    field: "Area",
    // headerName: "Area",
    renderHeader: (params: GridColumnHeaderParams) => (
      <FormattedMessage id="YieldProdStats.Area"></FormattedMessage>
    ),
    width: 130,
  },
  {
    field: "Createdon",
    // headerName: "Created on"
    renderHeader: (params: GridColumnHeaderParams) => (
      <FormattedMessage id="YieldProdStats.Createdon"></FormattedMessage>
    ),
    width: 130,
  },
  {
    field: "Product",
    renderHeader: (params: GridColumnHeaderParams) => (
      <FormattedMessage id="YieldProdStats.Product"></FormattedMessage>
    ),
    width: 130,
  },
  {
    field: "Variety",
    // headerName: "Variety",
    renderHeader: (params: GridColumnHeaderParams) => (
      <FormattedMessage id="YieldProdStats.Variety"></FormattedMessage>
    ),
    // type: "number",
    width: 90,
  },
  {
    field: "NetWeight",
    renderHeader: (params: GridColumnHeaderParams) => (
      <FormattedMessage id="YieldProdStats.NetWeight"></FormattedMessage>
    ),
    // headerName: "Net Weight",
    // type: "number",
    width: 120,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.NetWeight || ""} ${params.row.NetWeightRef || ""}`,
  },
  {
    field: "NoofLeaves",
    renderHeader: (params: GridColumnHeaderParams) => (
      <FormattedMessage id="YieldProdStats.NoofLeaves"></FormattedMessage>
    ),
    // headerName: "Leaves Qty",
    // type: "number",
    width: 160,
  },
];

const YieldProductStats: React.FC<YieldProductStatsProps> = (props) => {
  // export default function YieldProductStats() {
  return (
    <div>
      <ResponsiveAppBar
        handleMassUplModalOpen={props.handleMassUplModalOpen}
        setMessages={props.setMessages}
      ></ResponsiveAppBar>
      <Container>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={props.ProductData}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            components={{ Toolbar: GridToolbar }}
            density="compact"
            autoHeight={true}
            disableSelectionOnClick={true}
          // loading={true}
          // checkboxSelection
          />
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default YieldProductStats;
