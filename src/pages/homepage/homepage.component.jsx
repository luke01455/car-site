
import React from 'react'
import Header from '../../components/header/header.component'
import './homepage.styles.scss';

function HomePage() {
  return (
    <div className="homepage-container">
      <Header />
      <div className="title-container">
        <h1>Car Trouble? Find out exactly what's<br/>
            wrong with your car using Car-Trub.</h1>
      </div>
      <div className='contact-page-circle-1'></div>
    </div>
  );
}

export default HomePage;