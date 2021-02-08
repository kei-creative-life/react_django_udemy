import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ApiFetch from "./components/ApiFetch";
// import Basic2 from "./components/Basic2";
// import BasicUseEffect from "./components/BasicUseEffect";
// import TimerContainer from "./components/TimerContainer";
import AppContext from "./contexts/AppContext";
import B from "./components/B";
import BasicReducer from "./components/BasicReducer";

function App() {
  return (
    <AppContext.Provider value={"value from App.js"}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Basic2 /> */}
          {/* <BasicUseEffect /> */}
          {/* <TimerContainer /> */}
          {/* <ApiFetch /> */}
          {/* <B /> */}
          <BasicReducer />
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
