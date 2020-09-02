import React, { useContext, useState } from "react";
import { Modal, Button } from "antd";
import RegistrationForm from "./RegistrationForm";


const RegistrationModal = () => {
  //username password email phoneNumber name
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);


  const createUserData = () => {
    const userData = {
        username: username,
        password: password,
        email: email,
        phoneNumber: phoneNumber,
        name: name,
    };
    return userData;
  };
  const [ModalText, setModalText] = useState(
    <RegistrationForm
    username={username}
    setUsername={setUsername}
    password={password}
    setPassword={setPassword}
    confirmPassword={confirmPassword}
    setConfirmPassword={setConfirmPassword}
    email={email}
    setEmail={setEmail}
    phoneNumber={phoneNumber}
    setPhoneNumber={setPhoneNumber}
    name={name}
    setName={setName}
    />
    
  );
  const [confirmLoading, setConfirmLoading] = useState(false);
  
  const showModal = () => {
    setVisible(true);
  };



  const handleOk = () => {
     const user = createUserData();
    
    
    console.log(user);
    // let token = sessionStorage.getItem("token");
    // token = "Bearer " + token;
    // const options = {
    //   url: "http://localhost:8080/orders/add-new",
    //   method: "POST",
    //   headers: {
    //     Authorization: token,
    //     "Content-Type": "application/json",
    //   },
    //   data: order,
    // };
    // axios(options).then((resp) => {
    //   if (resp.status === 200) {
    //     setCartItems([]);
    //     setModalText(
    //       "Succesfull order! check your emails. This modal will close in two seconds"
    //     );
    //     setConfirmLoading(true);
    //     setTimeout(() => {
    //       setVisible(false);
    //       setConfirmLoading(false);
    //     }, 2000);
    //   } else {
    //     setModalText(resp.status + " error during order");
    //   }
    // });
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Register
      </Button>
      <Modal
        title="Registration"
        okText="Send registration"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        {ModalText}
      </Modal>
    </div>
  );
};

export default RegistrationModal;
