import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { empolyAction } from "../store/employSlice";
import SubmitForm from "../components/submitForm/SubmitForm";

export default function UpdateEmploy() {
  let { id } = useParams();
  const employs = useSelector((state) => state.employ.employs);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const currentEmploysArray = employs.filter((employ) => employ.id === id);
  const currentEmploys = currentEmploysArray[0];
  const [updateInput, setUpdateInput] = useState(currentEmploys);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(empolyAction.updateEmploy(updateInput));
    navigate('/')
    }

  return (
    <SubmitForm
      formData={updateInput}
      setFormData={setUpdateInput}
      currentEmploys={currentEmploys}
      handleSubmit={handleSubmit}
    />
  );
}
