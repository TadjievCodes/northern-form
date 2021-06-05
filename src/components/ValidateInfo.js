
export default function validateInfo(values) {
  
  let error = false;
  let errors = {};
  let pattern = /\S+@\S+\.\S+/;
  
// if the value of email or the value of email doesn't match the pattern throw an error with a red border and a message to enter their email

if (!values.email || !pattern.test(values.email) ) {
    
    // targets the email id and add a new class fr-error which turns the border into red
    document.getElementById("email").classList.add("fr-error");
   
   // errors.email's message gets passed to FormSignup.js inside the form 
    errors.email = 'Please enter a valid email address.';

  // indicates that error is true here so in the next part, I can check if it's false 
    error  = true; 

  } 
      
  if(error === false) {
   // If error is not successfull then the form success will appear and the data on the console of the browser as an object
   // But when it takes us to another component of AlreadySubmitted then we cannot see the values of  the Object

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
    // Insert the email input data into localStorage for further validation in order not to allow another submission while refreshing the page
      localStorage.setItem("recentEmail", values.email);
      
  }
    
     return errors; 

}

// if email valid and form is submitted log the value of each field in browser console without refreshing the page
