import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import AddProduct from "./components/AddProducts";
import MassUploadModal from './components/MassUploadInfoModal'
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

  const [MaassUplModalopen, setMaassUplModalopen] = React.useState(false);
  const handleMassUplModalOpen = () => setMaassUplModalopen(true);
  const handleMassUplModalClose = () => setMaassUplModalopen(false);

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages} key={locale}>
        <ResponsiveAppBar handleMassUplModalOpen={handleMassUplModalOpen} setMessages={setMessages}></ResponsiveAppBar>
        <Container>
          <AddProduct></AddProduct>
        </Container>
      </IntlProvider>
      <MassUploadModal MaassUplModalopen={MaassUplModalopen}
        handleMassUplModalClose={handleMassUplModalClose}
        handleMassUplModalOpen={handleMassUplModalOpen}></MassUploadModal>
    </div>
  );
}

export default App;
