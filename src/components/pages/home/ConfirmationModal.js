import React, { useContext, useEffect, useState } from "react";
import { Modal, Card, Button } from "antd";
import CartContext from "../../context/CartContext";
import AddressForm from "./AddressForm";
import axios from "axios";

const ConfirmationModal = (props) => {
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [comment, setComment] = useState("");
  const [visible, setVisible] = useState(false);
  const [ModalText, setModalText] = useState(
    <AddressForm
      city={city}
      setCity={setCity}
      street={street}
      setStreet={setStreet}
      postalCode={postalCode}
      setPostalCode={setPostalCode}
      streetNumber={streetNumber}
      setStreetNumber={setStreetNumber}
      comment={comment}
      setComment={setComment}
    />
  );
  const [confirmLoading, setConfirmLoading] = useState(false);
  const { cartItems, setCartItems } = useContext(CartContext);

  const showModal = () => {
    setVisible(true);
  };

  const convertToOrderDTO = (item) => {
    return { id: item.id, quantity: item.quantity };
  };

  const handleOk = () => {
    let order = { incomingOrderedPizzas: [] };
    for (let item of cartItems) {
      order.incomingOrderedPizzas.push(convertToOrderDTO(item));
    }
    let token = sessionStorage.getItem("token");
    token = "Bearer " + token;
    const options = {
      url: "http://localhost:8080/orders/add-new",
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      data: order,
    };
    axios(options).then((resp) => {
      if (resp.status === 200) {
        setCartItems([]);
        setModalText(
          "Succesfull order! check your emails. This modal will close in two seconds"
        );
        setConfirmLoading(true);
        setTimeout(() => {
          setVisible(false);
          setConfirmLoading(false);
        }, 2000);
      } else {
        setModalText(resp.status + " error during order");
      }
    });
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Confirm Order
      </Button>
      <Modal
        title="Delivery address"
        okText="Send order"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{ModalText}</p>
      </Modal>
    </div>
  );
};

export default ConfirmationModal;
