import React from 'react';

import CTAButton from '../cta-button/cta-button.component'

import mechanicImg from '../../assetts/mechanic-imgs/undraw_maintenance_cn7j.svg'
import './mechanic-section.styles.scss';


const MechanicSection = () => {
    return (
        <div className='mechanic-section-container'>
            <h1> Our Mechanics </h1>
            <div className='mechanic-info-container'>
                <div className='mechanic-picture-container'>
                    <img className='mechanic-img' src={mechanicImg} />
                </div>
                <div className='mechanic-text-container'>
                    <h2>Our fully qualified mechanics can identify,<br />
                    advise and often fix the problem in the duration of a call</h2>
                </div>
            </div>
            <CTAButton content='Apply as Mechanic' />
        </div>
    )


}
export default MechanicSection;