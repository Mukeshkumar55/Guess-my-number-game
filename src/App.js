import React, { createContext } from "react";
import Guessmynumber from "./guess-my-number";

export const val = createContext(null);

function App() {
  var guess = null;
  return (
    <div className="App">
      <val.Provider value={[guess]}>
        <Guessmynumber />
      </val.Provider>
    </div>
  );
}

export default App;
