export default function validateInfo(values) {
  
  let error = false;
  let errors = {};

  let pattern = /\S+@\S+\.\S+/;
  
if (!values.email || !pattern.test(values.email) ) {
    
    document.getElementById("email").classList.add("fr-error");

    errors.email = 'Please enter a valid email address.';

     

 


  return errors; 
  } 


}


