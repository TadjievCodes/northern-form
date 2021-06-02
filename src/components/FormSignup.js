import React from 'react'
import '../scss/main.scss'

const FormSignup = () => {
  return (
       
       <section id="internship_signup" className="fr-internship-signup"> 
          <div class="fr-internship-signup-container">
            <h1 className="fr-heading-flair">Internship signup form</h1>
              <div className="fr-internship-copy">
                  <p>Prepare for your career with a project Management, Web-Development, Graphic design, or Digital Marketing Internship at Northern.</p>
              </div>
        
         
        <form id="intern_form">
          <div className="fr-form-container flex flex-row flex-wrap flex-space-between">
            <div className="fr-form-group fr-form-group-half">
              <input 
                   id="email" 
                   name="email" 
                   type="email" 
                   placeholder="Your Email Address*" 
              />
            </div>
            <div className="fr-form-group fr-form-group-half">
              <select 
                    id="interests" 
                    name="interests" 
                    required
              >
              <option value="" disabled selected hidden>Your Interests</option>
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
              >Sign Up Now <span  className="fr-arrow-icon-right"></span></button>
            </div>
          </div>
        </form>
      </div>
    </section> 




       
       



    
     
  )
}

export default FormSignup
