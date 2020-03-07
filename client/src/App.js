import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Swaddle from "./pages/Swaddle";
// import Gallery from "./pages/Gallery";
import Donate from "./pages/Donate";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/swaddle" component={Swaddle} />
        {/* <Route exact path="/gallery" component={Gallery} /> */}
        <Route exact path="/donate" component={Donate} />
        <Route path="/login" component={Login} />
        {/* might want a switch */}
        <Route exact path="/register" component={Register} />
      </div>
    </Router>
  );
}

export default App;
