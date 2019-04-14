import React, { Component } from "react";
import "./App.css";

import Main from "./pages/Main";

import Routes from "./routes";

class App extends Component {
  render() {
    return <Routes />;
  }
}

// const App = () => <Routes />;

/* function App() {
  return <Main />;
} */

export default App;
