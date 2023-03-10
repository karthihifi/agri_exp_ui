import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { IntlProvider } from "react-intl";
import Tamil from "./lang/ta.json";
import English from "./lang/en.json";

const locale = navigator.language;

//let lang;
// if (locale === "en") {
//   lang = English;
// } else {
//   if (locale === "ta") {
//     lang = Tamil;
//   } else {
//     lang = English;
//   }
// }

// const messagesInFrench = {
//   myMessage: "Aujourd'hui, c'est le {ts, date, ::yyyyMMdd}",
// }

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
//  <IntlProvider locale={locale} messages={Tamil} key={locale}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  // </IntlProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
