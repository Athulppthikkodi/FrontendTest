import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SubmitForm from "../components/submitForm/SubmitForm";
import { useDispatch } from "react-redux";
import { empolyAction } from "../store/employSlice";
const Home = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    number: "",
    status: "",
    date: "",
  });
  const dispatch = useDispatch();
  function handleInputChange(e) {
    let { name, value } = e.target;
    if (name === "date") {
      value = new Date(value).toISOString();
    }
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
        id: uuidv4(),
      };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(empolyAction.addEmploy(formData));
    e.target.reset();
  }
  return (
    <SubmitForm
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
    />
  );
};

export default Home;
