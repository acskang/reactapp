import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./myRedux/store";
import CakeContainer from "./myRedux/CakeContainer";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
};

export default App;
