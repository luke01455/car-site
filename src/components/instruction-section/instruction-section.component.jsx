import React from 'react';

import CTAButton from '../cta-button/cta-button.component'

import './instruction-section.styles.scss';

import callingImg from '../../assetts/instruction-imgs/undraw_calling_kpbp.svg'
import carImg from '../../assetts/instruction-imgs/undraw_fast_car_p4cu.svg'
import financeImg from '../../assetts/instruction-imgs/undraw_personal_finance_tqcd.svg'

const InstructionSection = () => {
    return (
        <div className='instruction-container'>
            <div className='instruction-wrapper'>
                <div className='instruction'>
                    <div className='instruction-img-container'>
                        <img className='instruction-img' src={callingImg} />
                    </div>
                    <div className='instruction-text-container'>
                        <h2>Get a video call with a mechanic in minutes.</h2>
                    </div>
                </div>
                <div className='instruction'>
                    <div className='instruction-img-container'>
                        <img className='instruction-img' src={financeImg} />
                    </div>
                    <div className='instruction-text-container'>
                        <h2>At a fraction of  the cost of taking it into a garage.</h2>
                    </div>
                </div>
                <div className='instruction'>
                    <div className='instruction-img-container'>
                        <img className='instruction-img' src={carImg} />
                    </div>
                    <div className='instruction-text-container'>
                        <h2>We often get your car back on the road during the call</h2>
                    </div>
                </div>
            </div>
            <CTAButton content={'Start Now'} />

        </div>
    )


}
export default InstructionSection;