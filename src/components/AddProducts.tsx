import React, { useState, useEffect } from "react";
import "../App.css";
import Box from "@mui/material/Box";
import { AddProductModal } from "./Interface";
import { TextField, Typography } from "@mui/material";
import Input from "@mui/material/Input";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Divider from "@mui/material/Divider";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import { FormattedMessage } from "react-intl";
import Container from "react-bootstrap/Container";
import ResponsiveAppBar from "../components/AppBar";
import { useLocation, useNavigate } from "react-router-dom";
import MessageBar from "./SnackBar";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import AgriImpex from "../modal/Modal";
import Footer from "./footer";

import { ProgressBar } from "react-loader-spinner";

interface AddProductProps {
  handleMassUplModalOpen: () => void;
  setMessages: (locale: any) => void;
  CurrSeason: string;
  AgriImpexRef: AgriImpex;
}

const AddProduct: React.FC<AddProductProps> = (props) => {
  const [Product, setProduct] = useState<AddProductModal>(
    props.AgriImpexRef.defaultProductData
  );
  const [openMsgBar, setopenMsgBar] = React.useState(false);
  const [Message, setMessage] = React.useState("");
  const [OpenProgressBar, setProgressBar] = React.useState(false);

  const handleProgressBar = () => {
    setProgressBar(!OpenProgressBar);
  };

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
    (prop: keyof AddProductModal) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      let dummydata: AddProductModal = {
        ...Product,
        [prop]: event.target.value,
      };
      setProduct(dummydata);
      console.log(dummydata);
    };

  const auth = getAuth();
  const navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    if (auth.currentUser == null && authToken == null) {
      navigate("/login");
      return;
    }
  });

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
              <FormattedMessage id="app.ProductDetails"></FormattedMessage>
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
                    <FormattedMessage id="app.AreaDetails"></FormattedMessage>
                  </Typography>
                  <Box>
                    <TextField
                      size="small"
                      variant="standard"
                      required
                      id="outlined-required"
                      disabled={true}
                      label={
                        <FormattedMessage id="YieldProdStats.Season"></FormattedMessage>
                      }
                      helperText={
                        <FormattedMessage id="YieldProdStats.Season"></FormattedMessage>
                      }
                      value={props.CurrSeason}
                    />
                    <TextField
                      size="small"
                      variant="standard"
                      required
                      id="outlined-required"
                      onChange={handleChange("Area")}
                      value={Product.Area}
                      label={
                        <FormattedMessage id="app.Area"></FormattedMessage>
                      }
                      helperText={
                        <FormattedMessage id="app.EnterArea"></FormattedMessage>
                      }
                    />
                    <TextField
                      required
                      size="small"
                      id="outlined-required"
                      label={
                        <FormattedMessage id="app.Date"></FormattedMessage>
                      }
                      type="date"
                      helperText={
                        <FormattedMessage id="app.EnterDate"></FormattedMessage>
                      }
                      variant="standard"
                      defaultValue={dayjs().format("YYYY-MM-DD")}
                    />
                  </Box>
                </Stack>
                <Stack justifyContent="flex-start" alignItems="flex-start">
                  <Typography variant="h6" gutterBottom>
                    <FormattedMessage id="app.ProductClass"></FormattedMessage>
                  </Typography>
                  <Box>
                    <TextField
                      required
                      size="small"
                      id="outlined-required"
                      label={
                        <FormattedMessage id="app.Product"></FormattedMessage>
                      }
                      type="text"
                      helperText={
                        <FormattedMessage id="app.EnterProduct"></FormattedMessage>
                      }
                      variant="standard"
                      // defaultValue="Banana"
                      value={Product.Product}
                      onChange={handleChange("Product")}
                    />

                    <TextField
                      required
                      size="small"
                      id="outlined-required"
                      onChange={handleChange("Variety")}
                      label={
                        <FormattedMessage id="app.Variety"></FormattedMessage>
                      }
                      type="text"
                      helperText={
                        <FormattedMessage id="app.EnterVariety"></FormattedMessage>
                      }
                      variant="standard"
                      // defaultValue="Cavendish"
                      value={Product.Variety}
                    />
                  </Box>
                </Stack>
                <Stack justifyContent="flex-start" alignItems="flex-start">
                  <Typography variant="h6" gutterBottom>
                    <FormattedMessage id="app.WeightDetails"></FormattedMessage>
                  </Typography>
                  <Box>
                    <TextField
                      required
                      size="small"
                      type="number"
                      onChange={handleChange("NetWeight")}
                      value={Product.NetWeight}
                      label={
                        <FormattedMessage id="app.Weight"></FormattedMessage>
                      }
                      id="standard-start-adornment"
                      sx={{ m: 1, width: "25ch" }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">kg</InputAdornment>
                        ),
                      }}
                      variant="standard"
                      helperText={
                        <FormattedMessage id="app.EnterWeight"></FormattedMessage>
                      }
                    />

                    <TextField
                      required
                      size="small"
                      variant="standard"
                      id="outlined-required"
                      onChange={handleChange("NoofLeaves")}
                      value={Product.NoofLeaves}
                      label={
                        <FormattedMessage id="app.Leavesno"></FormattedMessage>
                      }
                      type="number"
                      helperText={
                        <FormattedMessage id="app.EnterLeavesno"></FormattedMessage>
                      }
                    />

                    <TextField
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
                    />
                  </Box>
                </Stack>
              </Stack>
            </div>

            <Button
              sx={{ width: "25%" }}
              variant="contained"
              onClick={() => {
                handleProgressBar();
                props.AgriImpexRef.AddNewProduct(Product).then((resp) => {
                  handleopenMsgBar();
                  setMessage(resp.data);
                  setProduct(props.AgriImpexRef.defaultProductData);
                  handleProgressBar();
                  // console.log(resp.data, "Add Product side", openMsgBar)
                });
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
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        visible={OpenProgressBar}
        wrapperClass="progress-bar-wrapper"
        borderColor="#F4442E"
        barColor="#51E5FF"
      />
    </div>
  );
};

export default AddProduct;
