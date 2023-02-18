import React from "react";
import ReactDOM from "react-dom";
import Loader from "./loader";
// import Robin from "./robin"

import "./styles.css";

function App() {
  return (
    <div className="Loader">
      <Loader />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);