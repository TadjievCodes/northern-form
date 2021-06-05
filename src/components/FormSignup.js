import React from 'react'
import '../scss/main.scss'
import validate from './ValidateInfo';
import useForm from './UseForm'

const FormSignup = ({ submitForm, isLoaded }) => {
// Destructuring the values here
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return ( 
       <section id="internship-signup" className="fr-internship-signup"> 
          <div className="fr-internship-signup-container">
            <h1 className="fr-heading-flair">Internship signup form</h1>
              <div className="fr-internship-copy">
                  <p>Prepare for your career with a project Management, Web-Development, Graphic design, or Digital Marketing Internship at Northern.</p>
              </div>
        
         
        <form id="intern_form" onSubmit={handleSubmit} noValidate>
          <div className="fr-form-container flex flex-row flex-wrap flex-space-between">
            <div className="fr-form-group fr-form-group-half">
              <input 
                   id="email" 
                   name="email" 
                   type="email" 
                   placeholder="Your Email Address*"
                   value={values.email}
                   onChange={handleChange} 
              />
              {/* If the erros.email returns true or has an error then add the message from errors.email and className to style it */}
              {errors.email && <p className="fr-error-msg">{errors.email}</p>}
            </div>
            <div className="fr-form-group fr-form-group-half">
              <select 
                    id="interests" 
                    name="interests" 
                    required
                    value={values.interests}
                    onChange={handleChange}
              >
              <option value="" disabled defaultValue hidden>Your Interests</option>
              <option value="development">Development</option>
              <option value="design">Design</option>
              <option value="management">Management</option>
              <option value="marketing">Marketing</option>
              <option value="scripting">Scripting</option>
              </select>
            </div>
            <div  className="fr-form-group fr-form-group-full">

              <button 
                id="btnSubmit" 
                type="submit"  
                className="fr-base-btn fr-red-btn"
              >

             {/* As mentioned earlier the main logic here, if isLoaded not true, Sign up Now button else it changes to Submitting ellipsis */}

              {!isLoaded ? (<div>Sign Up Now <span  className="fr-arrow-icon-right"></span></div>
              ) : (<div>Submitting <div className='fr-ellipsis'><div></div><div></div><div></div><div></div></div></div>)
              }
              </button>
            </div>
          </div>
        </form>
      </div>
    </section> 

     
  )
}

export default FormSignup
