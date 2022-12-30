import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AddProduct from "./components/AddProducts";
import ResponsiveAppBar from "./components/AppBar";
//import Container from '@mui/material/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";


function App() {
  return (
    <div className="App">
      <ResponsiveAppBar></ResponsiveAppBar>
      <Container>
        <AddProduct></AddProduct>
      </Container>
    </div>
  );
}

export default App;
