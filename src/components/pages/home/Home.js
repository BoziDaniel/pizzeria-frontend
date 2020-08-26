import React, { useContext } from "react";
import Pizzas from "./Pizzas";
import { Pagination, Row, Col } from "antd";
import PizzaContext from "../../context/PizzaContext";
import Cart from "./Cart";
import { LoginContext } from "../../context/LoginContext";

const Home = () => {
  const { page, setPage } = useContext(PizzaContext);
  const { numberOfPizzas } = useContext(PizzaContext);
  const { LoggedInAsRole } = useContext(LoginContext);
  const handlePizzasPageChange = (value) => {
    setPage(value);
  };

  return (
    <Row style={{ background: "#f0f0f0" }} justify="space-around">
      <Col span={20} align="middle">
        <Pagination
          style={{ marginTop: "10px" }}
          defaultCurrent={page}
          total={numberOfPizzas}
          onChange={handlePizzasPageChange}
          pageSizeOptions={[]}
        />
        <Pizzas />
        <Pagination
          defaultCurrent={page}
          total={numberOfPizzas}
          onChange={handlePizzasPageChange}
          pageSizeOptions={["10"]}
          style={{ marginBottom: "10px" }}
          />
      </Col>
      {LoggedInAsRole === "ROLE_CUSTOMER"?<Col span={4} align="top"><Cart /></Col> : null}
      
    </Row>
  );
};

export default Home;
