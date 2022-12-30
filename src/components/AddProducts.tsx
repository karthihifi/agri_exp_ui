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
                  label="Area"
                  helperText="Enter Area"
                />
                <TextField
                  required
                  size="small"
                  id="outlined-required"
                  label="Date"
                  type="date"
                  helperText="Enter Date"
                  variant="standard"
                  defaultValue={dayjs().format("YYYY-MM-DD")}
                />
              </Box>
            </Stack>
            <Stack justifyContent="flex-start" alignItems="flex-start">
              <Typography variant="h6" gutterBottom>
              <FormattedMessage id="app.ProductDetails"></FormattedMessage>
              </Typography>
              <Box>
                <TextField
                  required
                  size="small"
                  id="outlined-required"
                  label="Product"
                  type="text"
                  helperText="Enter Product name"
                  variant="standard"
                  defaultValue="Banana"
                />

                <TextField
                  required
                  size="small"
                  id="outlined-required"
                  label="Variety"
                  type="text"
                  helperText="Enter Variety name"
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
                  label="Weight"
                  id="standard-start-adornment"
                  sx={{ m: 1, width: "25ch" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">kg</InputAdornment>
                    ),
                  }}
                  variant="standard"
                  helperText="Enter Weight"
                />

                <TextField
                  required
                  size="small"
                  variant="standard"
                  id="outlined-required"
                  label="No of Leaves"
                  type="number"
                  helperText="Enter Leaves Qty"
                />
                <TextField
                  variant="standard"
                  size="small"
                  id="outlined-required"
                  label="Stem Weight"
                  type="number"
                  helperText="Enter Stem Weight(approx)"
                />
              </Box>
            </Stack>
          </Stack>
        </div>

        <Button sx={{ width: "25%" }} variant="contained">
          Add Product
        </Button>
      </Stack>
    </Box>
  );
}

export default AddProduct;
