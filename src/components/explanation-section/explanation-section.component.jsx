import React from 'react';

import explanationImgPhone from '../../assetts/whatwedo/phonepov.png'
import explanationImgCar from '../../assetts/whatwedo/happydriver.png'

import CTAButton from '../cta-button/cta-button.component'

import './explanation-section.styles.scss';

const ExplanationSection = () => {
    return (
        <div className='explanation-container'>
            <div className='explanation-wrapper'>
                <h1> What We Do</h1>
                <div className='explanation-half'>
                    <div className='explanation-text-container'>
                        <h3> Got a problem with your car? No problem. </h3>
                        <h4> We put you in a web conference with a well trained mechanic in minutes. </h4>
                        <h4> Simply Sign up, request a web conference, and get an experts insight
                        into <br />any car related issues you might be having. </h4>
                    </div>
                    <div className='explanation-image-container'>
                        <img className='explanation-img' src={explanationImgPhone} />
                    </div>
                </div>
                <div className='explanation-half half-reverse'>
                    <div className='explanation-image-container'>
                        <img className='explanation-img' src={explanationImgCar} />
                    </div>
                    <div className='explanation-text-container'>
                        <h3>Your first choice when you have car trouble is now Car Trub!</h3>
                        <h4> 
                            There's no longer any need to take your car to an overpriced garage with a
                            vested interest in having <br /> you spend hundreds with them. </h4>
                        <h4> Car trub can save you that money, and often get you up and running in the duration of the call.</h4>
                    </div>
                </div>
                <div className='explanation-cta-button'>
                    <CTAButton content='Sign Up Now' />
                </div>
               
            </div>
            
        </div>
    )


}
export default ExplanationSection;