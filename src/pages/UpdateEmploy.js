import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Input from "../ui/input/Input";
import Button from "../ui/input/button/Button";
import { empolyAction } from "../store/employSlice";
export default function UpdateEmploy() {
  let { id } = useParams();
  const [updateInput, setUpdateInput] = useState({});
  const employs = useSelector((state) => state.employ.employs);
  
  const dispatch = useDispatch();
  const currentEmploysArray = employs.filter((employ) => employ.id === +id);
  const currentEmploys = currentEmploysArray[0];
  

  useEffect(() => {
    setUpdateInput(currentEmploys);
  }, [currentEmploys]);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUpdateInput((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }
  function handleSubmit(e) {
    e.preventDefault()
    dispatch(empolyAction.updateEmploy(updateInput))
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Enter your name"
        type="text"
        name="name"
        onChange={handleInputChange}
        required
        value={updateInput?.name}
      />
      <Input
        label="Enter your email"
        type="email"
        name="email"
        onChange={handleInputChange}
        required
        value={updateInput?.email}
      />
      <Input
        label="Enter your phone number"
        type="tel"
        name="number"
        onChange={handleInputChange}
        minLength="10"
        maxLength="10"
        value={updateInput?.number}
      />
      <Input
        label="Enter your status"
        type="text"
        name="status"
        onChange={handleInputChange}
        required
        value={updateInput?.status}
      />
      <Input
        label="Enter your date"
        type="date"
        name="date"
        onChange={handleInputChange}
        required
        value={updateInput?.date}
      />
      <Button text="submit" />
    </form>
  );
}
