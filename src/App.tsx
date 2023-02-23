import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomePage />
      </header>
    </div>
  );
}

function Demo() {
  console.log("DEMO DATA");
}

export default App;
