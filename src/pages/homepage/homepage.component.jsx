
import React from 'react'

import Header from '../../components/header/header.component'
import CTAButton from '../../components/cta-button/cta-button.component'
import InstructionSection from '../../components/instruction-section/instruction-section.component'
import ExplanationSection from '../../components/explanation-section/explanation-section.component'
import MechanicSection from '../../components/mechanic-section/mechanic-section.component'
import Footer from '../../components/footer/footer.component'

import { useAuth0 } from "@auth0/auth0-react";

import './homepage.styles.scss';


function HomePage() {

  return (
    <div className="homepage-container">
      <Header />

       <div className='title-wrapper'>
       <div className="title-container">
        <h1>Car Trouble? Find out exactly what's<br/>
             wrong with your car using Car-Trub.</h1>
             <CTAButton content={'Lets go!'}/>
       </div> 
       </div>

       <InstructionSection />
       <ExplanationSection />
       <MechanicSection />
       <div className='contact-page-circle-1'></div>
       <div className='contact-page-circle-2'></div>
       <Footer />
    </div>
  );
}

export default HomePage;