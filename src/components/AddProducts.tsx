import React from "react";
import "../App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
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
import Typography from "@mui/material/Typography";
import { FormattedMessage } from "react-intl";

function AddProduct() {
  return (
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
        <h3><FormattedMessage id="app.ProductDetails"></FormattedMessage></h3>
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
                  label={<FormattedMessage id="app.Area"></FormattedMessage>}
                  helperText={<FormattedMessage id="app.EnterArea"></FormattedMessage>}
                />
                <TextField
                  required
                  size="small"
                  id="outlined-required"
                  label={<FormattedMessage id="app.Date"></FormattedMessage>}
                  type="date"
                  helperText={<FormattedMessage id="app.EnterDate"></FormattedMessage>}
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
                  label={<FormattedMessage id="app.Product"></FormattedMessage>}
                  type="text"
                  helperText={<FormattedMessage id="app.EnterProduct"></FormattedMessage>}
                  variant="standard"
                  defaultValue="Banana"
                />

                <TextField
                  required
                  size="small"
                  id="outlined-required"
                  label={<FormattedMessage id="app.Variety"></FormattedMessage>}
                  type="text"
                  helperText={<FormattedMessage id="app.EnterVariety"></FormattedMessage>}
                  variant="standard"
                  defaultValue="Cavendish"
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
                  label={<FormattedMessage id="app.Weight"></FormattedMessage>}
                  id="standard-start-adornment"
                  sx={{ m: 1, width: "25ch" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">kg</InputAdornment>
                    ),
                  }}
                  variant="standard"
                  helperText={<FormattedMessage id="app.EnterWeight"></FormattedMessage>}
                />

                <TextField
                  required
                  size="small"
                  variant="standard"
                  id="outlined-required"
                  label={<FormattedMessage id="app.Leavesno"></FormattedMessage>}
                  type="number"
                  helperText={<FormattedMessage id="app.EnterLeavesno"></FormattedMessage>}
                />
                <TextField
                  variant="standard"
                  size="small"
                  id="outlined-required"
                  label={<FormattedMessage id="app.StemWeight"></FormattedMessage>}
                  type="number"
                  helperText={<FormattedMessage id="app.EnterStemWght"></FormattedMessage>}
                />
              </Box>
            </Stack>
          </Stack>
        </div>

        <Button sx={{ width: "25%" }} variant="contained">
          <FormattedMessage id="btn.AddProduct"></FormattedMessage>
        </Button>
      </Stack>
    </Box>
  );
}

export default AddProduct;
