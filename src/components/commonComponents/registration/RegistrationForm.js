import React from 'react';
import { Input, Row } from "antd";
import { UserOutlined } from '@ant-design/icons';

const RegistrationForm = () => {
    return (
        <div>
            <Row>Name: <Input placeholder="example: Kovács Béla" prefix={<UserOutlined />} /></Row>
            <Row>Username: <Input placeholder="example: pizzaman300" prefix={<UserOutlined />} /></Row>
            <Row>Email: <Input placeholder="example: pizzaman300@gmail.com" prefix={<div>@</div>} /></Row>
            <Row>Phone: <Input placeholder="example: +36-70-9443-402" prefix={<div>&#9742;</div>} /></Row>
            <Row>Password: <Input.Password placeholder="input password" /></Row>
            <Row>Confirm password: <Input.Password placeholder="input password" /></Row>
        </div>
    )
}

export default RegistrationForm


