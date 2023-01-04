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
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { IntlProvider } from "react-intl";
import Tamil from "./lang/ta.json";
import English from "./lang/en.json";

import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";

// const locale = navigator.language;

function App() {
  const [locale, setLocale] = useState("en");
  const [messages, setMessages] = useState(English);

  const [YieldStat, setYieldStat] = useState<YieldStat[]>([]);

  const [MaassUplModalopen, setMaassUplModalopen] = React.useState(false);
  const handleMassUplModalOpen = () => setMaassUplModalopen(true);
  const handleMassUplModalClose = () => setMaassUplModalopen(false);

  useEffect(() => {
    const axiosrequest1 = axios.get('https://us-central1-agriexp-db.cloudfunctions.net/app/YieldStat');
    const axiosrequest2 = axios.get('https://us-central1-agriexp-db.cloudfunctions.net/app/UserData');

    axios.all([axiosrequest1, axiosrequest2]).then(axios.spread(function (res1, res2) {
      let ProductsData: YieldStat[] = res1.data;
      setYieldStat(ProductsData);
      console.log(res1);
      console.log(res2);
      let UserData = res2.data
      if (UserData.lang == 'English') {
        setMessages(English)
      } else if (UserData.lang == 'Tamil') {
        setMessages(Tamil)
      }
    }));

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
          <ResponsiveAppBar
            handleMassUplModalOpen={handleMassUplModalOpen}
            setMessages={setMessages}
          ></ResponsiveAppBar>
          <Container>
            <Routes>
              <Route
                path="/"
                element={
                  <YieldProductStats ProductData={YieldStat}></YieldProductStats>
                }
              />
              {/* <YieldProductStats ProductData={YieldStat}></YieldProductStats> */}
              <Route path="/AddIntProduct" element={<AddProduct></AddProduct>} />
              {/* <AddProduct></AddProduct> */}
            </Routes>
          </Container>
        </IntlProvider>
        <MassUploadModal
          MaassUplModalopen={MaassUplModalopen}
          handleMassUplModalClose={handleMassUplModalClose}
          handleMassUplModalOpen={handleMassUplModalOpen}
        ></MassUploadModal>
      </div>
    </Router>
  );
}

export default App;
