import { useState, useEffect } from 'react';

// Function to update the state
const useForm = (callback, validate) => {
   const [values, setValues] = useState({
    email: '',
    interests: ''
  });

// state for the errors and set inside empty object
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // whenever something changes, update the values in the input form with handleChange arrow function 
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
    // here spreading in the values and targeting the name of input
      ...values,
      [name]: value
    });
  };
   
   
  const handleSubmit = e => {
  // precventing default form submission here
    e.preventDefault();

     setErrors(validate(values));
     setIsSubmitting(true);
     
  }
 
  // this useEffect is going to display errors if there are any or allow us to sumbit if no errors
   useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors, isSubmitting, callback]
  );


  // returning the functions here
  return { handleChange, handleSubmit, values, errors};
}

export default useForm;