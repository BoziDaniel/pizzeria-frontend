import React from "react";
import { Input, Row } from "antd";
import { UserOutlined, PhoneOutlined } from "@ant-design/icons";
import axios from "axios";

const RegistrationForm = (props) => {
  const handleNameChange = (e) => {
    props.setName(e.target.value);
  };
  const handleUsernameChange = (e) => {
    props.setUsername(e.target.value);
    checkIfUsernameNotOccupied(e.target.value);
  };
  const handleEmailChange = (e) => {
    props.setEmail(e.target.value);
    checkIsEmailValid(e.target.value);
    checkIfEmailIsNotOccupied(e.target.value);
  };
  const handlePhoneNumberChange = (e) => {
    props.setPhoneNumber(e.target.value);
    checkIsPhoneNumberValid(e.target.value);
    checkIfPhoneNumberNotOccupied(e.target.value);
  };
  const handlePasswordChange = (e) => {
    props.setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    props.setConfirmPassword(e.target.value);
  };
  const checkIsEmailValid = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailIsValid = re.test(String(email).toLowerCase());
    props.setIsEmailValid(emailIsValid);
  };

  const checkIsPhoneNumberValid = (phoneNumber) => {
    const re = /[0-9]{2,2}-[0-9]{2,2}-[0-9]{3,3}-[0-9]{4,4}/;
    const phoneIsValid = re.test(String(phoneNumber).toLowerCase());
    props.setIsPhoneNumberValid(phoneIsValid);
  };

  const checkIfUsernameNotOccupied = (username) => {
    const options = {
      url: "http://localhost:8080/users/username/exists?username=" + username,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios(options).then((resp) => {
      props.setIsUsernameNotOccupied(!resp.data);
    });
  };
  const checkIfPhoneNumberNotOccupied = (phoneNumber) => {
    const options = {
      url: "http://localhost:8080/users/phoneNumber/exists?phoneNumber=" + phoneNumber,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios(options).then((resp) => {
      props.setIsPhoneNumberNotOccupied(!resp.data);
    });
  };
  const checkIfEmailIsNotOccupied = (email) => {
    const options = {
      url: "http://localhost:8080/users/email/exists?email=" + email,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios(options).then((resp) => {
      console.log("respdata:" + resp.data);
      props.setIsEmailNotOccupied(!resp.data);
    });
  };

  return (
    <div>
      <Row>
        Name:{" "}
        <Input
          placeholder="example: Kovács Béla"
          prefix={<UserOutlined />}
          onChange={handleNameChange}
        />
      </Row>
      <Row>
        Username:{" "}
        <Input
          placeholder="example: pizzaman300"
          prefix={<UserOutlined />}
          onChange={handleUsernameChange}
        />
      </Row>
      <Row>
        Email:{" "}
        <Input
          placeholder="example: pizzaman300@gmail.com"
          prefix={<div>@</div>}
          onChange={handleEmailChange}
        />
      </Row>
      <Row>
        Phone:{" "}
        <Input
          maxLength="14"
          placeholder="example: 06-70-944-3402"
          prefix={<PhoneOutlined />}
          onChange={handlePhoneNumberChange}
        />
      </Row>
      <Row>
        Password:{" "}
        <Input.Password
          placeholder="input password"
          onChange={handlePasswordChange}
        />
      </Row>
      <Row>
        Confirm password:{" "}
        <Input.Password
          placeholder="input password"
          onChange={handleConfirmPasswordChange}
        />
      </Row>
    </div>
  );
};

export default RegistrationForm;
