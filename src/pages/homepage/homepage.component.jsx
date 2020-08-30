
import React from 'react'

import Header from '../../components/header/header.component'
import CTAButton from '../../components/cta-button/cta-button.component'
import InstructionSection from '../../components/instruction-section/instruction-section.component'

import './homepage.styles.scss';

function HomePage() {
  return (
    <div className="homepage-container">
      <Header />
      <div className="title-container">
        <h1>Car Trouble? Find out exactly what's<br/>
            wrong with your car using Car-Trub.</h1>
            <CTAButton content={'Lets go!'}/>
      </div>
      <InstructionSection />
      <div className='contact-page-circle-1'></div>
    </div>
  );
}

export default HomePage;