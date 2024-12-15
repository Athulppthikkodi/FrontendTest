import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { empolyAction } from "../store/employSlice";
import SubmitForm from "../components/submitForm/SubmitForm";

const Home = () => {
  const [formData, setFormData] = useState({
    id: uuidv4(),
    name: "",
    leagues: [],
    position: "",
    status: "",
    height: "",
    date: "",
    age: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(empolyAction.addEmploy(formData));
    navigate('/employs')
    
  }

  return (
    <SubmitForm
      formData={formData}
      setFormData={setFormData}
      handleSubmit={handleSubmit}

    />
  );
};

export default Home;
