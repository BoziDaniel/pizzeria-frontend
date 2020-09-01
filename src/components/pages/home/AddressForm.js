import React from "react";
import { Input } from "antd";

const AddressForm = (props) => {
  const handleCityChange = (e) => {
    props.setCity(e.target.value);
  };
  const handlePostalCodeChange = (e) => {
    props.setPostalCode(e.target.value);
  };
  const handleStreetChange = (e) => {
    props.setStreet(e.target.value);
  };

  const handleStreetNumberChange = (e) => {
    props.setStreetNumber(e.target.value);
  };

  const handleCommentChange = (e) => {
    props.setComment(e.target.value);
  };

  return (
    <div>
      City: <Input placeholder="Budapest" onChange={handleCityChange} />
      Postal Code:{" "}
      <Input placeholder="1065" onChange={handlePostalCodeChange} />
      Street: <Input placeholder="Nagymező u." onChange={handleStreetChange} />
      Street number:{" "}
      <Input placeholder="44" onChange={handleStreetNumberChange} />
      Comment:{" "}
      <Input.TextArea
        placeholder="Don't eat my pizza :D"
        onChange={handleCommentChange}
      />
    </div>
  );
};

export default AddressForm;
