
export default function validateInfo(values) {
  
  let error = false;
  let errors = {};

  let pattern = /\S+@\S+\.\S+/;
  
if (!values.email || !pattern.test(values.email) ) {
    
    document.getElementById("email").classList.add("fr-error");

    errors.email = 'Please enter a valid email address.';

    error  = true; 
     


  } 
      
      


  
  if(error === false) {
   // If error is not successfull then the form success will appear and the data on the console of the browser as an object
   

  // I get the values for email and interests input boxes and store them in an object
    const getValues = () => {
    return {
        email: values.email,
        interest: values.interests,
    };
}
     // To access them using ES6 method but useless here as console.log gets the values already
     //const {email, interest} = getValues();
    console.log(getValues());

  }
    
     return errors; 

}

// if email valid and form is submitted log the value of each field in browser console without refreshing the page
