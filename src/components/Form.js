import React, { useState} from 'react';
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess';
import '../scss/main.scss';

const Form = () => {

 const [isSubmitted, setIsSubmitted] = useState(false);
 const [isLoaded, setIsLoaded] = useState(false);

// function that gets isSubmitted and isLoaded states into true to go ahead
  function submitForm() {

    setIsLoaded(true);

    // Every 2 seconds, setTimeout method makes the magic button ellipsis work but main true false logic
    // happens in FormSignup.js where I use the state of isLoaded
     setTimeout( () => setIsSubmitted(true), 2000);
  }


  return (
  <>
    <div className='form-container'>

    {/* Using a ternary operator here and in some other parts instead of if else to have cleaner code 
     If submitted not true then form sing up page else form success page or component*/}
    
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
