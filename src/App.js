import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import { PizzaProvider } from "./components/context/PizzaContext";

function App() {
  return (
    <div className="App">
      <PizzaProvider>
        <Router>
          <Route exact path="/" component={Home} />
          
        </Router>
      </PizzaProvider>
    </div>
  );
}

export default App;
