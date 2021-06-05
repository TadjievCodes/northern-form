import React from 'react'
import '../scss/main.scss';

export default function AlreadySubmitted() {
  return (
     <section id="internship-signup" className="fr-internship-signup"> 
          <div className="fr-internship-signup-container">
            <h1 className="fr-heading-flair">Form already submitted!</h1>
             <h2 className='form-success'>Thanks for your interest!</h2>
               <p>We will review your application and contact you for additional information should your background and experience meet the requirements of one of our openings.</p>  
    </div>
  </section>  
  )
}

