import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
   const [values, setValues] = useState({
    email: '',
    interests: ''
  });

  const [errors, setErrors] = useState({});

  
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
   
   
  const handleSubmit = e => {
    e.preventDefault();

     setErrors(validate(values));
   
     
  }


  return { handleChange, handleSubmit, values, errors};
}

export default useForm;