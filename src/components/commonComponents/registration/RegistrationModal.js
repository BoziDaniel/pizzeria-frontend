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
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
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
      isPhoneNumberValid={isPhoneNumberValid}
      setIsPhoneNumberValid={setIsPhoneNumberValid}
    />
  );
  const [ModalText, setModalText] = useState(initialModalText);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setVisible(true);
  };
  const checkArePasswordsMatch = () => {
    return password === confirmPassword;
  };
  const checkIsPasswordHasMinLength = () => {
    const passWordHasMinLength = password.length > 3;
    return passWordHasMinLength;
  };
  
  const checkIfPasswordContainsRequiredCharacters = () => {
    let isNumberInPass = false;
    let isLowerCaseInPass = false;
    let isUpperCaseInPass = false;
    let i = 0;
    while (i < password.length) {
      let character = password.charAt(i);
      if (!isNaN(character)) {
        isNumberInPass = true;
      } else if (
        character === character.toUpperCase() &&
        character !== character.toLowerCase()
      ) {
        isUpperCaseInPass = true;
      } else if (
        character !== character.toUpperCase() &&
        character === character.toLowerCase()
      ) {
        isLowerCaseInPass = true;
      }
      i++;
    }
    console.log("isNumberInPass: " + isNumberInPass);
    console.log("isLowerCaseInPass: " + isLowerCaseInPass);
    console.log("isUpperCaseInPass: " + isUpperCaseInPass);
    return isNumberInPass && isLowerCaseInPass && isUpperCaseInPass;
  };
  const areInputsValid = () => {
    console.log(password);
    console.log("is email valid: " + isEmailValid);
    console.log("phone number is valid: " + isPhoneNumberValid);
    console.log("username is not occupied: " + isUsernameNotOccupied);
    console.log("password check: ");
    console.log("are passwords the same: " + checkArePasswordsMatch());
    console.log(
      "password is at least 4 characters long: " + checkIsPasswordHasMinLength()
    );
    console.log(
      "password contains at least 1 lowercase letter, 1 uppercase letter and 1 number: " +
        checkIfPasswordContainsRequiredCharacters()
    );

    return (
      isEmailValid &&
      checkArePasswordsMatch() &&
      checkIsPasswordHasMinLength() &&
      isPhoneNumberValid &&
      isUsernameNotOccupied &&
      checkIfPasswordContainsRequiredCharacters()
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
