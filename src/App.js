import React from "react";
import "./App.css";
import NavBar from "./navbar";
import MyBody from "./myBody";

function App() {
  return (
    <div>
      <NavBar />
      <h1>Hello World</h1>
      <MyBody greeting="Molo" />
      {/* We were passing state to this component */}
    </div>
  );
}

export default App;
