import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/">
          <Home />
          {/* home page */}
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
