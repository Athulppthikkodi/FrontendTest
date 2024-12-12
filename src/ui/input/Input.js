import React from "react";
import  './Input.scss'
const Input = ({ label , ...props}) => {
  return (
    <>
     <label>
      {label}
      
    </label>
    <input  {...props}/>
    </>
   
  );
};

export default Input;
