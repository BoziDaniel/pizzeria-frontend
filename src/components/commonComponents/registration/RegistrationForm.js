import React from 'react';
import { Input, Row } from "antd";
import { UserOutlined } from '@ant-design/icons';

const RegistrationForm = (props) => {
    const handleNameChange = (e) => {
        props.setName(e.target.value);
    };
    const handleUsernameChange = (e) => {
        props.setUsername(e.target.value);
    };
    const handleEmailChange = (e) => {
        props.setEmail(e.target.value);
    };
    const handlePhoneNumberChange = (e) => {
        props.setPhoneNumber(e.target.value);
    };
    const handlePasswordChange = (e) => {
        props.setPassword(e.target.value);
    };
    const handleConfirmPasswordChange = (e) => {
        props.setConfirmPassword(e.target.value);
    };
   
    return (
        <div>
            <Row>Name: <Input placeholder="example: Kovács Béla" prefix={<UserOutlined />} onChange={handleNameChange}/></Row>
            <Row>Username: <Input placeholder="example: pizzaman300" prefix={<UserOutlined />}  onChange={handleUsernameChange}/></Row>
            <Row>Email: <Input placeholder="example: pizzaman300@gmail.com" prefix={<div>@</div>}  onChange={handleEmailChange}/></Row>
            <Row>Phone: <Input placeholder="example: +36-70-9443-402" prefix={<div>&#9742;</div>}  onChange={handlePhoneNumberChange}/></Row>
            <Row>Password: <Input.Password placeholder="input password"  onChange={handlePasswordChange}/></Row>
            <Row>Confirm password: <Input.Password placeholder="input password"  onChange={handleConfirmPasswordChange}/></Row>
        </div>
    )
}

export default RegistrationForm
