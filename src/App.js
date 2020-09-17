import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import { PizzaProvider } from "./components/context/PizzaContext";
import { ActiveOrderProvider } from "./components/context/ActiveOrderContext";
import { LoginProvider } from "./components/context/LoginContext";
import { CartProvider } from "./components/context/CartContext";
import Contact from "./components/pages/contact/Contact";
import Header from "./components/commonComponents/Header";
import ActiveOrders from "./components/pages/activeOrders/ActiveOrders";
import { WorkerProvider } from "./components/context/WorkerContext";
import  ManageUsers  from "./components/pages/manageUsers/ManageUsers";

function App() {
  //sets the backround color to grey;
  document.body.style = "background: #f0f0f0";

  return (
    <div className="App" style={{ background: "#f0f0f0", height: "100%" }}>
      <Router>
        <LoginProvider>
          <WorkerProvider>
            <ActiveOrderProvider>
              <CartProvider>
                <Route path="/" component={Header} />
                <PizzaProvider>
                  <Route exact path="/" component={Home} />
                </PizzaProvider>
                <Route path="/contact" component={Contact} />
                <Route path="/orders/active" component={ActiveOrders} />
                <Route path="/manage/users" component={ManageUsers} />
              </CartProvider>
            </ActiveOrderProvider>
          </WorkerProvider>
        </LoginProvider>
      </Router>
    </div>
  );
}

export default App;
