import React from 'react';
import "./ContactCard.css";
import mailIcon from "../../assets/img/mail@2x.png"
import phoneIcon from "../../assets/img/mobile-phone@2x.png"
import mapsIcon from "../../assets/img/maps@2x.png"
import facebookIcon from "../../assets/img/facebook32png@2x.png"
import whatsAppIcon from "../../assets/img/whatsapp1@2x.png"
import instagramIcon from "../../assets/img/instagram32png@2x.png"
import logo from "../../assets/img/link--marcapng@2x.png"

const ContactCard = () => {
    return (
        <>
            <div className="contact-card-container">

                <div className='contact-card-title-container'>
                    <h3 className='contact-card-title-text'>Contactanos</h3>
                </div>

                <div className='contact-card-primary-container'>
                    <img src={logo} alt='logo' className='contact-card-logo-img' />

                    <div className='contact-info-detail-container'>
                        <div className='contact-info-container'>
                            <img src={mailIcon} alt='email' className='contact-info-icon' />
                            <div className='contact-info-text'>
                                <a href='mailto:info@opticauricolor.com'><p className='contact-info-text-p'>info@opticauricolor.com.ar</p></a>
                            </div>
                        </div>

                        <div className='contact-info-container'>
                            <img src={phoneIcon} alt='telefono' className='contact-info-icon' />
                            <div className='contact-info-text'>
                                <p className='contact-info-text-p'>0261 5142004</p>
                            </div>
                        </div>

                        <div className='contact-info-container'>
                            <img src={mapsIcon} alt='ubicacion' className='contact-info-icon' />
                            <div className='contact-info-text'>
                                <p className='contact-info-text-p'>Espejo 166, Ciudad, Mendoza.<br /> CP 5500</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='contact-card-social-container'>

                    <div className='contact-card-title-container'>
                        <h3 className='contact-card-social-text'>Redes Sociales</h3>
                    </div>
                    <div className='contact-info-detail-container'>
                        <div className='contact-info-container'>
                            <div className='contact-info-icon-container'>
                                <img src={facebookIcon} alt='Facebook' className='contact-info-icon' />
                                <div className='contact-info-text'>
                                    <a className='contact-info-text-p' href='https://www.facebook.com/uricolor' target='blank'><p className='contact-info-text-p'>facebook.com/Uricolor</p></a>
                                </div>
                            </div>
                        </div>

                        <div className='contact-info-container'>
                            <div className='contact-info-icon-container'>
                                <div className="contact-info-icon">
                                    <img src={whatsAppIcon} alt='WhatsApp' className='contact-info-icon' />
                                </div>
                                <div className='contact-info-text'>
                                    <a className='contact-info-text-p' href='https://wa.me/5492612071115' target='blank'><p className='contact-info-text-p'>+54 9 261 207 1115</p></a>
                                </div>
                            </div>
                        </div>

                        <div className='contact-info-container'>
                            <div className='contact-info-icon-container'>
                                <div className="contact-info-icon">
                                    <img src={instagramIcon} alt='instagram' className='contact-info-icon' />
                                </div>
                                <div className='contact-info-text'>
                                    <a className='contact-info-text-p' href='https://instagram.com/uricolor' target='blank'><p className='contact-info-text-p'>@uricolor</p></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};


export default ContactCard;
