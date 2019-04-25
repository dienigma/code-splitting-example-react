import React, { Component } from "react";

import "./App.css";
import DynamicImport from "./DynamicImport";

const Home = props => (
  <DynamicImport load={() => import("./Home")}>
    {Component =>
      Component === null ? <h1>Loading</h1> : <Component {...props} />
    }
  </DynamicImport>
);

const List = props => (
  <DynamicImport load={() => import("./List")}>
    {Component =>
      Component === null ? <h1>Loading</h1> : <Component {...props} />
    }
  </DynamicImport>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Code Splitting React Example</h1>
        <div>
          <Home />
          <List />
        </div>
      </div>
    );
  }
}

export default App;
