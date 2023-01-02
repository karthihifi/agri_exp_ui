import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import AddProduct from "./components/AddProducts";
import ResponsiveAppBar from "./components/AppBar";
//import Container from '@mui/material/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { IntlProvider } from "react-intl";
import Tamil from "./lang/ta.json";
import English from "./lang/en.json";

// const locale = navigator.language;

function App() {

  const [locale, setLocale] = useState('en');
  const [messages, setMessages] = useState(English);

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages} key={locale}>
        <ResponsiveAppBar setMessages={setMessages}></ResponsiveAppBar>
        <Container>
          <AddProduct></AddProduct>
        </Container>
      </IntlProvider>
    </div>
  );
}

export default App;
