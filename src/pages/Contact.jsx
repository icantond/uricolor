import React from 'react'
import ContactForm from '../components/contact/ContactForm'
import ContactCard from '../components/contact/ContactCard';
import ContactHero from '../components/contact/ContactHero';
import Map from '../components/contact/Map';
import './Contact.css'




const Contact = () => {
    return (
        <div className='contact-body'>
            <ContactHero />
            <ContactCard />
            <ContactForm />
            <Map />
        </div>
    )
}

export default Contact;
