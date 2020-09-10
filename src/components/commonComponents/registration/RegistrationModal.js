import React, { useState } from "react";
import { Modal, Button } from "antd";
import RegistrationForm from "./RegistrationForm";
import axios from "axios";

const RegistrationModal = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [isUsernameNotOccupied, setIsUsernameNotOccupied] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [arePasswordsMatch, setArePasswordsMatch] = useState(false);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  const [isPasswordHasMinLength, setIsPasswordHasMinLength] = useState(false);
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

  const initialModalText = (
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
      setIsUsernameNotOccupied={setIsUsernameNotOccupied}
      isEmailValid={isEmailValid}
      setIsEmailValid={setIsEmailValid}
      arePasswordsMatch={arePasswordsMatch}
      setArePasswordsMatch={setArePasswordsMatch}
      isPhoneNumberValid={isPhoneNumberValid}
      setIsPhoneNumberValid={setIsPhoneNumberValid}
      isPasswordHasMinLength={isPasswordHasMinLength}
      setIsPasswordHasMinLength={setIsPasswordHasMinLength}
    />
  );
  const [ModalText, setModalText] = useState(initialModalText);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const areInputsValid = () => {
    console.log("is email valid: " + isEmailValid);
    console.log("phone number is valid " + isPhoneNumberValid);
    console.log("are passwords the same: " + arePasswordsMatch);
    console.log(
      "password is at least 3 characters long " + isPasswordHasMinLength
    );
    console.log("username is not occupied " + isUsernameNotOccupied);
    return (
      isEmailValid &&
      arePasswordsMatch &&
      isPhoneNumberValid &&
      isPasswordHasMinLength &&
      isUsernameNotOccupied
    );
  };

  const handleOk = () => {
    const user = createUserData();
    if (areInputsValid()) {
      const options = {
        url: "http://localhost:8080/registration",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: user,
      };
      axios(options).then((resp) => {
        if (resp.status === 200) {
          setModalText(
            "Succesfull registratioon! check your emails. This modal will close in two seconds"
          );
          setConfirmLoading(true);
          setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
            setModalText(initialModalText);
          }, 2000);
        } else {
          setModalText(resp.status + " error during registration");
        }
      });
    } else {
      alert("invalid input try again");
    }
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };
  return (
    <div>
      <Button type="primary" onClick={showModal} style={{ marginRight: 5 }}>
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
