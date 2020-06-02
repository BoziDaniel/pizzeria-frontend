import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import { PizzaProvider } from "./components/context/PizzaContext";
import  Contact from "./components/pages/contact/Contact";
function App() {
  return (
    <div className="App">
      <Router>
        <PizzaProvider>
          <Route exact path="/" component={Home} />
        </PizzaProvider>
        <Route path="/contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
