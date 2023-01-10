import React, { useState, useEffect } from "react";
import { YieldStat, RespData } from "./components/Interface";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import AddProduct from "./components/AddProducts";
import YieldProductStats from "./components/YieldProductStats";
import MassUploadModal from "./components/MassUploadInfoModal";
import ResponsiveAppBar from "./components/AppBar";
//import Container from '@mui/material/Container';
import Login from "./components/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { IntlProvider } from "react-intl";
// import Main from "./components/Main"
import Tamil from "./lang/ta.json";
import English from "./lang/en.json";
import AgriImpex from "./modal/Modal";

import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";

// const locale = navigator.language;
const AgriImpexref: AgriImpex = new AgriImpex();

function App() {
  const [locale, setLocale] = useState("en");
  const [messages, setMessages] = useState(English);

  const [YieldStat, setYieldStat] = useState<YieldStat[]>([]);
  const [UserName, setUserName] = React.useState("");
  const [CurrSeason, setCurrSeason] = React.useState(
    AgriImpexref.currentSeason
  );

  const [MaassUplModalopen, setMaassUplModalopen] = React.useState(false);
  const handleMassUplModalOpen = () => setMaassUplModalopen(true);
  const handleMassUplModalClose = () => setMaassUplModalopen(false);

  useEffect(() => {
    const axiosrequest1 = axios.get(
      "https://us-central1-agriexp-db.cloudfunctions.net/app/YieldStat"
    );
    const axiosrequest2 = axios.get(
      "https://us-central1-agriexp-db.cloudfunctions.net/app/UserData"
    );

    axios.all([axiosrequest1, axiosrequest2]).then(
      axios.spread(function (res1, res2) {
        let ProductsData: YieldStat[] = res1.data;
        setYieldStat(ProductsData);
        console.log(res1);
        console.log(res2);
        let UserData = res2.data;
        if (UserData.lang == "English") {
          setMessages(English);
        } else if (UserData.lang == "Tamil") {
          setMessages(Tamil);
        }
      })
    );

    // axios
    //   .get("https://us-central1-agriexp-db.cloudfunctions.net/app/YieldStat")
    //   .then((res) => {
    //     let ProductsData: YieldStat[] = res.data;
    //     setYieldStat(ProductsData);
    //     console.log(ProductsData);
    //   });
  }, []);

  return (
    <Router>
      <div className="App">
        <IntlProvider locale={locale} messages={messages} key={locale}>
          {/* <ResponsiveAppBar
            handleMassUplModalOpen={handleMassUplModalOpen}
            setMessages={setMessages}
          ></ResponsiveAppBar> */}
          {/* <Container> */}
          <Routes>
            <Route
              path="/Login"
              element={
                <Login Username={UserName} setUsername={setUserName}></Login>
              }
            ></Route>
            {/* <Route path="/" element={<Main></Main>}></Route> */}
            <Route
              path="/"
              element={
                <YieldProductStats
                  handleMassUplModalOpen={handleMassUplModalClose}
                  setMessages={setMessages}
                  ProductData={YieldStat}
                ></YieldProductStats>
              }
            />
            <Route
              path="/AddIntProduct"
              element={
                <AddProduct
                  CurrSeason={CurrSeason}
                  handleMassUplModalOpen={handleMassUplModalClose}
                  setMessages={setMessages}
                ></AddProduct>
              }
            />
          </Routes>
          {/* </Container> */}
          <MassUploadModal
            MaassUplModalopen={MaassUplModalopen}
            handleMassUplModalClose={handleMassUplModalClose}
            handleMassUplModalOpen={handleMassUplModalOpen}
          ></MassUploadModal>
        </IntlProvider>
      </div>
    </Router>
  );
}

export default App;
