import React, { useState} from 'react';
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess';
import '../scss/main.scss';

const Form = () => {

 const [isSubmitted, setIsSubmitted] = useState(false);
 const [isLoaded, setIsLoaded] = useState(false);


  function submitForm() {

    setIsLoaded(true);

    setTimeout( () => setIsSubmitted(true), 2000);
  }


  return (
  <>
    <div className='form-container'>
        {!isSubmitted ? (

          <FormSignup submitForm={submitForm} isLoaded={isLoaded} />
        ) : (

          <FormSuccess  />
        )}
    </div>
  </>  
  )
}

export default Form
