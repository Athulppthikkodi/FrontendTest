import React from "react";
import Input from "../../ui/input/Input";
import "./SubmitForm.scss";
import Button from "../../ui/input/button/Button";

const SubmitForm = ({handleSubmit, handleInputChange, name}) => {

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Enter your name"
        type="text"
        name="name"
        onChange={handleInputChange}
        required
        value={name}
      />
      <Input
        label="Enter your email"
        type="email"
        name="email"
        onChange={handleInputChange}
        required
      />
      <Input
        label="Enter your phone number"
        type="tel"
        name="number"
        onChange={handleInputChange}
        minLength="10"
        maxLength="10"
      />
      <Input
        label="Enter your status"
        type="text"
        name="status"
        onChange={handleInputChange}
        required
      />
      <Input
        label="Enter your date"
        type="date"
        name="date"
        onChange={handleInputChange}
        required
      />
      <Button text="submit" />
    </form>
  );
};

export default SubmitForm;
