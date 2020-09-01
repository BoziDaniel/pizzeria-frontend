import React from 'react';
import { Button, Input, Row, Col } from "antd";

const AddressForm = () => {
    return (
        <div>
            City: <Input placeholder="Budapest" />
            Postal Code: <Input placeholder="1065" />
            Street: <Input placeholder="Nagymező u." />
            Street number: <Input placeholder="44" />
            Comment: <Input.TextArea placeholder="Don't eat my pizza :D" />
        </div>
    )
}

export default AddressForm
