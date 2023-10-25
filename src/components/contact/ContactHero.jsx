import React from 'react'
import logoBig from '../../assets/img/logo-big.png'
import frenteLocal from '../../assets/img/frente-local.png'
import './ContactHero.css';

const ContactHero = () => {
    return (
        <>
            <div className='contact-hero-container container-fluid'>
                <img className='contact-hero-logo-img' src={logoBig} alt='Logo Uricolor' />
                <div className='contact-hero-image-container'>
                    <img className='contact-hero-image' src={frenteLocal} alt='Frente del local ' />
                    <div className='hero-child'></div>
                </div>

            </div>
        </>
    )
}

export default ContactHero
