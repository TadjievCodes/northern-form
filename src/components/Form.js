import React, { useState } from 'react';
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess';
import '../scss/main.scss';

const Form = () => {

 const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

/*
function handleChange(event) {
    const value =  event.taget.classList.add("fr-red-btn").empty().append("submitting <div class='fr-ellipsis'><div></div><div></div><div></div><div></div></div>");
}
*/

  return (
  <>
    <div className='form-container'>
        {!isSubmitted ? (

     /*       
          setTimeout(function() {
               handleChange();
               //e.target.classList.add("fr-red-btn").empty().append("submitting <div class='fr-ellipsis'><div></div><div></div><div></div><div></div></div>");
         }, 2000),
       */  

          <FormSignup submitForm={submitForm} />
        ) : (
        /* setTimeout(function() {
               document.querySelectorAll("fr-red-btn").empty().append("submitting <div class='fr-ellipsis'><div></div><div></div><div></div><div></div></div>");
         }, 2000), */
          <FormSuccess />
        )}
    </div>
  </>  
  )
}

export default Form
