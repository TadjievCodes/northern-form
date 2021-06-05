import React, { useState} from 'react';
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess';
import '../scss/main.scss';

const Form = () => {

 const [isSubmitted, setIsSubmitted] = useState(false);
 const [isLoaded, setIsLoaded] = useState(false);


  function submitForm() {

    setIsLoaded(true);

    // Every 2 seconds, setTimeout method makes the magic button ellipsis work but main true false logic
    // happens in FormSignup.js where I use the state of isLoaded
     setTimeout( () => setIsSubmitted(true), 2000);
  }


  return (
  <>
    <div className='form-container'>
    {!isSubmitted ? (
      <FormSignup submitForm={submitForm} isLoaded={isLoaded} />
      ) : (
        <FormSuccess  />
      )
    }
      
    </div>
  </>  
  )
}

export default Form
