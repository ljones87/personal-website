import "./styles/index.scss";
import React from "react";
import ReactDOM from "react-dom";
import Main from "./Components/Main";

const App = () => {
  return (
    <div className="overlay">
      <Main />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
