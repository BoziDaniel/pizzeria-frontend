import React from 'react'
import { Row } from "antd";

const Address = (props) => {
    
    return (
        <div>
            <Row><b style={{marginRight: 5}}>City: </b>{props.address.city}</Row>
            <Row><b style={{marginRight: 5}}>Postal code: </b> {props.address.postalCode}</Row>
            <Row><b style={{marginRight: 5}}>Street: </b> {props.address.street}</Row>
            <Row><b style={{marginRight: 5}}>Street number: </b> {props.address.streetNumber}</Row>
            <Row><b style={{marginRight: 5}}>Comment: </b> {props.address.comment}</Row>         
        </div>
    )
}

export default Address
