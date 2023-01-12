import React, { useState, useEffect } from "react";
import { YieldStat, RespData } from "./Interface";
import axios from "axios";
import logo from "./logo.svg";
import "../App.css";
import AddProduct from "./AddProducts";
import YieldProductStats from "./YieldProductStats";
import MassUploadModal from "./MassUploadInfoModal";
import ResponsiveAppBar from "./AppBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { IntlProvider } from "react-intl";
import Tamil from "../lang/ta.json";
import English from "../lang/en.json";
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";


const Footer: React.FC = (props) => {
    return (
        <div className="footer">
        <p>This is some content in sticky footer</p>
        </div>
    );
}

export default Footer;