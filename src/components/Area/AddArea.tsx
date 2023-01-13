import React, { useState, useEffect } from "react";
import { AddAreaDetails } from "../Interface";
import axios from "axios";
import logo from "./logo.svg";
import "../../App.css";
import { TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { FormattedMessage } from "react-intl";
import ResponsiveAppBar from "../AppBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { IntlProvider } from "react-intl";
import Tamil from "../../lang/ta.json";
import English from "../../lang/en.json";
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import MessageBar from "../SnackBar";
import AgriImpex from "../../modal/Modal";

interface AddAreaProps {
  handleMassUplModalOpen: () => void;
  setMessages: (locale: any) => void;
  CurrSeason: string;
  AgriImpexRef: AgriImpex;
}

const AddArea: React.FC<AddAreaProps> = (props) => {
  const [Area, setArea] = useState<AddAreaDetails>(
    props.AgriImpexRef.defaultAreaDetails
  );
  const [openMsgBar, setopenMsgBar] = React.useState(false);
  const [Message, setMessage] = React.useState("");

  const handleopenMsgBar = () => {
    setopenMsgBar(true);
    console.log(openMsgBar, "openMsgBar");
  };

  const handleCloseMsgBar = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setopenMsgBar(false);
  };

  const handleChange =
    (prop: keyof AddAreaDetails) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      let dummydata: AddAreaDetails = { ...Area, [prop]: event.target.value };
      setArea(dummydata);
      console.log(dummydata);
    };

  // useEffect(() => {
  //     const axiosrequest1 = axios.get(
  //         "https://us-central1-agriexp-db.cloudfunctions.net/app/YieldStat"
  //     );
  //     const axiosrequest2 = axios.get(
  //         "https://us-central1-agriexp-db.cloudfunctions.net/app/UserData"
  //     );

  //     axios.all([axiosrequest1, axiosrequest2]).then(
  //         axios.spread(function (res1, res2) {
  //             let ProductsData: YieldStat[] = res1.data;
  //             setYieldStat(ProductsData);
  //             console.log(res1);
  //             console.log(res2);
  //             let UserData = res2.data;
  //             if (UserData.lang == "English") {
  //                 // setMessages(English);
  //             } else if (UserData.lang == "Tamil") {
  //                 // setMessages(Tamil);
  //             }
  //         })
  //     );
  // }, []);

  return (
    <div>
      <ResponsiveAppBar
        handleMassUplModalOpen={props.handleMassUplModalOpen}
        setMessages={props.setMessages}
      ></ResponsiveAppBar>
      <Container>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            marginTop: "10px",
          }}
          noValidate
          autoComplete="on"
        >
          <Stack>
            <h3>
              <FormattedMessage id="Area.Header"></FormattedMessage>
            </h3>
          </Stack>
          <Stack
            spacing={2}
            direction="column"
            // justifyContent="flex-start"
            // alignItems="flex-start"
          >
            <div className="AddProduct-form">
              <Stack
                spacing={2}
                divider={<Divider orientation="horizontal" flexItem />}
              >
                <Stack justifyContent="flex-start" alignItems="flex-start">
                  <Typography variant="h6" gutterBottom>
                    <FormattedMessage id="Area.ZoneHeader"></FormattedMessage>
                  </Typography>
                  <Box>
                    <TextField
                      size="small"
                      variant="standard"
                      required
                      id="outlined-required"
                      onChange={handleChange("AreaID")}
                      label={<FormattedMessage id="Area.ID"></FormattedMessage>}
                      helperText={
                        <FormattedMessage id="Area.ID"></FormattedMessage>
                      }
                      value={Area.AreaID}
                    />
                    <TextField
                      size="small"
                      variant="standard"
                      required
                      id="outlined-required"
                      onChange={handleChange("Zone")}
                      value={Area.Zone}
                      label={
                        <FormattedMessage id="Area.Zone"></FormattedMessage>
                      }
                      helperText={
                        <FormattedMessage id="Area.Zone"></FormattedMessage>
                      }
                    />
                    <TextField
                      required
                      size="small"
                      id="outlined-required"
                      label={
                        <FormattedMessage id="Area.AreaName"></FormattedMessage>
                      }
                      // type="date"
                      helperText={
                        <FormattedMessage id="Area.AreaName"></FormattedMessage>
                      }
                      variant="standard"
                      value={Area.AreaName}
                      onChange={handleChange("AreaName")}
                      //defaultValue={dayjs().format("YYYY-MM-DD")}
                    />
                  </Box>
                </Stack>
                <Stack justifyContent="flex-start" alignItems="flex-start">
                  <Typography variant="h6" gutterBottom>
                    <FormattedMessage id="Area.CapacityHeader"></FormattedMessage>
                  </Typography>
                  <Box>
                    <TextField
                      required
                      size="small"
                      id="outlined-required"
                      label={
                        <FormattedMessage id="Area.TotalHect"></FormattedMessage>
                      }
                      type="text"
                      helperText={
                        <FormattedMessage id="Area.TotalHect"></FormattedMessage>
                      }
                      variant="standard"
                      // defaultValue="Banana"
                      value={Area.TotalHectare}
                      onChange={handleChange("TotalHectare")}
                    />

                    <TextField
                      required
                      size="small"
                      id="outlined-required"
                      onChange={handleChange("PlantationCapacity")}
                      label={
                        <FormattedMessage id="Area.PlantationCapacity"></FormattedMessage>
                      }
                      type="text"
                      helperText={
                        <FormattedMessage id="Area.PlantationCapacity"></FormattedMessage>
                      }
                      variant="standard"
                      // defaultValue="Cavendish"
                      value={Area.PlantationCapacity}
                    />
                  </Box>
                </Stack>
                <Stack justifyContent="flex-start" alignItems="flex-start">
                  <Typography variant="h6" gutterBottom>
                    <FormattedMessage id="Area.ContactHeader"></FormattedMessage>
                  </Typography>
                  <Box>
                    <TextField
                      required
                      size="small"
                      type="number"
                      onChange={handleChange("Owner")}
                      value={Area.Owner}
                      label={
                        <FormattedMessage id="Area.Owner"></FormattedMessage>
                      }
                      id="standard-start-adornment"
                      //   sx={{ m: 1, width: "25ch" }}
                      //   InputProps={{
                      //     endAdornment: (
                      //       <InputAdornment position="start">kg</InputAdornment>
                      //     ),
                      //   }}
                      variant="standard"
                      helperText={
                        <FormattedMessage id="Area.Owner"></FormattedMessage>
                      }
                    />

                    <TextField
                      required
                      size="small"
                      variant="standard"
                      id="outlined-required"
                      onChange={handleChange("Owner")}
                      value={Area.Owner}
                      label={
                        <FormattedMessage id="Area.Owner"></FormattedMessage>
                      }
                      // type="number"
                      helperText={
                        <FormattedMessage id="Area.Owner"></FormattedMessage>
                      }
                    />

                    {/* <TextField
                      required
                      size="small"
                      variant="standard"
                      id="outlined-required"
                      onChange={handleChange("Length")}
                      value={Product.Length}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">cm</InputAdornment>
                        ),
                      }}
                      label={
                        <FormattedMessage id="app.Leaflength"></FormattedMessage>
                      }
                      type="number"
                      helperText={
                        <FormattedMessage id="app.Leaflength"></FormattedMessage>
                      }
                    />

                    <TextField
                      variant="standard"
                      size="small"
                      id="outlined-required"
                      value={Product.StemWeight}
                      onChange={handleChange("StemWeight")}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">Kg</InputAdornment>
                        ),
                      }}
                      label={
                        <FormattedMessage id="app.StemWeight"></FormattedMessage>
                      }
                      type="number"
                      helperText={
                        <FormattedMessage id="app.EnterStemWght"></FormattedMessage>
                      }
                    /> */}
                  </Box>
                </Stack>
                <Stack justifyContent="flex-start" alignItems="flex-start">
                  <Typography variant="h6" gutterBottom>
                    <FormattedMessage id="Area.AddressHeader"></FormattedMessage>
                  </Typography>
                  <Box>
                    <TextField
                      required
                      size="small"
                      id="outlined-required"
                      label={
                        <FormattedMessage id="Area.Village"></FormattedMessage>
                      }
                      type="text"
                      helperText={
                        <FormattedMessage id="Area.Village"></FormattedMessage>
                      }
                      variant="standard"
                      // defaultValue="Banana"
                      value={Area.Village}
                      onChange={handleChange("Village")}
                    />

                    <TextField
                      required
                      size="small"
                      id="outlined-required"
                      onChange={handleChange("TownPanchayat")}
                      label={
                        <FormattedMessage id="Area.TownPanchayat"></FormattedMessage>
                      }
                      type="text"
                      helperText={
                        <FormattedMessage id="Area.TownPanchayat"></FormattedMessage>
                      }
                      variant="standard"
                      // defaultValue="Cavendish"
                      value={Area.TownPanchayat}
                    />

                    <TextField
                      required
                      size="small"
                      id="outlined-required"
                      label={
                        <FormattedMessage id="Area.District"></FormattedMessage>
                      }
                      type="text"
                      helperText={
                        <FormattedMessage id="Area.District"></FormattedMessage>
                      }
                      variant="standard"
                      // defaultValue="Banana"
                      value={Area.District}
                      onChange={handleChange("District")}
                    />

                    <TextField
                      required
                      size="small"
                      id="outlined-required"
                      onChange={handleChange("Pincode")}
                      label={
                        <FormattedMessage id="Area.Pincode"></FormattedMessage>
                      }
                      type="text"
                      helperText={
                        <FormattedMessage id="Area.District"></FormattedMessage>
                      }
                      variant="standard"
                      // defaultValue="Cavendish"
                      value={Area.Pincode}
                    />

                    <TextField
                      required
                      size="small"
                      id="outlined-required"
                      onChange={handleChange("Address")}
                      label={
                        <FormattedMessage id="Area.Address"></FormattedMessage>
                      }
                      type="text"
                      helperText={
                        <FormattedMessage id="Area.Address"></FormattedMessage>
                      }
                      variant="standard"
                      // defaultValue="Cavendish"
                      value={Area.Address}
                    />
                  </Box>
                </Stack>
              </Stack>
            </div>

            <Button
              sx={{ width: "25%" }}
              variant="contained"
              onClick={() => {
                // props.AgriImpexRef.AddNewProduct(Area).then((resp) => {
                //   handleopenMsgBar()
                //   setMessage(resp.data)
                //   setArea(props.AgriImpexRef.defaultAreaDetails)
                //   // console.log(resp.data, "Add Product side", openMsgBar)
                // })
              }}
            >
              <FormattedMessage id="btn.AddProduct"></FormattedMessage>
            </Button>
          </Stack>
        </Box>
      </Container>
      {/* <Footer></Footer> */}
      <MessageBar
        handleCloseMsgBar={handleCloseMsgBar}
        Message={Message}
        handleopenMsgBar={handleopenMsgBar}
        openMsgBar={openMsgBar}
      ></MessageBar>
    </div>
  );
};

export default AddArea;
