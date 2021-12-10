import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import CakeContainer from "./CakeContainer";
import HooksCakeContainer from "./HooksCakeContainer";
import IcecreamContainer from "./IcecreamContainer";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <CakeContainer />
        <IcecreamContainer />
      </div>
    </Provider>
  );
};

export default App;
