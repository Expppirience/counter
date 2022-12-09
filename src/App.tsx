import "./App.css";

import { Counter } from "./Components/Counter/Counter";
import { Provider } from "react-redux";
import React from "react";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <main className="page">
        <Counter />
      </main>
    </Provider>
  );
}

export default App;
